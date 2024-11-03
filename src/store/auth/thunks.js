import { loginWithEmailPassword, logoutFirebase, registerUseWithEmailPassword, singInWithGoogle } from "../../firebase/providers"
import { clearNoteLogout } from "../journal/journalSlice"
import { checkingCredentials, login, logout } from "./authSlice"

export const checkingAuthentication = (email, password) => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
    }
}

export const startGoogleSingIn = () => {
    return async (dispatch) => {
        dispatch(checkingCredentials())
        const result = await singInWithGoogle();
        // console.log({ result })
        if (!result.ok) return dispatch(logout(result.errorMessage));
        dispatch(login(result))
    }
}

export const startCreatingUserWithEmailPassword = (email, password, displayName) => {
    return async (dispatch) => {
        dispatch(checkingCredentials());
        const { ok, uid, photoURL, errorMessage } = await registerUseWithEmailPassword({ email, password, displayName })
        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, displayName, email, photoURL }))
    }
}

export const startLoginWithEmailPassword = ({ email, password }) =>{
    return async (dispatch) =>{
        // dispatch(login());
        dispatch(checkingCredentials());
        // const resultado = await loginWithEmailPassword({ email, password });
        
        // console.log('resultado ----------------------------');
        // console.log(resultado);
        const { ok, uid, photoURL, errorMessage, displayName } = await loginWithEmailPassword({ email, password });
        if (!ok) return dispatch(logout({ errorMessage }));

        dispatch(login({ uid, email, photoURL, displayName }))
    }
}

export const startLogout = () =>{
    return async(dispatch) =>{
        await logoutFirebase();
        dispatch(clearNoteLogout());
        dispatch(logout())


    }
}