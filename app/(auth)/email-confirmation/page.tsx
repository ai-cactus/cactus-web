import { FilledButton } from "@/components/buttons";
import FeaturesSection from "@/components/FeaturesSection";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function EmailConfirmationPage() {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row font-inter m-4 bg-white">
      {/* Left Column - Confirmation Content */}
      <div className="text-center flex flex-col px-10 py-10 min-h-screen justify-center flex-1 items-center p-6 lg:p-12 max-w-2xl mx-auto w-full">
        <Image
          src="/email-confirm.png"
          alt="email confirmation"
          width={400}
          height={350}
          className="inline-block mx-auto h-56 w-auto"
          priority
        />
        <h1 className="text-3xl font-bold text-center mt-7">Check your inbox</h1>
        <p className="my-7 text-center">
          We&apos;ve sent you a secure confirmation link to <strong>jane.doe@healthsecure.org</strong>. Please click the link to verify your account.
        </p>
        <FilledButton className="w-full max-w-xs">
          Open Gmail
        </FilledButton>
        <p className="text-center text-[#4b4b4b] text-base font-normal mt-7">
          Don&apos;t receive an email? Check your spam folder or <br />
          <Link 
            href="/signup" 
            className="text-[#4b62cc] text-base font-bold hover:underline"
          >
            Resend email
          </Link>
        </p>
        <div className="mt-4 text-center">
          <Link 
            href="/signup" 
            className="text-[#4b62cc] text-base font-bold hover:underline"
          >
            Change Email Address
          </Link>
        </div>
      </div>

      {/* Right Column - Feature Showcase */}
      <div className="hidden lg:flex flex-1 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 rounded-l-3xl overflow-hidden">
        <div className="w-full p-12 flex items-center justify-center">
          <FeaturesSection />
        </div>
      </div>
    </div>
  );
}

export default EmailConfirmationPage;