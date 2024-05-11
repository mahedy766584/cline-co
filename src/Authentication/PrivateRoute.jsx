import PropTypes from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext)

    const location = useLocation();
    console.log(location.pathname)

    if (user?.email) {
        return children;
    }

    if (loading) {
        return <div className="h-[85vh] flex justify-center items-center"><span className="loading loading-spinner text-secondary"></span></div>
    }

    return (
        <Navigate
            state={location.pathname} to={'/login'} replace
        >

        </Navigate>
    );
};

export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node
};