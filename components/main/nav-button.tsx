"use client";
import Image from "next/image";
import Link, { LinkProps } from "next/link";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import { ReactNode, useState } from "react";
import { motion } from "motion/react";

export interface NavButtonProps extends LinkProps {
  href: string;
  label: string;
  icon: string | React.ComponentType<{ className?: string }>; // Updated to accept both
  surfix?: ReactNode;
  className?: string;
  routes?: NavButtonProps[];
}

const _NavButton = (props: NavButtonProps) => {
  const segment = useSelectedLayoutSegment();
  const pathname = usePathname();
  const isActivePathName = pathname === props.href;

  
   return (
    <div className="relative font-inter">
      {isActivePathName ? (
        <motion.div
          className="absolute inset-o bg-[#f9fafb] rounded-lg w-full h-full z-[-1]"
          layoutId="side-nav-id"
        />
      ) : null}
      <Link
        {...props}
        className={`flex flex-row items-center px-4 py-4 gap-4 font-medium
        ${
          props.href.substring(1).startsWith(segment!)
            ? "text-black"
            : "text-[#757575]"
        } ${props.className}`}
      >
        {typeof props.icon === 'string' ? (
          <Image
            src={props.icon}
            alt={props.label}
            width={24}
            height={24}
            className="w-4"
          />
        ) : (
          <props.icon className="w-4 h-4" /> // Render the icon component
        )}
        <span className="flex-1">{props.label}</span>
        {props.surfix}
      </Link>
    </div>
  );
};

const NavButton = (props: NavButtonProps) => {
  const [isOpen, setIsOpen] = useState(false);
  if (!props.routes) {
    return <_NavButton {...props} />;
  }
  return (
    <div>

    <div>
      <_NavButton
        {...props}
        onClick={() => setIsOpen((prev) => !prev)}
        surfix={
          <Image
            src={"/nav-arrow-down.svg"}
            alt={"nav arrow down"}
            width={24}
            height={24}
            className="w-6"
          />
        }
      />
      <div
        className="flex flex-col ml-4"
        style={{ display: isOpen ? "block" : "none" }}
      >
        {props.routes.map((route, i) => (
          <NavButton key={i} {...route} />
        ))}
      </div>

    </div>
    </div>

  );
};

export default NavButton;
