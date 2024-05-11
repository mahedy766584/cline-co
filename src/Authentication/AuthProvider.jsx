import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.config.init";
// import UseAxios from "../Hooks/UseAxios"

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {

    // const axios = UseAxios()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            // const userEmail = currentUser?.email || user?.email;
            // const userEmailObj = { email: userEmail }
            // console.log('user email from current user :', userEmailObj)
            setUser(currentUser)
            console.log('Current user on onAuthStateChanged', currentUser)
            setLoading(false)

            // if (currentUser) {
            //     axios.post('/auth/token', userEmailObj)
            //         .then(res => {
            //             console.log('Token response', res.data)
            //         })
            // } else {
            //     axios.post('/auth/token', userEmailObj)
            //         .then(res => {
            //             console.log('Token response', res.data)
            //         })
            // }
        })
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleLogin,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
};