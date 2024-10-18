import React from "react";
import logoPic from "@/public/img/logo.png";
import Image, { StaticImageData } from "next/image";

interface typesofprops {
  classname: string;
  classnamenumbers: string;
  title: string;
  description: string;
  titlepic: StaticImageData;
  numberPics: StaticImageData;
}

const ReviewHomeBanner = ({
  classname,
  title,
  description,
  classnamenumbers,
  titlepic,
  numberPics,
}: typesofprops) => {
  return (
    <div
      className={`w-[200px] absolute z-30 ${classname} bg-white py-2 px-3 rounded-md border-[1px] border-gray-200`}
    >
      <Image src={numberPics} alt="number-Pics" className={`${classnamenumbers}`} />
      <span className="flex items-center gap-4 justify-between">
        <Image src={logoPic} alt="logo-pic" width={40} />
        <p className="text-gray-400 text-[12px]">now</p>
      </span>
      <span className="flex items-center gap-1">
        <b className="pt-0 text-[8px]">{title}</b>
        <Image src={titlepic} alt="logo-pic" width={10} height={10} />
      </span>
      <p className="text-[6px]">{description}</p>
    </div>
  );
};

export default ReviewHomeBanner;
