import React from "react";

export default function Banner() {
  return (
    <div
      style={{
        backgroundImage: "url(img/fanArt.png)",
      }}
      className="2xl:h-[36rem] xl:h-[32rem] xl:mt-10 w-full lg:gap-3 bg-contain bg-right bg-no-repeat"
    >
      <div className="h-full w-full flex gap-3 px-12 items-center bg-gradient-to-r from-neutral-900">
        <div className="w-full lg:w-1/3 text-right overflow-hidden translate-y-1/2 lg:translate-y-0 lg:translate-x-16">
          <h5 className="w-full dark:text-neutral-300 uppercase font-cinzel font-bold py-5">
            Creaciones de lectores
          </h5>
          <h3 className="w-full col-span-12 text-4xl lg:text-6xl font-reggae font-semibold dark:text-neutral-200">
            Envianos tu fan art!
          </h3>
          <h6 className="w-full dark:text-neutral-200 text-lg indent-1 py-7">
            Queremos ver todas las formas en que las historias y cuentos de Hugo
            inspiran a sus lectores para crear arte a partir de ello. ¿Haces
            arte o conoces a alguien que lo haga? Pueden enviarnoslo a
            continuación.
          </h6>
          <button className="bg-violet-700 px-5 py-3 uppercase font-bold text-neutral-200 rounded-full">
            Participar
          </button>
        </div>
      </div>
    </div>
  );
}
