"use client";

import { FilledButton } from "@/components/buttons";
import { InputField } from "@/components/fields";
import { LoadingModal } from "@/components/modals";
import { useAuthState } from "@/lib/authState";
import { AuthError } from "firebase/auth";
import { FirestoreError } from "firebase/firestore";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import FeaturesSection from "@/components/FeaturesSection";

function Complete() {
  const { auth, loading: authLoading } = useAuthState();
  const router = useRouter();

  const [practice, setPractice] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [terms_and_conditions, setTerms_and_conditions] = useState(false);

  const completeProfile = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/auth/profile", {
        headers: {
          "Content-Type": "application/json",
          // @ts-ignore
          authorization: `Bearer ${auth.user.accessToken}`,
        },
        method: "POST",
        body: JSON.stringify({
          name: auth.user!.displayName,
          practice: practice,
          jurisdiction: jurisdiction,
        }),
      });
      if (!response.ok) {
        setError(
          "An error occurred while creating your account profile. Please try again later with the same email and password. If the problem persists, contact support. \n Error: " +
            (await response.text())
        );
      } else {
        // navigate to dashboard
        router.push("/dashboard");
      }
    } catch (error) {
      setError((error as AuthError | FirestoreError).message);
    }
    setLoading(false);
  };

  if (authLoading) {
    return <LoadingModal />;
  }

  return (
    <div className="min-h-screen flex flex-col lg:flex-row">
      {/* Left side - Complete Profile Form */}
      <div className="lg:flex-1 flex items-center justify-center p-6 my-8">
        <div className="w-full max-w-md pl-6">
          <Image
            src={"/Logo-Light.png"}
            alt="Theraptly"
            width={210}
            height={60}
            className="block"
          />
      <h2 className="pt-6 pb-2 text-[#111111] text-2xl font-bold text-center">
        Complete your profile setup
      </h2>
      <p className="text-[#4b4b4b] text-base font-normal text-center">
        Enter your personal data to complete your account.
      </p>
      <form
        onSubmit={completeProfile}
        className="mt-6 max-w-96 w-full mx-auto flex flex-col gap-6"
      >
        <InputField
          id="practice"
          labeltext="Practice"
          name="practice"
          placeholder="eg. Health Care"
          value={practice}
          onChange={(e) => setPractice(e.target.value)}
          required
        />
        <InputField
          id="jurisdiction"
          labeltext="Jurisdiction"
          name="jurisdiction"
          placeholder="eg. Califonia, USA"
          value={jurisdiction}
          onChange={(e) => setJurisdiction(e.target.value)}
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
            {loading ? "•••" : "Complete your profile"}
          </FilledButton>
        </div>
          </form>
        </div>
      </div>
      
      {/* Right side - Features Section */}
      <div className="hidden lg:flex w-[50%] bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-3xl m-8 mr-8">
        <div className="w-full p-12">
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
}

export default Complete;
