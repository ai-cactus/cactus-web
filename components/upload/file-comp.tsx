import Cancel from "@/lib/svgs/cancel";
import { formatFileSize } from "@/utils/helper";
import React, { Dispatch, SetStateAction } from "react";

interface IProps {
  file: File;
  setFile: Dispatch<SetStateAction<File | null>>;
}

const FileComp = ({ file, setFile }: IProps) => {
  return (
    <section className="relative h-[103px] w-full border  border-[#cccccc] rounded-xl mx-auto flex  justify-between items-center px-7">
      <div>
        <p>
          <span className="font-inter font-semibold text-lg">{file.name}</span>{" "}
          <span className="font-inter font-normal text-[#909090] text-lg pl-5">
            {formatFileSize(file.size)}
          </span>
        </p>
      </div>
      <button type="button" onClick={() => setFile(null)}>
        <Cancel className="fill-[#919191]" />
      </button>
    </section>
  );
};

export default FileComp;
