"use client";

import { MainNav } from "@/components/main/navs";
import Sidebar from "@/components/main/sidebar";

import { UploadedDocumentContext } from "@/lib/context";
import { DocumentResponse } from "@/lib/types";
import withAuth from "@/lib/withAuth";
import Image from "next/image";
import React, { useState } from "react";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [documents, setDocuments] = useState<DocumentResponse[]>([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <UploadedDocumentContext.Provider value={{ documents, setDocuments }}>
      <div className="flex items-center">
        <Sidebar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <div className="lg:ml-[17.5rem] relative flex-1">
          <MainNav setIsMenuOpen={setIsMenuOpen} />
          <main className="min-h-[calc(100vh-64px)] flex *:flex-1">
            {children}
          </main>
        </div>
      </div>
    </UploadedDocumentContext.Provider>
  );
}

export default withAuth(layout);
