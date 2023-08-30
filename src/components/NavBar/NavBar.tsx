import Image from "next/image";

import Card from "../Card/Card";
export default function NavBar() {
  return (
    <div>
      <div className="absolute top-[20px] left-[280px] bg-gray-300 w-[1189px] h-[53px]" />
      <Image
        className="absolute top-[26px] left-[355px] w-[41px] h-[42px]"
        alt=""
        src="/group-3.svg"
        width={800}
        height={800}
      />
      <div className="absolute top-[35px] left-[369px] inline-block w-4 h-[29px]">
        U
      </div>
      <div className="absolute top-[31px] left-[936px] rounded-3xs [background:linear-gradient(-90deg,_#fff,_rgba(255,_255,_255,_0.59),_#7674fa,_#d9509e)] w-[90px] h-8" />
      <div className="absolute top-[17px] left-[140px] rounded-3xs bg-silver-300 w-[909px] h-[61px]" />
      <b className=" absolute top-[39px]  left-[908px] text-[15px] inline-block text-white text-center w-[124px] h-5">
        Create
      </b>
      <div className="grid grid-cols-4 gap-4">
        <Card photo="/1-29@2x.png" />
        <Card photo="/1-29@2x.png" />
        <Card photo="/1-29@2x.png" />
        <Card photo="/1-29@2x.png" />
        <Card photo="/1-29@2x.png" />
        <Card photo="/1-29@2x.png" />
        <Card photo="/1-29@2x.png" />
        <Card photo="/1-29@2x.png" />
      </div>
      
    </div>

  );
}
