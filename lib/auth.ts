// lib/auth.js
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup, updateProfile } from "firebase/auth";
import { auth } from "./firebase";

// Sign up a user
export const signUp = async (email: string, password: string, name: string) => {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    //   update the user's display name
    await updateProfile(userCredential.user, { displayName: name });
    return userCredential.user;
};

// Sign in a user
export const signIn = async (email: string, password: string) => {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
};

// Sign in a user using Google(popup).
export const signInWithGoogle = async () => {

    const provider = new GoogleAuthProvider();
    provider.addScope('profile');
    provider.addScope('email');
    const result = await signInWithPopup(auth, provider);

    // The signed-in user info.
    const user = result.user;
    // // This gives you a Google Access Token.
    // const credential = GoogleAuthProvider.credentialFromResult(result);
    // const token = credential?.accessToken;
    console.log("User", user.email);
    return user;
}

// Sign out the current user
export const logOut = async () => {
    await signOut(auth);
};

// TODO: Complete sign up