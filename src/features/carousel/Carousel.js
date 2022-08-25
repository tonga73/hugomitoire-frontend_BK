import React, { useState } from "react";

export default function Carousel({ children, backgroundImage }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="overflow-x-hidden w-full">
      <div
        style={{
          backgroundImage: "url(" + backgroundImage[currentIndex] + ")",
        }}
        className="bg-cover bg-no-repeat bg-fixed"
      >
        <div className="mx-auto grid grid-cols-12 lg:gap-y-5 gap-y-3 pt-24 pb-52 items-center bg-gradient-to-t from-neutral-900 border-b-8 border-b-neutral-900">
          <div className="order-last lg:order-first col-span-12 2xl:col-span-5 xl:col-span-6 lg:col-span-5 grid lg:gap-10 gap-5 lg:pl-44 py-3 px-3 lg:px-0 text-white text-right 2xl:translate-x-36">
            <div className="font-cinzel text-xl font-bold">Novela</div>
            <div className="font-reggae text-6xl">La Bestia</div>
            <div className="text-xl font-semibold pl-44">
              Un niño nace con la marca de la bestia. Ha venido desde las
              tinieblas y tiene la protección del Diablo.{" "}
            </div>
            <button className="w-1/2 place-self-end bg-violet-700 px-5 py-3 uppercase font-bold text-neutral-200 rounded-full">
              Ver Libro
            </button>
          </div>
          <div className="col-span-7 col-end-9 2xl:col-span-4 xl:col-span-3 lg:col-span-4 flex justify-end items-center 2xl:translate-x-36 xl:translate-x-32 lg:translate-x-36 md:translate-x-10 translate-x-16 rounded-lg">
            <img
              className="rounded-lg 2xl:h-[48rem] lg:h-[29rem]"
              src={children[currentIndex]}
              alt=""
            />
          </div>
          <div className="col-span-4 2xl:col-span-3 xl:col-span-3 lg:col-span-3 2xl:translate-x-36 xl:translate-x-32 lg:translate-x-36 md:translate-x-10 translate-x-16">
            {currentIndex < children.length - 1 ? (
              <img
                onClick={() => setCurrentIndex(currentIndex + 1)}
                className="2xl:h-[48rem] lg:h-[29rem] cursor-pointer opacity-50 hover:opacity-90 scale-90 hover:scale-95 transition-transform duration-500 rounded-lg"
                src={children[currentIndex + 1]}
                alt=""
              />
            ) : (
              "NOPES"
            )}
          </div>
          <nav className="col-span-12 flex justify-end items-center gap-1 py-1 px-3">
            {Object.keys(children).map((e, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(Number(e))}
                className={`rounded-full ${
                  currentIndex >= Number(e)
                    ? "bg-pink-700 h-2 w-2"
                    : "bg-neutral-700 hover:bg-neutral-500 h-1.5 w-1.5"
                }`}
              ></button>
            ))}
            <button
              disabled={currentIndex < children.length - 1}
              onClick={() => setCurrentIndex(0)}
              className={`px-3 rounded-xl border-2 ${
                currentIndex < children.length - 1
                  ? "border-neutral-700 text-neutral-700 transition-all"
                  : "border-transparent text-neutral-700 bg-neutral-500 hover:bg-neutral-200"
              }`}
            >
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
                  d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                ></path>
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
