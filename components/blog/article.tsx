import Logo from "@/lib/svgs/logo";
import { cutText } from "@/utils/helper";
import { ArticleType } from "@/utils/static";
import Image from "next/image";
import React from "react";

interface IProps {
  article: ArticleType;
}

export const Article1 = ({ article }: IProps) => {
  return (
    <article className="max-w-[36.5rem]">
      <div className="w-[36.5rem] h-[19.9375rem] relative mb-8">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="rounded-xl"
        />
      </div>
      <h1 className="font-medium font-neue text-[2.3125rem] leading-[2.6875rem]">
        {article.title}
      </h1>
      <p className="font-medium font-neue text-[#667085] text-[1.1875rem] leading-[1.8125rem] pt-3">
        {cutText(article.body, 120)}
      </p>
      <div className="mt-3 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div>
            <Logo className="fill-[#5744EB]" />
          </div>
          <h3 className="text-[#667085] font-medium font-manrope text-[1.0625rem]">
            {article.author}
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-[5px] h-[5px] bg-[#979797] rounded-full" />
          <p className="text-[#667085]  font-manrope text-[1.0625rem]">
            5 mins read
          </p>
        </div>
      </div>
    </article>
  );
};

export const Article2 = ({ article }: IProps) => {
  return (
    <article className="max-w-[36.5rem] flex items-center gap-8">
      <div className="w-[17.25rem] h-[17rem] relative flex-1">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex-1">
        <h1 className="font-medium font-neue text-[1.8125rem] leading-[2.1255rem]">
          {article.title}
        </h1>
        <p className="font-medium font-neue text-[#667085] text-[1rem] leading-[1.8125rem] pt-3">
          {cutText(article.body, 60)}
        </p>
        <div className="mt-3 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <Logo className="fill-[#5744EB]" width="21" height="21" />
            </div>
            <h3 className="text-[#667085] font-medium font-manrope text-[0.8125rem]">
              {article.author}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-[5px] h-[5px] bg-[#979797] rounded-full" />
            <p className="text-[#667085]  font-manrope text-[0.8125rem]">
              5 mins read
            </p>
          </div>
        </div>
      </div>
    </article>
  );
};
