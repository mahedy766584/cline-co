import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../Error/ErrorPage";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import Contact from "../Pages/Contact";
import SignUp from "../Authentication/SignUp";
import Login from "../Authentication/Login";
import PrivateRoute from "../Authentication/PrivateRoute";
import ServicesBooking from "../Pages/ServicesBooking";
import Orders from "../Pages/Orders";


const myCreatedRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "/about",
                element: <PrivateRoute><About /></PrivateRoute>
            },
            {
                path: "/services",
                element: <PrivateRoute><Services /></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: "/signUp",
                element: <SignUp />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/servicesBooking/:id",
                element: <PrivateRoute><ServicesBooking/></PrivateRoute>,
                // loader: ({params}) => fetch(`http://localhost:5002/api/v1/services/${params.id}`)
            },
            {
                path: "/order",
                element: <PrivateRoute><Orders/></PrivateRoute>
            }
        ]
    }
])

export default myCreatedRouter;