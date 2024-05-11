import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const NaveItems = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then((result) => {
                console.log(result.user)
            }).catch((error) => {
                console.log(error.message)
            })
    }

    return (
        <div className="lg:flex gap-5">
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "btn btn-primary text-white" : "btn btn-ghost"
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "btn btn-primary text-white" : "btn btn-ghost"
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "btn btn-primary text-white" : "btn btn-ghost"
                    }
                >
                    Contact
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/services"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "btn btn-primary text-white" : "btn btn-ghost"
                    }
                >
                    Services
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/order"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "btn btn-primary text-white" : "btn btn-ghost"
                    }
                >
                    Orders
                </NavLink>
            </li>
            <li>
                {
                    user?.email ? <button className="btn btn-primary btn-outline"
                        onClick={handleLogout}>
                        Logout
                    </button> : <NavLink
                        to="/login"
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "btn btn-primary text-white" : "btn btn-ghost"
                        }
                    >
                        Login
                    </NavLink>
                }
            </li>
        </div>
    );
};

export default NaveItems;