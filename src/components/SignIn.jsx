import React, { useState } from "react";
import { auth } from "../config/firebase";
import {
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { googleProvider } from "../config/firebase";

const SignIn = () => {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");

  const signUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, username, pass);
      alert("Created An Account");
      setUsername("");
      setPass("");
    } catch (err) {
      console.error(err);
    }
  };
  const signIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, username, pass);
      alert("Signed In");
      setUsername("");
      setPass("");
    } catch (err) {
      console.error(err);
    }
  };

  const signWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };
  const logOut = async () => {
    try {
      await signOut(auth);
      alert("Signed Out");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      {console.log(auth?.currentUser?.email)}
      <input
        type="text"
        placeholder="Email..."
        onChange={(e) => setUsername(e.target.value)}
        value={username}
      />
      <br />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => setPass(e.target.value)}
        value={pass}
      />
      <br />
      <button onClick={signUp}>Sign Up</button>
      <br />
      <button onClick={signIn}>Sign In</button>
      <br />
      <button onClick={signWithGoogle}>Sign In with Google</button>
      <br />
      <button onClick={logOut}>Sign Out</button>
    </div>
  );
};

export default SignIn;
