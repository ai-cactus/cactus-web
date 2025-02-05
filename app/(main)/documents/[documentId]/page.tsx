"use client";

import React, { useContext, useEffect, useState } from "react";
import mammoth from "mammoth";
import { useParams } from "next/navigation";
import { SignJWT } from "jose";
import axios from "axios";

import { UploadedDocumentContext } from "@/lib/context";
import { DocumentResponse } from "@/lib/types";
// import Editor from "@/components/Editor";
import { useAnalyzeDocuments, useGetDocuments } from "@/services/user/queries";
import Loader from "@/components/shared/loader";
import EditorHeader from "@/components/documents/EditorHeader";
import EditorSidebar from "@/components/documents/EditorSidebar";
import Editor from "@/components/editor";

export const runtime = "edge";

function Document() {
  const { documents } = useContext(UploadedDocumentContext);
  const { documentId } = useParams();
  const [doc, setDoc] = useState<DocumentResponse | null>(null);
  const [fileData, setFIleData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [analysisType, setAnalysisType] = useState<"all" | "page">("all");
  const [analyzeFrom, setAnalyzeFrom] = useState<number>(1);
  const [analyzeTo, setAnalyzeTo] = useState<number>(1);
  const [conversionResult, setConversionResult] = useState<null | string>(null);
  const { mutateAsync } = useAnalyzeDocuments();

  const { data: documentsData } = useGetDocuments();

  useEffect(() => {
    if (!documentsData || !documentId) return;
    (async () => {
      const document = documentsData.find((doc) => doc._id === documentId);
      if (document === undefined) {
        setError(`Document (${documentId}) not found`);
        return;
      }
      setDoc(document);
      setLoading(true);
      const url = new URL(
        document.storagePath,
        "http://localhost:9000/public/"
      );
      // console.log("URL", url);
      try {
        const res = await fetch(url);
        const blob = await res.blob();

        const accessKey =
          "FqitPJEfgdG2jKWAGb_UqpZSNIXVu959ekp1a1P4FpJnjbom7qr5vp_ypdZYIxH0O-63KzNjOZiiPErAb5XcprbQpgAYGf6yHU4XX_XNJn9MkyI1UsltU5h3";
        const environmentId = "w2tj7RB7GH6etVs_buRK";
        const key = new TextEncoder().encode(accessKey);
        const token = await new SignJWT({ aud: environmentId })
          .setIssuedAt()
          .setProtectedHeader({ alg: "HS256" })
          .sign(key);

        const config = {
          headers: {
            Authorization: token,
          },
        };

        const conversionConfig = {
          default_styles: true,
          collaboration_features: {
            user_id: "example_user_id",
            comments: true,
            track_changes: false,
          },
        };

        const formData = new FormData();
        console.log("heree");
        formData.append("config", JSON.stringify(conversionConfig));
        formData.append("file", blob, "file.docx");
        axios
          .post(
            "https://docx-converter.cke-cs.com/v2/convert/docx-html",
            formData,
            config
          )
          .then((response) => {
            console.log("Conversion result", response.data);
            setConversionResult(response.data.html);
          })
          .catch((error) => {
            console.log("Conversion error", error);
          });
      } catch (error) {
        setError(error as string);
        // setLoading(false);
      } finally {
        // setLoading(false);
      }
    })();
  }, [documentsData, documentId]);

  const analyzeDocument = () => {
    console.log(analysisType);
    console.log(analyzeFrom);
    console.log(analyzeTo);
    mutateAsync({
      documentId: documentId as string,
      pageNumber: analyzeFrom || 1,
      endPageNumber: analyzeTo || 1,
    });
  };

  return (
    <div className="relative">
      <div className="mr-[355px] relative min-h-full p-4 pt-0">
        {doc && <EditorHeader analyzeDocument={analyzeDocument} doc={doc} />}
        <div>
          {loading && (
            <div className="flex items-center justify-center w-full h-screen">
              <Loader />
            </div>
          )}
          {conversionResult && (
            <Editor file={conversionResult} setLoading={setLoading} />
          )}
        </div>
      </div>
      <EditorSidebar
        analysisType={analysisType}
        setAnalysisType={setAnalysisType}
        analyzeFrom={analyzeFrom}
        setAnalyzeFrom={setAnalyzeFrom}
        analyzeTo={analyzeTo}
        setAnalyzeTo={setAnalyzeTo}
      />
    </div>
  );
}

export default Document;

async function loadDocx(file: Blob) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.convertToHtml({ arrayBuffer }, {});
  return result.value;
}

// Use the HTML content in your Plate.js editor
