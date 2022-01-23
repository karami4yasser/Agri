import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
import { useStateValues } from "./StateProvider";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (auth) {
          router.push("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        if (auth) {
          sendEmailVerification(auth.currentUser).then(() => {
            // Email verification sent!
            router.push("/");
            // ...
          });
          router.push("/");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
        // ..
      });
  };

  return (
    <div className="flex flex-col items-center h-4">
      <img
        onClick={() => {
          router.push("/");
        }}
        className="mr-auto ml-auto mt-5 mb-20 object-contain w-52"
        src="https://i.ibb.co/FzBsVJh/AGRI-1.png"
        alt=""
      />
      <div className="w-300 object-contain flex flex-col">
        <form>
          <h5>e-mail</h5>
          <input
            className="h-8  mb-5 "
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>password</h5>
          <input
            className="h-8 w-auto mb-5 "
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </form>
        <button
          onClick={signIn}
          type="submit"
          className="bg-[#f0c14b] w-30 h-14 border-4 mx-8"
        >
          sign in
        </button>
        <p className="mx-7 my-2 text-xl">you agre azebi</p>
        <button
          onClick={register}
          type="submit"
          className="whitespace-nowrap bg-[#bda15a] w-30 h-14 border-4 mx-8"
        >
          create account
        </button>
      </div>
    </div>
  );
}

export default Login;
