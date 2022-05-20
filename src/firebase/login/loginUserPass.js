import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

export const loginUserPass = ( email, password ) => {
    console.log( 'lo intentó' )
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
        console.log( user )
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log( error )
      });
}