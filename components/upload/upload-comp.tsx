import { cn } from "@/utils/utils";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import { FilledButton } from "../buttons";
import Assets from "@/lib/assets";

interface IProps {
  file: File | null;
  setFile: Dispatch<SetStateAction<File | null>>;
}

const UploadComp = ({ file, setFile }: IProps) => {
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const onDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragover" || e.type === "dragenter") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const droppedFile = e.dataTransfer.files[0];
      setFile(droppedFile);

      e.dataTransfer.clearData();
    }
  };

  const onFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target);
    if (e.target.files && e.target.files.length > 0) {
      const selectedFile = e.target.files[0];
      setFile(selectedFile);
    }
  };
  return (
    <section
      className={cn(
        "relative h-[450px] w-full border-2 border-dashed border-[#cccccc] rounded-xl mx-auto flex flex-col justify-center items-center",
        {
          "h-[260px]": !!file,
        }
      )}
      onDragEnter={onDrag}
      onDragOver={onDrag}
      onDragLeave={onDrag}
      onDrop={onDrop}
    >
      <div className="flex flex-col justify-center items-center">
        <Image
          src={Assets.Upload}
          alt="upload icon"
          className={cn("h-[6.4375rem] w-[6.4375rem] object-contain", {
            "h-[4rem] w-[4rem] ": !!file,
          })}
        />
        <h2 className="text-black text-xl font-semibold mt-4 font-sans">
          Drag and Drop file or click to choose file
        </h2>
        <p className="text-[#b2b2b2] text-[1rem]">
          file type: pdf (max. 100mb)
        </p>
        <p className="text-[#b2b2b2] text-lg">or</p>
        <div className="mt-3">
          <FilledButton
            className={cn("w-[15.2rem] h-12 rounded-xl py-0", {
              "h-10 text-sm": !!file,
            })}
          >
            SELECT FILE
          </FilledButton>
        </div>
      </div>
      {error && <p className="text-red-500 text-sm font-semibold">{error}</p>}
      <input
        type="file"
        name=""
        id=""
        onChange={onFileSelection}
        // accept=".pdf, .doc, .docx"
        className="absolute opacity-0 w-full h-full cursor-pointer"
      />
    </section>
  );
};

export default UploadComp;
