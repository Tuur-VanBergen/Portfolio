import React from "react";
import { CaretLeft, CaretRight } from "@phosphor-icons/react";

const CodeTag = ({ children, size = "m", rotate = "r" }) => {
  const sizeClass = {
    s: "size-4",
    m: "size-6 mt-[12px]",
    l: "size-8 mt-[12px]",
  }[size] || "size-6";

  const textSizeClass = {
    s: "text-[16px]",
    m: "text-[24px]",
    l: "text-[32px]",
  }[size] || "text-[24px]";

  const largerTextSizeClass = {
    s: "text-[24px]",
    m: "text-[32px] -mt-1",
    l: "text-[44px] -mt-2",
  }[size] || "text-[32px]";

  const rotateDirection = rotate === "r" ? "rotate-6" : "-rotate-6";

  return (
    <div className={`${rotateDirection} flex flex-row`}>
      <CaretLeft className={`${sizeClass} fill-[#8f1600]`} />
      <div className={`${textSizeClass} px-2 text-center mt-1`}>{children}</div>
      <div className={`${largerTextSizeClass} font-semibold text-[#8f1600]`}>/</div>
      <CaretRight className={`${sizeClass} -ms-2 fill-[#8f1600]`} />
    </div>
  );
};

export default CodeTag;
