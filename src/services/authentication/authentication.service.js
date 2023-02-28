import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const loginRequest = ( email, password ) => {
    const auth = getAuth();
    return(
    signInWithEmailAndPassword(auth,email, password)
    )
}

// export const onRegister