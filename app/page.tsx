import { RequestADemoForm } from "@/components/forms";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <div className="relative bg-[#E7EBFD33]">
      <header className="fixed z-40 top-0 left-0 right-0 bg-white/10 backdrop-blur">
        <div className="px-4 xl:px-8 py-5 lg:max-w-5xl mx-auto flex flex-row justify-between items-center">
          <Image src="/Cactus.ai.png" alt="logo" className="w-36 h-auto" width={140} height={41} />
          <nav>
            <ul className="flex space-x-2">
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full">Product</Link>
              </li>
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full">Features</Link>
              </li>
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full">Testimonials</Link>
              </li>
              <li>
                <Link href="#request-a-demo" className="font-medium px-8 py-3 rounded-full bg-black text-white ml-8">Get Started</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <section id="intro" className="relative bg-white bg-[url(/background-1.png)] bg-no-repeat overflow-hidden">
        <div className="py-44 px-4 xl:px-8 lg:max-w-5xl mx-auto text-white">
          <h1 className="text-7xl max-w-xl font-bold">Compliance work in seconds, not weeks</h1>
          <p className="text-base max-w-md mt-5 mb-10">We use AI to help healthcare providers navigate the difficult terrain of compliance by identifying gaps, suggesting improvements, and helping prepare for audits.</p>
          <Link href="#request-a-demo" className="font-medium px-10 py-3 rounded-xl bg-black">Get Started</Link>
        </div>
        <div className="absolute bottom-0 -right-36 z-20">
          <Image src="/chips.png" alt="spinning animation" className="h-[650px] w-[650px] object-contain"
            width={650} height={650} />
        </div>
      </section>
      <section id="benefits" className="border border-white bg-[#E9EDFD] bg-[url(/looper.png),linear-gradient(180deg,white,transparent)] bg-no-repeat bg-right-top bg-[220px_220px,100%_100%] z-10 relative p-16 py-20 lg:max-w-5xl mx-auto -mt-24 rounded-2xl shadow-md">
        <h3 className="w-fit mx-auto border text-gray-600 border-gray-400 rounded-lg px-4 py-1">Benefits</h3>
        <h2 className="text-4xl font-medium text-center mt-10 mb-5">Automate your compliance work, saving you hours and money with our AI-driven platform</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mt-6">
          <BenefitCard
            img="/icon-1.svg"
            title="Automated Gap Analysis"
            descr="Instantly identify discrepancies between your policies and state health regulations."
          />
          <div className="mt-10">
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
        <h2 className="text-4xl font-medium text-center mt-10 mb-5">We Make Your Complex Compliance Issues Easy</h2>
        <section className="grid grid-cols-2 grid-rows-2 px-4 xl:px-8 lg:max-w-5xl mx-auto">
          <div className="border-r border-b border-black p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Complex Regulatory Landscape"
              descr="Navigating ever-changing regulations can be overwhelming. Our AI keeps you updated and compliant."
            />
          </div>
          <div className="border-b border-black p-10">
            <CompliancePointCard
              img="/analysis.svg"
              title="Time-Consuming Audits"
              descr="We streamline the audit process, providing all required documentation with minimal effort."
            />
          </div>
          <div className="border-r border-black p-10">
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
        <div className="px-4 xl:px-8 py-5 lg:max-w-5xl mx-auto flex flex-row justify-between items-center">
          <Image src="/Cactus.ai.png" alt="logo" className="w-36 h-auto" width={140} height={41} />
          <nav>
            <ul className="flex space-x-2">
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full">Product</Link>
              </li>
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full">Features</Link>
              </li>
              <li>
                <Link href="#" className="font-medium px-5 py-3 rounded-full">Testimonials</Link>
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