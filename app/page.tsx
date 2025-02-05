import { RequestADemoForm } from "@/components/forms";
import { LandingHeaderNav } from "@/components/navs";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative bg-[#E7EBFD33] overflow-x-hidden">
      <header className="fixed z-40 top-0 left-0 right-0 bg-white/10 backdrop-blur">
        <div className="px-4 xl:px-8 py-5 lg:max-w-5xl mx-auto flex flex-row justify-between items-center">
          {/* <Image src="/Cactus.ai.png" alt="logo" className="w-36 h-auto" width={140} height={41} /> */}
          <h3 className="logo-text">Theraptly</h3>
          <Suspense>
            <LandingHeaderNav />
          </Suspense>
        </div>
      </header>
      <section id="intro" className="relative bg-white bg-[url(/background-1.png)] bg-no-repeat bg-cover">
        <div className="flex flex-col pt-32 pb-32 px-4 xl:px-8 lg:max-w-5xl mx-auto my-auto text-white">
          <h1 className="text-center sm:text-left text-4xl lg:text-6xl sm:max-w-md lg:max-w-lg font-bold">Compliance work in seconds, not weeks</h1>
          <p className="text-center sm:text-left text-base sm:max-w-lg md:max-w-md lg:max-w-lg mt-5 mb-10">We use AI to help healthcare providers navigate the difficult terrain of compliance by identifying gaps, suggesting improvements, and helping prepare for audits.</p>
          <Link href="#request-a-demo" className="font-medium px-10 py-3 rounded-xl bg-black inline-block w-fit mx-auto sm:mx-0">Get Started</Link>
        </div>
        <div className="absolute hidden md:block md:top-[calc(50%-250px)] lg:top-[calc(50%-325px)] md:-right-24 lg:-right-36 z-20">
          <Image src="/chips.png" alt="spinning animation" className="md:h[500px] lg:h-[650px] md:w-[500px] lg:w-[650px] object-contain"
            width={650} height={650} />
        </div>
      </section>
      <section id="benefits" className="border border-white bg-[#E9EDFD] bg-[url(/looper.png),linear-gradient(180deg,white,transparent)] bg-no-repeat bg-right-top bg-[220px_220px,100%_100%] z-10 relative p-4 md:p-16 md:pb-20 pt-10 lg:max-w-5xl mx-4 lg:mx-auto -mt-24 rounded-2xl shadow-md">
        <h3 className="w-fit mx-auto border text-gray-600 border-gray-400 rounded-lg px-4 py-1">Benefits</h3>
        <h2 className="text-3xl md:text-4xl font-medium text-center mt-10 mb-5">Automate your compliance work, saving you hours and money with our <span className="whitespace-nowrap">AI-driven</span> platform</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-6">
          <BenefitCard
            img="/icon-1.svg"
            title="Automated Gap Analysis"
            descr="Instantly identify discrepancies between your policies and state health regulations."
          />
          <div className="md:mt-10">
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
      <section id="capabilities" className="py-20">
        <h3 className="w-fit mx-auto border text-gray-600 border-gray-400 rounded-lg px-4 py-1">Pain Points Solved for You</h3>
        <h2 className="text-3xl md:text-4xl font-medium text-center mt-10 mb-5">We Make Your Complex Compliance Issues Easy</h2>
        <section className="grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 px-4 xl:px-8 lg:max-w-5xl mx-auto">
          <div className="border-b md:border-r border-gray-300 p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Complex Regulatory Landscape"
              descr="Navigating ever-changing regulations can be overwhelming. Our AI keeps you updated and compliant."
            />
          </div>
          <div className="border-b border-gray-300 p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Time-Consuming Audits"
              descr="We streamline the audit process, providing all required documentation with minimal effort."
            />
          </div>
          <div className="border-b md:border-b-0 md:border-r border-gray-300 p-10">
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
      <section id="request-a-demo" className="bg-[#657FEF] bg-[url(/star.svg)] bg-no-repeat bg-right-bottom text-white">
        <div className="px-4 xl:px-8 py-20 lg:max-w-5xl mx-auto">
          <h3 className="w-fit mx-auto border border-[#EBEBEB80] rounded-lg px-4 py-1">Request a Demo</h3>
          <Suspense>
            <RequestADemoForm />
          </Suspense>
        </div>
      </section>
      <footer className="bg-white">
        <div className="px-4 xl:px-8 py-5 lg:max-w-5xl mx-auto flex flex-col md:flex-row justify-between md:items-center">
          <Image src="/Cactus.ai.png" alt="logo" className="w-36 h-auto" width={140} height={41} />
          <nav className="my-8 md:my-0">
            <ul className="flex flex-col md:flex-row md:space-x-2">
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full inline-block">Product</Link>
              </li>
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full inline-block">Features</Link>
              </li>
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full inline-block">Testimonials</Link>
              </li>
            </ul>
          </nav>
          <nav>
            <ul className="flex flex-row gap-4">
              <li>
                <Link href=""><Image src="/Facebook.svg" alt="Facebook-icon" className="w-8 h-8" width={34} height={34} /></Link>
              </li>
              <li>
                <Link href=""><Image src="/TwitterX.svg" alt="TwitterX-icon" className="w-8 h-8" width={34} height={34} /></Link>
              </li>
              <li>
                <Link href=""><Image src="/Instagram.svg" alt="Instagram-icon" className="w-8 h-8" width={34} height={34} /></Link>
              </li>
              <li>
                <Link href=""><Image src="/LinkedIn.svg" alt="LinkedIn-icon" className="w-8 h-8" width={34} height={34} /></Link>
              </li>
            </ul>
          </nav>
        </div>
      </footer>
    </div>
  );
}


function BenefitCard({ img, title, descr }: { img: string, title: string, descr: string }) {
  return (
    <article className="flex flex-col items-center bg-white px-5 py-10 rounded-3xl">
      <Image src={img} alt="icon" className="w-20 h-20" width={80} height={80} />
      <h4 className="text-xl text-center font-medium mt-8 mb-3">{title}</h4>
      <p className="text-center">{descr}</p>
    </article>
  )
}

function CompliancePointCard({ img, title, descr }: { img: string, title: string, descr: string }) {
  return (
    <article className="flex flex-col gap-3">
      <Image src={img} alt="icon" className="w-6 h-6" width={24} height={24} />
      <h4 className="text-lg font-medium">{title}</h4>
      <p className="">{descr}</p>
    </article>
  )
}