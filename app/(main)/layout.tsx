"use client";

import { MainNav } from "@/components/main/navs";
import Sidebar from "@/components/main/sidebar";
import OnBoarding from "@/components/newComponents/onBoarding";
import { UploadedDocumentContext } from "@/lib/context";
import { DocumentResponse } from "@/lib/types";
import withAuth from "@/lib/withAuth";
import React, { useState } from "react";

function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [documents, setDocuments] = useState<DocumentResponse[]>([]); 
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showOnboarding, setShowOnboarding] = useState(true); // Control onboarding visibility

  return (
    <UploadedDocumentContext.Provider value={{ documents, setDocuments }}>
      <div className="flex items-center relative font-inter">
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="lg:ml-[17.5rem] relative flex-1">
          <MainNav setIsMenuOpen={setIsMenuOpen} />
          <main className="min-h-[calc(100vh-64px)] flex *:flex-1">
            {children}
          </main>
        </div>

        {/* Onboarding Overlay */}
{showOnboarding && <OnBoarding onComplete={() => setShowOnboarding(false)} />}
      </div>
    </UploadedDocumentContext.Provider>
  );
}

export default withAuth(Layout);
