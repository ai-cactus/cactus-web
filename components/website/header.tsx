import WebsiteAssets from "@/lib/assets/website-assets";
import Image from "next/image";
import React, { Suspense } from "react";
import { LandingHeaderNav } from "../main/navs";
import Assets from "@/lib/assets";

const Header = () => {
  return (
    <header className="fixed z-40 top-0 left-0 right-0 bg-white/10 backdrop-blur">
      <div className="mx-4  py-5 lg:max-w-[75rem] lg:mx-10 xl:mx-auto flex flex-row justify-between items-center">
        <div>
          <Image
            src={Assets.Logo}
            alt="Website Logo"
            className="w-[12.25rem] h-[4.2rem]"
          />
        </div>
        <Suspense>
          <LandingHeaderNav />
        </Suspense>
      </div>
    </header>
  );
};

export default Header;
