import { auth, googleProvider } from "../config/firebase"
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import { useState } from "react";

export const Auth = () => {

    const [email, setemail] = useState("");
    const [password, setpassowrd] = useState("");

    console.log(auth?.currentUser?.email)

    const signIn = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
        } catch (err) {
            console.error(err)
        }
    };

    const signInWithGoogle = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (err) {
            console.error(err)
        }
    };

    const logout = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            console.error(err)
        }
    };

    return (
        <div>
            <input
                placeholder="Email..."
                onChange={(e) => setemail(e.target.value)}
            />
            <input
                placeholder="Password..."
                type="password"
                onChange={(e) => setpassowrd(e.target.value)}
            />
            <button onClick={signIn}>Sign In</button>

            <button onClick={signInWithGoogle}>Sign in with Google</button>

            <button onClick={logout}>Logout</button>


        </div>
    )
};