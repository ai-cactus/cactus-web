import { DocumentResponse } from "@/lib/types";
import React from "react";
import { FaAngleLeft } from "react-icons/fa6";

interface IProps {
  analyzeDocument: () => void;
  doc: DocumentResponse;
}

const EditorHeader = ({ analyzeDocument, doc }: IProps) => {
  return (
    <header className="my-7">
      <div className="flex items-center justify-between">
        <div>
          <div>
            <div className="flex items-center gap-3 mb-3">
              <FaAngleLeft className="text-primary" />
              <h1 className="text-primary text-[1.875rem] font-bold">
                {doc.fileName}
              </h1>
            </div>
            <p className="text-sm text-grey">
              Review your document and select pages to analyze.
            </p>
          </div>
          <div></div>
        </div>
        <div>
          <button
            className="bg-primary-20 w-[8.75rem] h-[2.5rem] text-white rounded-[86px] text-sm"
            onClick={() => {
              analyzeDocument();
            }}
          >
            Analyze now
          </button>
        </div>
      </div>
    </header>
  );
};

export default EditorHeader;
