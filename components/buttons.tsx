"use client";

import { signInWithGoogle } from "@/lib/auth";
import { cn } from "@/utils/utils";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { useRouter, useSelectedLayoutSegment } from "next/navigation";
import {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  ReactNode,
  useState,
} from "react";

export function FilledButton(
  props: DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) {
  return (
    <button
      {...props}
      className={cn(
        `bg-[#4758e0] disabled:bg-gray-400 text-white font-semibold py-3 px-5 rounded-lg ${props.className}`
      )}
    >
      {props.children}
    </button>
  );
}

export function GoogleAuthButton({
  role = "login",
}: {
  role?: "login" | "signup";
}) {
  const router = useRouter();
  const _onClick = async () => {
    const user = await signInWithGoogle();
    if (role === "login") {
      console.log("login");
      router.push("/dashboard");
    } else {
      console.log("signup");
      router.push("/signup/complete");
    }
  };
  return (
    <button
      type="button"
      onClick={_onClick}
      className="py-3 px-5 rounded-lg border border-[#c5c5c5] justify-center items-center gap-[15px] inline-flex"
    >
      <Image
        src={"/Google.svg"}
        alt="icon"
        width={28}
        height={28}
        className="w-7 h-7 relative"
      />
      <span className="text-[#2b2b2b] text-base font-semibold">
        Continue with Google
      </span>
    </button>
  );
}

export const OutlinedButton = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={`px-5 py-3 rounded-lg border border-[#cccccc] font-semibold ${props.className}`}
    />
  );
};
