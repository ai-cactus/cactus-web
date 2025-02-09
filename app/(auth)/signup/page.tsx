"use client";

import { FilledButton, GoogleAuthButton } from "@/components/buttons";
import { InputField } from "@/components/fields";
import { signUp } from "@/lib/auth";
import { AuthError, User } from "firebase/auth";
import { FirestoreError } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

import { useRouter } from "next/navigation";
import { AppRoutes } from "@/utils/routes";

function page() {
  const router = useRouter();
  const [first_name, setFirst_name] = useState("");
  const [last_name, setLast_name] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [terms_and_conditions, setTerms_and_conditions] = useState(false);

  const handleSignup = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      let user: User = await signUp(
        email,
        password,
        `${first_name} ${last_name}`
      );
      // try {
      //    user =
      // } catch (error) {
      //     const _error = (error as AuthError)
      //     if (_error.code === 'auth/email-already-in-use') {
      //         // If the email is already in use, sign in with the email and password
      //         // This will allow the user to complete their profile
      //         user = await signIn(email, password)
      //     } else {
      //         // If the error is not email-already-in-use, rethrow the error
      //         throw error;
      //     }
      // }
      console.log(user);
      router.push("/signup/complete");
    } catch (error) {
      setError((error as AuthError | FirestoreError).message);
    }
    setLoading(false);
  };

  return (
    <div className="flex flex-col justify-center min-h-screen px-10 py-16">
      <Image
        src={"/Logo-Light.png"}
        alt="cactus ai"
        width={210}
        height={60}
        className="inline-block mx-auto"
      />
      <h2 className="pt-6 pb-2 text-[#111111] text-2xl font-bold text-center">
        Create a new account
      </h2>
      <p className="text-[#4b4b4b] text-base font-normal text-center">
        Enter your personal data to create your account.
      </p>
      <form
        onSubmit={handleSignup}
        className="mt-6 max-w-96 w-full mx-auto flex flex-col gap-6"
      >
        <div className="flex flex-row gap-4">
          <InputField
            id="first_name"
            labeltext="First Name"
            name="first_name"
            placeholder="eg. John"
            value={first_name}
            onChange={(e) => setFirst_name(e.target.value)}
            required
          />
          <InputField
            id="last_name"
            labeltext="Last Name"
            name="last_name"
            placeholder="eg. Wick"
            value={last_name}
            onChange={(e) => setLast_name(e.target.value)}
            required
          />
        </div>
        <InputField
          id="email"
          labeltext="Email"
          type="email"
          name="email"
          placeholder="eg. johnfrans@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <InputField
          id="password"
          labeltext="Password"
          type="password"
          name="password"
          placeholder="••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <div className="flex flex-row justify-between mb-10">
          <div className="flex flex-row gap-1 items-center">
            <input
              type="checkbox"
              name="terms_and_conditions"
              id="terms_and_conditions"
              checked={terms_and_conditions}
              onChange={(e) => setTerms_and_conditions(e.target.checked)}
            />
            <label
              htmlFor="terms_and_conditions"
              className="text-sm font-semibold"
            >
              Yes, I understand and agree to the{" "}
              <Link
                href=""
                className="text-[#4b62cc] font-semibold whitespace-nowrap"
              >
                Cactus Terms of Service
              </Link>
            </label>
          </div>
        </div>
        <div>
          {error && (
            <p className="text-red-500 text-sm font-semibold mb-2">{error}</p>
          )}
          <FilledButton
            className="w-full"
            type="submit"
            disabled={!terms_and_conditions}
          >
            {loading ? "•••" : "Sign Up"}
          </FilledButton>
        </div>
        <GoogleAuthButton role="signup" />
        <p className="text-center text-[#4b4b4b] text-base font-normal">
          You have an account?{" "}
          <Link
            href={AppRoutes.auth.login.path}
            className="text-[#4b62cc] text-base font-bold"
          >
            Login
          </Link>
        </p>
      </form>
    </div>
  );
}

export default page;
