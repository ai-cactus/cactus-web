import Image from "next/image";
import React from "react";
import { primaryNav, secondaryNav } from "@/utils/static";
import { logOut } from "@/lib/auth";
import Assets from "@/lib/assets";
import NavButton from "./nav-button";

const Sidebar = () => {
  return (
    <aside className="flex flex-col fixed inset-0  w-[17.5rem]  bg-[#fdfdfd] border-r border-r-[#1C1C1C1A] py-[1.875rem]">
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
              onClick={logOut}
              icon={"/exit_ic.svg"}
              label={"Logout"}
              className="text-[#D55F5A]"
            />
          </nav>
        </section>
      </div>
    </aside>
  );
};

export default Sidebar;
