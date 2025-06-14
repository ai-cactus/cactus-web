import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";
import { primaryNav, secondaryNav } from "@/utils/static";
import { logOut } from "@/lib/auth";
import { motion } from "motion/react";
import Assets from "@/lib/assets";
import NavButton from "./nav-button";
import { cn } from "@/utils/utils";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface IProps {
  isMenuOpen: boolean;
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
}

const Sidebar = ({ isMenuOpen, setIsMenuOpen }: IProps) => {
  const [ref] = useOutsideClick(() => setIsMenuOpen(false));
  const isLargeScreen = useMediaQuery("(min-width: 1024px)");
  return (
    <motion.aside
      ref={ref}
      className={cn(
        "z-[100] flex flex-col fixed inset-0  w-[17.5rem] font-inter bg-[#fdfdfd] border-r border-r-[#1C1C1C1A] py-[1.875rem]"
        // {
        //   "flex z-[1000]": isMenuOpen,
        //   "hidden lg:flex": !isMenuOpen,
        // }
      )}
      animate={{ translateX: isMenuOpen || isLargeScreen ? 0 : -450 }}
    >
      <header className="bg-white  flex items-center ">
        <Image
          src={Assets.Logo}
          alt="cactus ai logo"
          width={159}
          height={55}
          className="inline-block h-12 object-contain"
        />
      </header>
      <div className="overflow-y-auto mt-4 px-4 py-6 flex flex-col gap-16">
        <section>
          <h3 className="mb-2 text-[#757575] text-xs font-medium font-inter uppercase leading-3 tracking-wide">
            Main
          </h3>
          <nav className="flex flex-col">
            {primaryNav.map((item, key) => (
              <NavButton
                key={key}
                href={item.href}
                icon={item.icon}
                label={item.label}
              />
            ))}
          </nav>
        </section>
        <section>
          <h3 className="mb-2 text-[#757575] text-xs font-medium font-inter uppercase leading-3 tracking-wide">
            Help & Settings
          </h3>
          <nav className="flex flex-col">
            {secondaryNav.map((item, key) => (
              <NavButton
                key={key}
                href={item.href}
                icon={item.icon}
                label={item.label}
                routes={item.routes}
              />
            ))}
            <NavButton
              href={"#"}
              onClick={(e) => {
                e.preventDefault();
                logOut();
              }}
              icon={"/exit_ic.svg"}
              label={"Logout"}
              className="text-[#D55F5A]"
            />
          </nav>
        </section>
<section>
        <div className="flex gap-4 items-center border rounded-xl p-2">
          <div className="py-2 px-4 bg-[#0ABF00] font-semibold text-xl text-white rounded-full">B</div>
          <div>
            <h1 className="text-lg font-bold">Beacon Behaviour</h1>
            <p className="text-sm text-[#6D717F]">2 Unread Notifications</p>
          </div>
        </div>

</section>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
