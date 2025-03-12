"use client";

import Assets from "@/lib/assets";
import { useAuthState } from "@/lib/authState";
import { AppRoutes } from "@/utils/routes";
import { landingHeaderNav } from "@/utils/static";
import { cn } from "@/utils/utils";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";
import { Dispatch, SetStateAction, useState } from "react";

export function LandingHeaderNav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <section role="menu">
      <div role="menubar" className="md:hidden">
        {/* <button onClick={() => setIsMenuOpen(true)}>
          <Image
            src="/menu.png"
            alt="menu open"
            className="w-9 h-auto"
            width={36}
            height={36}
          />
        </button> */}
        <Link
          href={AppRoutes.auth.signup.path}
          className="px-8 py-3 rounded-full bg-black text-white text-[1rem] font-semibold w-full h-[2.75rem] "
        >
          Get Started
        </Link>
      </div>
      {/* Desktop nav bar */}
      <nav className="hidden md:block bg-transparentrelative h-fit max-w-fit w-fit">
        <ul role="menuitem" className="flex  gap-[2.125rem] space-y-0 ">
          {/* <div className="flex items-center gap-16 px-[2rem]">
            {landingHeaderNav.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.href}
                  className="font-medium text-[1rem] font-neue"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </div> */}

          <li>
            <Link
              href={AppRoutes.auth.signup.path}
              className="px-8 py-3 rounded-full bg-black text-white text-[1rem] font-semibold h-[2.75rem]w-fit"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
      {/* Mobile nav bar */}
      <motion.nav
        initial={{ translateX: 400 }}
        animate={{ translateX: isMenuOpen ? 0 : 400 }}
        transition={{ type: "spring", damping: 14, stiffness: 100 }}
        className={cn(
          "bg-white  fixed  z-50 h-screen  top-0 right-0 max-w-sm  w-full block md:hidden"
        )}
      >
        <div role="menubar" className="flex flex-row justify-end p-4">
          <button onClick={() => setIsMenuOpen(false)}>
            <Image
              src="/close.png"
              alt="menu close"
              className="w-9 h-auto"
              width={36}
              height={36}
            />
          </button>
        </div>
        <ul role="menuitem" className="flex flex-col items-center gap-8  p-8 ">
          {landingHeaderNav.map((item, i) => (
            <li key={i}>
              <Link
                href={item.href}
                className="font-semibold text-[2rem] font-neue"
              >
                {item.label}
              </Link>
            </li>
          ))}

          <li className="mt-6">
            <Link
              href={AppRoutes.auth.signup.path}
              className="px-8 py-3 rounded-full bg-black text-white text-[1rem] font-semibold w-full h-[2.75rem] "
            >
              Get Started
            </Link>
          </li>
        </ul>
      </motion.nav>
    </section>
  );
}

export function LandingFooterNav() {
  return (
    <div>
      <nav>
        <ul className="flex space-x-2">
          <li>
            <Link href="#" className="font-medium px-5 py-3 rounded-full">
              Product
            </Link>
          </li>
          <li>
            <Link href="#" className="font-medium px-5 py-3 rounded-full">
              Features
            </Link>
          </li>
          <li>
            <Link href="#" className="font-medium px-5 py-3 rounded-full">
              Testimonials
            </Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex flex-row gap-4">
          <li>
            <Link href="">
              <Image
                src="/Facebook.svg"
                alt="Facebook-icon"
                className="w-8 h-8"
                width={34}
                height={34}
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src="/TwitterX.svg"
                alt="TwitterX-icon"
                className="w-8 h-8"
                width={34}
                height={34}
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src="/Instagram.svg"
                alt="Instagram-icon"
                className="w-8 h-8"
                width={34}
                height={34}
              />
            </Link>
          </li>
          <li>
            <Link href="">
              <Image
                src="/LinkedIn.svg"
                alt="LinkedIn-icon"
                className="w-8 h-8"
                width={34}
                height={34}
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

interface IProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}
export function MainNav({ setIsMenuOpen }: IProps) {
  const { auth } = useAuthState();
  return (
    <nav className="py-5 flex flex-row items-center gap-1 md:gap-[1rem] lg:gap-[3rem] font-inter px-10 bg-white border-b border-b-[#1C1C1C1A]">
      <div role="menubar" className="flex lg:hidden">
        <button onClick={() => setIsMenuOpen(true)}>
          <Image
            src="/menu.png"
            alt="menu open"
            className="w-8 h-auto"
            width={16}
            height={16}
          />
        </button>
      </div>
      <form action="" className="flex-1 mx-4 md:mx-[2rem]">
        <div className="flex-1 flex flex-row bg-[#f9fafb] rounded-lg h-14 gap-4 px-5">
          <button type="submit">
            <Image
              src={Assets.Search}
              alt="search icon"
              width={24}
              height={24}
            />
          </button>
          <input
            required
            type="text"
            name=""
            id=""
            placeholder="Seach or type a command"
            className="w-full bg-transparent outline-none text-[#000000] text-opacity-70"
          />
        </div>
      </form>
      <div className="flex-0 md:flex-1 flex justify-end items-center gap-5">
        <div className="bg-white shadow-[0_4px_6px_0_rgba(0,0,0,0.02)] p-2 flex rounded-full">
          <Link href={AppRoutes.main.notifications.path}>
            <Image src={Assets.Bell} alt="search icon" width={16} height={16} />
          </Link>
        </div>
        <div className="flex flex-row items-center gap-2">
          <Image
            src={"/avatar.png"}
            alt="search icon"
            width={48}
            height={48}
            className="rounded-full w-12 h-12"
          />
          <div className="max-w-32">
            <h2 className="text-sm text-[#292d32]  font-semibold">
              {auth.user?.displayName}
            </h2>
            <h3 className="text-[10px] text-[rgba(41,45,50,0.44)] font-sm ">
              {auth.profile?.practice}
            </h3>
          </div>
        </div>
      </div>
    </nav>
  );
}
