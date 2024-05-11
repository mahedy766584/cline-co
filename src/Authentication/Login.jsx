import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";
import UseAxios from "../Hooks/UseAxios";

const Login = () => {

    const { loginUser, googleLogin, logOut } = useContext(AuthContext);

    const axios = UseAxios()
    const location = useLocation()
    const navigate = useNavigate()

    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    const handleSignIn = async (e) => {
        e.preventDefault();
        const users = { email, password };
        console.log(users);

        const toastId = toast.loading('Log In.......')


        try {

            const user = await loginUser(email, password)
            console.log("user email", user.user.email)

            navigate(location.state ? location.state : '/')

            const res = await axios.post('/auth/token', {
                email: user.user.email
            })
            
            console.log("user data", res)

            if (res?.data?.success) {
                toast.success('Successfully Account Logged', { id: toastId })
                navigate('/')
            }
            else {
                logOut()
                    .then((result) => {
                        console.log(result)
                        //part 2 : 21mi 24se
                    }).catch((error) => {
                        console.log(error.message)
                    })
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message, { id: toastId })
        }

        // loginUser(email, password)
        //     .then((result) => {
        //         const loggedUser = result.user
        //         console.log(loggedUser)
        //         toast.success('Successfully Account Logged', { id: toastId })
        //         navigate(location.state ? location.state : '/')

        //     }).catch((error) => {
        //         console.log(error)
        //         toast.error(error.message, { id: toastId })
        //     })
    }

    const handleGoogleLogin = () => {
        googleLogin()
            .then((result) => {
                const user = result.user
                console.log(user)
                navigate('/')
            }).catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-[83vh]">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-[500px] max-w-screen-xl shadow-2xl bg-base-100">
                        <form className="card-body"
                            onSubmit={handleSignIn}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    onBlur={(e) => changeEmail(e.target.value)}
                                    type="email"
                                    placeholder="email"
                                    className="input input-bordered"
                                    required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    onBlur={(e) => changePassword(e.target.value)}
                                    type="password"
                                    placeholder="password"
                                    className="input input-bordered"
                                    required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary text-white">Login</button>
                            </div>
                            <div>
                                <p>New to this Page Please <Link className="text-primary" to={'/signUp'}>Sign Up</Link></p>
                            </div>
                        </form>
                        <div className="-mt-4 py-2  px-8 flex justify-center items-center">
                            <button onClick={handleGoogleLogin} className="text-2xl py-2 border-2 border-primary rounded-full px-8 w-full flex justify-center items-center"><FcGoogle /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;