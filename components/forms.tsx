"use client"
import { requestADemoAction } from "@/lib/actions/demo";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";


export function RequestADemoForm() {
  const [state, formAction, isPending] = useActionState(requestADemoAction, null);
  return (
    <form action={formAction} className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-4 mt-10">
      <div className="flex-1 flex flex-col gap-4 md:gap-10 mb-10 md:mb-0">
        <h2 className="text-center md:text-left text-3xl md:text-4xl font-medium">Let us score your compliance policy</h2>
        <p className="text-center md:text-left">Submit your information below and let’s get you started</p>
      </div>
      <div className="flex-1 flex flex-col gap-4">
        <input
          type="text"
          required
          name=""
          id=""
          placeholder="Full name"
          className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white"
        />
        <input
          type="text"
          required
          name=""
          id=""
          placeholder="Email Address"
          className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white"
        />
        <input
          type="text"
          required
          name=""
          id=""
          placeholder="Message"
          className="px-6 py-3 bg-transparent border border-[#EBEBEB80] rounded-lg placeholder:text-white"
        />
        {state && <p className="text-yellow-400">* {state}</p>}
      </div>
      <div>
        <button type="submit" className="inline-block w-fit font-medium px-8 py-3 rounded-xl bg-[linear-gradient(15deg,#933FFE,#18C8FF)] border border-[#FFFFFF78] bg-blend-overlay text-black">Get Started</button>
      </div>
    </form>
  )
}