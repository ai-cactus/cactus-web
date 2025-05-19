import { Article1, Article2 } from "@/components/blog/article";
import { RequestADemoForm } from "@/components/forms";
import Header from "@/components/website/header";
import Assets from "@/lib/assets";
import WebsiteAssets from "@/lib/assets/website-assets";
import { fetchBlogs } from "@/server/actions/blog.actions";
import { AppRoutes } from "@/utils/routes";
import { blogPageData } from "@/utils/static";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Blog() {
  const blogs = await fetchBlogs();
  console.log(blogs);
  return (
    <div className="relative bg-[#E7EBFD33] overflow-x-hidden">
      <Header />

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
      </section>

      <section className="py-8 max-w-app-max mx-auto">
        <h3 className="font-neue font-semibold text-2xl pb-8">Trending News</h3>
        <div>
          <div className="flex items-center justify-center gap-8">
            <Article1 article={blogPageData[0]} />
            <div className="flex flex-col gap-8">
              <Article2 article={blogPageData[0]} />
              <Article2 article={blogPageData[0]} />
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-app-max mx-auto my-[4.125rem]">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="text-[#667085] font-inter text-lg pb-3">
              THERAPTYLY BLOG:
            </h3>
            <h2 className="font-medium font-neue text-[3.625rem] leading-[4.25rem]">
              Navigating Healthcare Compliance
            </h2>
          </div>
          <div className="flex-1">
            <p className="text-[#667085] font-inter text-sm leading-[1.875rem]">
              Stay up to date with the most recent developments in health
              compliance, regulatory changes, and industry best practices from
              around the world.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 max-w-app-max mx-auto">
        <h3 className="font-neue font-semibold text-2xl pb-8">
          All Blog Posts
        </h3>
        <div>
          <div className="grid grid-cols-2 items-center justify-center gap-8">
            <Article1 article={blogPageData[0]} />
            <Article1 article={blogPageData[0]} />
            <Article1 article={blogPageData[0]} />
            <Article1 article={blogPageData[0]} />
          </div>
        </div>
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
