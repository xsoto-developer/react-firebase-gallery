import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";
import { Password } from "@mui/icons-material";
//import {FirebaseAuth} from "/src/firebase/config.js";

const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async () => {
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult(result);
        // console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx');
        // console.log({credentials});
        const user = result.user;
        console.log(user);
        const { displayName, email, photoURL, uid } = result.user;
        return {
            ok: true,
            // User info
            displayName, email, photoURL, uid
        }
    } catch (error) {
        console.error(error);
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        return {
            ok: false,
            errorMessage,
            errorCode,
            email,
            credential
        }

    }
}


export const registerUseWithEmailPassword = async ({ email, password, displayName }) => {
    try {
        console.log({ email, password, displayName })
        const resp = await createUserWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL } = resp.user;
        console.log(resp)
        // TODO
        await updateProfile(FirebaseAuth.currentUser, { displayName })
        return {
            ok: true,
            uid, photoURL, email, displayName
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}


export const loginWithEmailPassword = async ({ email, password }) => {
    // signInWithEmailAndPassword
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const { uid, photoURL, displayName } = resp.user;
        return {
            ok: true,
            uid, photoURL, displayName
        }
    } catch (error) {
        console.log(error)
        return {
            ok: false,
            errorMessage: error.message,
        }
    }
}

export const logoutFirebase = async () => {
    return await FirebaseAuth.signOut();
}