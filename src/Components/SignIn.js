import React, { useEffect, useState } from 'react';
import { auth } from "../firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

function SignIn(props) {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const [validUser, setValidUser] = useState()

    useEffect(() => {
        updateError()
        userState()
        updateEmail("")
        updatePassword("")
    }, [])

    function updateEmail() {
        setEmail(document.getElementById("email").value)
    }

    function updatePassword() {
        setPassword(document.getElementById("password").value)
    }

    function updateError(message) {
        setError(message)
    }

    const login = (event) => {
        event.preventDefault()
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user
                userState()
                props.refreshDataFromDatabase()
            })
            .catch((error) => {
                const errorCode = error.code
                //const errorMessage = error.errorMessage

                updateError(errorCode)
            })
    }

    const signout = (event) => {
        signOut(auth)
        .then(() => {
            const user = null
            userState()
        })
    }

    function userState() {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setValidUser(true)
            } else {
                setValidUser(false)
            }
        })
    }

    if (validUser) {
        return (
        <form>
            <input id="sign-out" type="submit" onClick={signout}></input>
        </form>
        )
    } else {
        return (
        <form onSubmit={login}>
            <label>Email: </label><input id="email" type="text" onChange={updateEmail} /><br />
            <label>Password: </label><input id="password" type="password" onChange={updatePassword} /><br />
            <input id="submit" type="submit"></input>
            <div id="error">{error ? error : ""}</div>
        </form>
        )
    }
}

export default SignIn;