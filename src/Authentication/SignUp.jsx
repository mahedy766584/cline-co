import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import toast from "react-hot-toast";

const SignUp = () => {

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate()

    const [name, changeName] = useState('');
    const [email, changeEmail] = useState('');
    const [password, changePassword] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        const users = { name, email, password }
        console.log(users)

        const toastId = toast.loading('Log In.......')

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast.success('Successfully Logged', {id: toastId})
                navigate('/')
            }).catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div>
            <div className="hero min-h-[83vh] ">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card shrink-0 w-[500px] max-w-screen-xl shadow-2xl bg-base-100">
                        <form className="card-body"
                            onSubmit={handleSignUp}
                        >
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    onBlur={(e) => changeName(e.target.value)}
                                    type="text"
                                    placeholder="name"
                                    className="input input-bordered"
                                    required />
                            </div>
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
                                <p>New to this Page Please <Link className="text-primary" to={'/login'}>Sign In</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;