import axios from "axios";
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5002/api/v1',
    withCredentials: true
});

const UseAxios = () => {

    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);

    useEffect(() => {
        axiosSecure.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            console.log('error tracked in the interceptors', error)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                logOut()
                    .then(result => {
                        console.log(result)
                        navigate('/login')
                    })
                    .catch(error => {
                        console.log(error.message)
                    })
            }
            //day-3, video-2, 31 mi
        });
    },[])

    return axiosSecure;
};

export default UseAxios;