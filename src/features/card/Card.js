import React from "react";

export default function Card({ children, backgroundImage, onClick }) {
  return (
    <div onClick={onClick} className="w-full h-96 cursor-pointer select-none">
      <div className="grid grid-cols-1">
        <div
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          className="bg-center bg-cover"
        >
          <div className="h-52 w-[23rem]"></div>
        </div>
        <div className="flex w-full relative">
          <div className="px-20 absolute -translate-y-14">{children}</div>
        </div>
      </div>
    </div>
  );
}
