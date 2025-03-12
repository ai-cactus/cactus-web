"use client";
import { requestADemoAction } from "@/lib/actions/demo";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState, useRef } from "react";
import Input from "./shared/input";
import Textarea from "./shared/textarea";
import { FilledButton } from "./buttons";
import Image from "next/image";
import WebsiteAssets from "@/lib/assets/website-assets";

interface FormData {
  fullName: string;
  email: string;
  message: string;
}

export function RequestADemoForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const form = e.currentTarget;
    const data: FormData = {
      fullName: form.fullName.value,
      email: form.email.value,
      message: form.message.value,
    };

    // Basic validation
    if (!data.fullName || !data.email || !data.message) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    try {
      // Add timestamp to the data
      const demoRequest = {
        ...data,
        createdAt: new Date(),
        status: "pending",
      };

      // Save to Firestore
      await addDoc(collection(db, "demo_requests"), demoRequest);
      setSuccess(true);

      // Reset form using the ref
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      setError("Failed to submit request. Please try again.");
      console.error("Error submitting demo request:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="flex flex-col lg:flex-row  gap-0 md:gap-[4.4375rem] items-center justify-center"
    >
      <div className="flex-1 flex flex-col gap-4 lg:gap-0 mb-10 lg:mb-0 bg-black rounded-3xl px-6 md:px-[3.5125rem] py-[3.8125rem]">
        <FilledButton className="w-[11.1875rem] h-12 rounded-[10px] bg-white text-[black]">
          Request a Demo
        </FilledButton>
        <h2 className="text-left text-3xl md:text-[2.75rem] pt-3 font-bold md:leading-[3.5625rem] md:tracking-tight">
          Let us score your compliance policy
        </h2>
        <p className="text-left text-[1.2rem] font-manrope">
          Submit your information below and let&apos;s get you started
        </p>
      </div>
      <div className="flex-1 flex flex-col gap-4 w-full">
        <Input
          type="text"
          required
          name="fullName"
          placeholder="Full name"
          loading={loading}
        />
        <Input
          type="email"
          required
          name="email"
          placeholder="Email Address"
          loading={loading}
        />
        <div className="relative bg-[#010023] rounded-[20px]  h-[8.6875rem] ">
          <textarea
            required
            name="message"
            placeholder="Message"
            disabled={loading}
            className="px-6  py-2 w-full h-[8.6875rem] rounded-[20px] placeholder:text-white disabled:opacity-50 bg-transparent"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-fit font-medium px-8 py-3 rounded-full bg-[#14F195]  text-black disabled:opacity-50 flex items-center justify-center gap-1"
        >
          <Image
            src={WebsiteAssets.Mail}
            width={20}
            height={20}
            alt="submit icon"
          />
          <p>{loading ? "Submitting..." : "Submit"}</p>
        </button>
        {error && <p className="text-red-400">* {error}</p>}
        {success && (
          <p className="text-green-400">Request submitted successfully!</p>
        )}
      </div>
    </form>
  );
}
