import React, { useEffect, useState } from 'react';
import { auth } from "../firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth"

function SignIn() {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
        updateEmail()
        updatePassword()
    }, [])
    
    function updateEmail() {
        setEmail(document.getElementById("email").value)
    }

    function updatePassword() {
        setPassword(document.getElementById("password").value)
    }

    function login() {
        console.log("login!")
        console.log()
        console.log()
        createUserWithEmailAndPassword(auth, "g7058190@gmail.com", "password")
        .then((userCredential) => {
            const user = userCredential.user
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code
            const errorMessage = error.errorMessage

            console.log(errorCode + " : " + errorMessage)
        })
    }

    return (
        <form>
            <label>Email: </label><input id="email" type="text" onChange={updateEmail} />
            <label>Password: </label><input id="password" type="password" onChange={updatePassword} />
            <input id="submit" type="submit" onSubmit={login}/>
        </form>
    )
}

export default SignIn;