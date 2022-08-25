import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Navigation } from "../navigation/Navigation";
import { SocialLinks } from "../socialLinks/SocialLinks";

import { Drawer } from "../drawer/Drawer";

export default function Header() {
  const [offset, setOffset] = useState(0);
  const [drawerLeft, setDrawerLeft] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const Title = () => {
    return "Hugo Mitoire";
  };

  const ExtraMenu = () => {
    return (
      <nav className="flex w-full justify-around items-center gap-x-1">
        <Link
          to="/admin"
          className="uppercase text-center bg-neutral-200 hover:bg-neutral-300 dark:text-neutral-700 font-bold rounded-sm px-1 py-0.5 flex flex-col w-full text-sm"
        >
          Button 1
        </Link>
      </nav>
    );
  };

  return (
    <>
      <Drawer openLeft={drawerLeft}>
        <Navigation styles="grid grid-flow-row gap-5 text-xl py-5 px-7" />
      </Drawer>
      <header
        className={`flex lg:justify-center items-center transition-all duration-700 h-20 fixed z-20 w-full hover:dark:bg-neutral-900 ${
          offset > 0 || !!drawerLeft
            ? "bg-neutral-900"
            : "bg-gradient-to-b from-neutral-900"
        }`}
      >
        <div className="flex w-full justify-between px-3 lg:hidden">
          <button
            onClick={() => {
              setDrawerLeft(!drawerLeft);
            }}
            className={`text-neutral-200 z-20`}
          >
            {drawerLeft ? (
              <svg
                class="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
          <SocialLinks />
        </div>
        <div className="container mx-auto hidden items-center lg:grid lg:grid-cols-7">
          <div className="col-span-2">
            <Navigation styles="w-full grid grid-flow-col gap-1 text-center" />
          </div>
          <div className="col-span-3 font-cinzel text-center text-5xl tracking-wider uppercase dark:text-white cursor-default select-none">
            {Title()}
          </div>
          <div className="col-span-2 w-1/2 place-self-end self-center">
            <SocialLinks />
          </div>
        </div>
      </header>
    </>
  );
}
