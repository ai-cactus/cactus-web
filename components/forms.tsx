"use client"
import { requestADemoAction } from "@/lib/actions/demo";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import { db } from "@/lib/firebase";
import { addDoc, collection } from "firebase/firestore";
import { useState, useRef } from "react";

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
      setError('All fields are required');
      setLoading(false);
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    try {
      // Add timestamp to the data
      const demoRequest = {
        ...data,
        createdAt: new Date(),
        status: 'pending'
      };

      // Save to Firestore
      await addDoc(collection(db, 'demo_requests'), demoRequest);
      setSuccess(true);
      
      // Reset form using the ref
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (err) {
      setError('Failed to submit request. Please try again.');
      console.error('Error submitting demo request:', err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 mt-10">
      <div className="flex-1 flex flex-col gap-4 md:gap-10 mb-10 md:mb-0">
        <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium">Let us score your compliance policy</h2>
        <p className="text-center md:text-left">Submit your information below and let&apos;s get you started</p>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          required
          name="fullName"
          id="fullName"
          placeholder="Full name"
          disabled={loading}
          className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white disabled:opacity-50"
        />
        <input
          type="email"
          required
          name="email"
          id="email"
          placeholder="Email Address"
          disabled={loading}
          className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white disabled:opacity-50"
        />
        <input
          type="text"
          required
          name="message"
          id="message"
          placeholder="Message"
          disabled={loading}
          className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white disabled:opacity-50"
        />
        {error && <p className="text-red-400">* {error}</p>}
        {success && <p className="text-green-400">Request submitted successfully!</p>}
      </div>
      <div className="col-span-1 md:col-span-2 flex justify-end">
        <button 
          type="submit" 
          disabled={loading}
          className="inline-block w-fit font-medium px-8 py-3 rounded-xl bg-[linear-gradient(15deg,#933FFE,#18C8FF)] border border-[#FFFFFF78] bg-blend-overlay text-black disabled:opacity-50 relative"
        >
          {loading ? 'Submitting...' : 'Get Started'}
        </button>
      </div>
    </form>
  )
}