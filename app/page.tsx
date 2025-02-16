import { RequestADemoForm } from "@/components/forms";
import { LandingHeaderNav } from "@/components/main/navs";
import Assets from "@/lib/assets";
import WebsiteAssets from "@/lib/assets/website-assets";
import { AppRoutes } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative bg-[#E7EBFD33] overflow-x-hidden">
      <header className="fixed z-40 top-0 left-0 right-0 bg-white/10 backdrop-blur">
        <div className="mx-4  py-5 lg:max-w-[75rem] lg:mx-10 xl:mx-auto flex flex-row justify-between items-center">
          {/* <Image src="/Cactus.ai.png" alt="logo" className="w-36 h-auto" width={140} height={41} /> */}
          <div>
            <Image
              src={WebsiteAssets.LogoLight}
              alt="Website Logo"
              className="w-[12.25rem] h-[4.2rem]"
            />
          </div>
          <Suspense>
            <LandingHeaderNav />
          </Suspense>
        </div>
      </header>
      <section
        id="intro"
        className="relative bg-white bg-[url(/background-1.png)] bg-no-repeat bg-cover  md:bg-left-top"
      >
        <div className="flex flex-col pt-[13.25rem] md:pt-[16.3rem] pb-[10rem] md:pb-[14.1rem] mx-8  lg:max-w-[75rem] lg:mx-10 xl:mx-auto my-auto text-white">
          <h1 className="text-left text-[2.6875rem] lg:text-[5.625rem] leading-[3.125rem] lg:leading-[5.625rem] sm:max-w-md lg:max-w-[45rem] lg:tracking-tighter font-sans font-bold">
            Compliance work in seconds, not weeks
          </h1>
          <p className="text-left text-sm leading-[1.5625rem] md:leading-normal md:text-[1.375rem] font-medium font-manrope sm:max-w-lg md:max-w-md lg:max-w-[45rem] mt-5 mb-10">
            We use AI to help healthcare providers navigate the difficult
            terrain of compliance by identifying gaps, suggesting improvements,
            and helping prepare for audits.
          </p>
          <Link
            href={AppRoutes.auth.signup.path}
            className="font-medium px-10  rounded-xl bg-black  w-[11.31rem] h-[3.19rem] flex items-center justify-center   sm:mx-0"
          >
            Get Started
          </Link>
        </div>
        <div className="absolute hidden md:block md:top-[calc(50%-250px)] lg:top-[100px] md:-right-24 lg:-right-10 z-20">
          {/* <div className="absolute hidden md:block md:top-[calc(50%-250px)] lg:top-[calc(50%-525px)] md:-right-24 lg:-right-9 z-20"> */}
          <Image
            src={WebsiteAssets.Chips}
            alt="spinning animation"
            className="md:h[500px] lg:h-[930px] md:w-[500px] lg:w-[930px] object-contain"
            width={650}
            height={650}
          />
        </div>
      </section>
      <section
        id="benefits"
        className="border border-white bg-[#E9EDFD] bg-[url(/looper.png),linear-gradient(180deg,white,transparent)] bg-no-repeat bg-right-top bg-[400px_400px,100%_100%] z-10 relative p-4 md:p-16 md:pb-[calc(4.7rem+2.735rem)] pt-10 pb-10 lg:max-w-[calc(75rem+80px)] mx-0 lg:mx-auto -mt-24 rounded-[30px] custom-shadow"
      >
        <h3 className="w-fit mx-auto border text-gray-600 border-gray-400 rounded-lg px-4 py-1">
          Benefits
        </h3>
        <h2 className="text-[2rem] lg:text-[2.875rem] leading-[2.375rem] lg:leading-[3.375rem] font-medium tracking-tighter font-inter text-center mt-10 mb-5">
          Automate your compliance work, saving you hours and money with our{" "}
          <span className="whitespace-nowrap">AI-driven</span> platform
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6 max-w-[22rem] mx-auto lg:max-w-full">
          <BenefitCard
            img="/icon-1.svg"
            title="Automated Gap Analysis"
            descr="Instantly identify discrepancies between your policies and state health regulations."
          />
          <div className="relative lg:top-[2.735rem]">
            <BenefitCard
              img="/icon-2.svg"
              title="Actionable Insights"
              descr="Get suggestions on how to improve your policies to meet compliance standards."
            />
          </div>
          <BenefitCard
            img="/icon-3.svg"
            title="Audit-Ready Documents"
            descr="Automatically find and compile supporting documents for audits."
          />
        </div>
      </section>
      <section id="capabilities" className="pt-[6.125rem] pb-20">
        <h3 className="w-fit mx-auto border text-gray-600 font-medium font-manrope text-sm border-gray-400 rounded-lg px-4 py-2">
          Pain Points Solved for You
        </h3>
        <h2 className="text-[2rem] lg:text-[2.875rem] font-semibold text-center mt-10 mb-5 lg:mb-10 px-4 xl:px-0 leading-[2.375rem] lg:leading-[3rem]">
          We Make Your Complex Compliance Issues Easy
        </h2>
        <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 px-4 xl:px-0 lg:max-w-[72.25rem] mx-4 lg:mx-10 xl:mx-auto">
          <div className="border-b-[0.5px] md:border-r-[0.5px] border-[#CFCFCF] md:border-[black] p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Complex Regulatory Landscape"
              descr="Navigating ever-changing regulations can be overwhelming. Our AI keeps you updated and compliant."
            />
          </div>
          <div className="border-b-[0.5px] border-[#CFCFCF] md:border-[black] p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Time-Consuming Audits"
              descr="We streamline the audit process, providing all required documentation with minimal effort."
            />
          </div>
          <div className="border-b-[0.5px] md:border-b-0 md:border-r-[0.5px] border-[#CFCFCF] md:border-[black] p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Manual Policy Updates"
              descr="Eliminate the guesswork—our AI suggests policy improvements to meet current requirements."
            />
          </div>
          <div className="p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Risk of Non-Compliance"
              descr="Reduce your liability and ensure you meet all state-level health compliance obligations."
            />
          </div>
        </section>
      </section>
      <section
        id="request-a-demo"
        className="bg-[#657FEF] text-white max-w-[74.375rem] mx-auto rounded-t-[30px] rounded-b-[0px] lg:rounded-b-[30px] bg-gradient-to-b from-[#657FEF] to-[#5744EB]"
      >
        <div className="px-4 xl:px-8 py-4 md:py-[4.3125rem] lg:max-w-5xl mx-auto">
          <Suspense>
            <RequestADemoForm />
          </Suspense>
        </div>
        <footer className=" mt-3 md:mt-16 border-t border-[#D4D4D4] mx-6 block lg:hidden">
          <div className="px-4  py-5  mx-auto flex flex-col gap-3 justify-between items-start">
            <Image
              src={WebsiteAssets.LogoLight}
              alt="logo"
              className="w-[7.125rem] h-auto"
              width={129}
              height={40}
            />
            <p className="text-base font-manrope">
              © 2024 Cactus AI • All right reserved
            </p>
            <nav>
              <ul className="flex flex-row gap-4">
                <li className="font-manrope text-baese underline">
                  <Link href="">Terms of Service</Link>
                </li>

                <li className="font-manrope text-baese underline">
                  <Link href="">Privacy Policy</Link>
                </li>
              </ul>
            </nav>
          </div>
        </footer>
      </section>
      <footer className=" mt-16 border-t border-[#D4D4D4] mx-11 hidden lg:block">
        <div className="px-4 xl:px-8 py-5 lg:max-w-[72.125rem] mx-auto flex flex-col lg:flex-row gap-3 lg:gap-0 justify-between md:items-center">
          <Image
            src={Assets.Logo}
            alt="logo"
            className="w-[11.75rem] h-auto"
            width={188}
            height={63}
          />
          <p className="text-base font-manrope">
            © 2024 Cactus AI • All right reserved
          </p>
          <nav>
            <ul className="flex flex-row gap-4">
              <li className="font-manrope text-baese underline">
                <Link href="">Terms of Service</Link>
              </li>

              <li className="font-manrope text-baese underline">
                <Link href="">Privacy Policy</Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}

function BenefitCard({
  img,
  title,
  descr,
}: {
  img: string;
  title: string;
  descr: string;
}) {
  return (
    <article className="flex flex-col items-center bg-white px-[1.75rem] py-[3.625rem] rounded-3xl h-full">
      <Image
        src={img}
        alt="icon"
        className="w-[5.4375rem] h-[5.4375rem]"
        width={87}
        height={87}
      />
      <h4 className="text-2xl text-center font-semibold font-neue mt-8 mb-3">
        {title}
      </h4>
      <p className="text-center text-[1.1875rem] font-manrope leading-[1.75rem]">
        {descr}
      </p>
    </article>
  );
}

function CompliancePointCard({
  img,
  title,
  descr,
}: {
  img: string;
  title: string;
  descr: string;
}) {
  return (
    <article className="flex flex-col items-center md:items-start gap-4">
      <Image
        src={img}
        alt="icon"
        className="w-[3.125rem] h-[3.125rem]"
        width={50}
        height={50}
      />
      <h4 className="text-[1.375rem] text-center md:text-left font-bold font-inter pb-0">
        {title}
      </h4>
      <p className="text-[1.1rem] text-center md:text-left leading-[2.1744rem] font-manrope">
        {descr}
      </p>
    </article>
  );
}
