import React, { useState } from "react";

export function Drawer({ children, openLeft }) {
  if (openLeft) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "unset";
  }
  const DrawerContent = ({ children }) => {
    return <div className="z-50 h-screen text-neutral-200">{children}</div>;
  };

  return (
    <div
      className={`z-50 bg-red-900 top-20 bottom-0 left-0 w-full h-screen ${
        openLeft ? "absolute" : "hidden"
      }`}
    >
      {DrawerContent({ children })}
    </div>
  );
}
