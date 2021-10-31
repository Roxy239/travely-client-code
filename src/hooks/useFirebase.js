// import {
//     getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged
// } from "firebase/auth";

import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import swal from 'sweetalert';
import initializeAuthentication from './../components/Login/Firebase/firebase.init';

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const history = useHistory();

    const [isLoading, setIsLoading] = useState(true);

    const auth = getAuth();



    // sign in using google
    const signInUsingGoogle = () => {
        setIsLoading(true);

        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
                console.log(result)
                swal("Good job!", "Account has been created!", "success");
                history.push('/');

            })
            .finally(() => setIsLoading(false));
    }

    //handling state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            }
            else {
                // user is signed out
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [])




    //logging out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth)
            .then(() => {
                swal("Logout Successful!", "You are logged out!", "success");
                // history.push('/signin')

            })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        isLoading,
        signInUsingGoogle,
        logOut

    }
}

export default useFirebase;