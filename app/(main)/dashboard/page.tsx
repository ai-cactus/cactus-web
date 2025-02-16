"use client";
import React, { useState } from "react";
import { FilledButton, OutlinedButton } from "@/components/buttons";
import { ErrorModal, LoadingCircleModal } from "@/components/modals";
import FileComp from "@/components/upload/file-comp";
import UploadComp from "@/components/upload/upload-comp";
import { useFetch } from "@/lib/hooks";
function Dashboard() {
  const [file, setFile] = useState<File | null>(null);
  const {
    go,
    status,
    error: uploadError,
    data,
  } = useFetch("/documents/upload");

  const handleUpload = () => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      go({ method: "POST", body: formData });
    }
  };

  // useEffect(() => {
  //   if (status === "success" && data && file) {
  //     console.log("Response", data);
  //     setDocuments((prev: DocumentResponse[]) => [
  //       ...prev,
  //       data as DocumentResponse,
  //     ]);
  //     router.push(`/documents/`);
  //   }
  // }, [status, data, file]);

  return (
    <div className="font-inter flex items-center justify-center my-[5rem] px-4 md:px-0">
      <div>
        <div className="mb-7">
          <h1 className="text-[#5A74EB] text-3xl font-semibold leading-[120%] pb-3">
            Upload policy
          </h1>
          <p className="text-lg text-[#4d4d4d] leading-[113%]">
            Upload your document here to get started! Supported file type: PDF
            (max 100mb)
          </p>
        </div>
        <div className=" flex flex-col gap-7">
          <UploadComp file={file} setFile={setFile} />
          {file ? <FileComp file={file} setFile={setFile} /> : null}
        </div>
        <section className="flex flex-row gap-4 justify-between my-12  w-full mx-auto">
          <div className=""></div>
          <div className="flex flex-row gap-4">
            <OutlinedButton>Cancel</OutlinedButton>
            <FilledButton disabled={!file} onClick={handleUpload}>
              Analyze
            </FilledButton>
          </div>
        </section>
        {status === "loading" && <LoadingCircleModal />}
        {
          <ErrorModal
            isOpen={status === "error"}
            title="Upload Error"
            message={JSON.stringify(uploadError)}
          />
        }
      </div>
    </div>
  );
}

export default Dashboard;
