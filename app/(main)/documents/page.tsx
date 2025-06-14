"use client";

import { FilledButton, OutlinedButton } from "@/components/buttons";
import { Table, TableRow } from "@/components/table";
import { useGetDocuments } from "@/services/user/queries";
import { AppRoutes } from "@/utils/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Documents() {
  const { data: documentsResponse, isLoading } = useGetDocuments();
  
  // Safely extract documents array from response
  // const documents = Array.isArray(documentsResponse?.data) 
  //   ? documentsResponse?.data 
  //   : Array.isArray(documentsResponse)
  //   ? documentsResponse
  //   : [];

  return (
    <div className="px-6 py-5 sm:px-10">
      {/* Header Section */}
      <section className="flex flex-col gap-4 sm:flex-row sm:justify-between sm:items-center mb-8">
        <div>
          <h1 className="text-[#5A74EB] text-2xl sm:text-3xl font-semibold mb-2">
            Uploaded Documents
          </h1>
          <p className="text-gray-600">
            Documents and attachments that have been uploaded.
          </p>
        </div>
        
        {/* Action Buttons */}
        <div className="flex flex-col gap-3 sm:flex-row">
          <OutlinedButton className="border-[#4b62cc] text-[#4b62cc] flex items-center justify-center gap-2 py-2 px-4">
            <Image
              src="/download.svg"
              alt="download"
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <span>Download all</span>
          </OutlinedButton>
          <Link href={"/dashboard"}>
            <FilledButton className="flex items-center justify-center gap-2 py-2 px-4">
              <Image
                src="/plus.svg"
                alt="upload"
                width={20}
                height={20}
                className="h-5 w-5"
              />
              <span>Upload New Document</span>
            </FilledButton>
          </Link>
        </div>
      </section>

      {/* Documents Table */}
      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <p>Loading documents...</p>
        </div>
      ) : (
        <Table className="w-full">
          {/* Table Header */}
          <thead className="bg-gray-50">
            <tr className="text-left text-gray-600 font-medium">
              <th className="py-3 px-4 flex items-center gap-1">
                Document name
                <button className="text-gray-400 hover:text-gray-600">
                  <Image src="/filter_ic.svg" alt="filter" width={16} height={16} />
                </button>
              </th>
              <th className="py-3 px-4 w-32 flex items-center gap-1">
                File size
                <button className="text-gray-400 hover:text-gray-600">
                  <Image src="/filter_ic.svg" alt="filter" width={16} height={16} />
                </button>
              </th>
              <th className="py-3 px-4 w-32 flex items-center gap-1">
                Date
                <button className="text-gray-400 hover:text-gray-600">
                  <Image src="/filter_ic.svg" alt="filter" width={16} height={16} />
                </button>
              </th>
              <th className="py-3 px-4 w-24">Actions</th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-gray-200">
            {/* {documents?.length > 0 ? (
              documents?.map((doc) => (
                doc?._id ? (
                  <Link 
                    key={doc?._id} 
                    href={AppRoutes.main.document.path(doc?._id) || "#"}
                    passHref
                  >
                    <TableRow item={doc} />
                  </Link>
                ) : null
              )).filter(Boolean)
            ) : (
              <tr>
                <td colSpan={4} className="py-8 text-center text-gray-500">
                  No documents found. Upload your first document to get started.
                </td>
              </tr>
            )} */}
          </tbody>
        </Table>
      )}
    </div>
  );
}

export default Documents;