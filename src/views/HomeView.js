import React from "react";

import { v4 } from "node-uuid";

import Carousel from "../features/carousel/Carousel";
import Card from "../features/card/Card";
import Banner from "../features/banner/Banner";

import { ParticlesDefault } from "../commons/utils/particles/ParticlesDefault";

export function HomeView() {
  const list = [
    {
      content:
        "http://hugomitoire.com/mediafiles/portada_libros/image843_sRPPYgI.png",
      background:
        "http://hugomitoire.com/mediafiles/fondo_pantalla/bestiaBG.png",
    },
    {
      content:
        "https://3.bp.blogspot.com/-2c2apnDxqYg/Wl5xxIANt3I/AAAAAAAABmg/2KpyJ7bMFxYe3f0RK4ddfZN9yw4LbY0fACPcBGAYYCw/s1600/tapa%2Bsolo.jpg",
      background:
        "https://4.bp.blogspot.com/-93js0rTvKhE/Wk1--MsAoEI/AAAAAAAABkk/8H4LoviWScweD8NhgKJuGZuefgjzN4IgQCPcBGAYYCw/s1600/chancha%2Bpag%2B016%2By%2B17.jpg",
    },
    {
      content:
        "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/art-book-cover-design-template-34323b0f0734dccded21e0e3bebf004c_screen.jpg?ts=1637015198",
      background:
        "https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171__480.jpg",
    },
  ];

  const cards = [
    {
      title: "La puerta del ropero",
      type: "Cuento",
      bgImg:
        "https://1.bp.blogspot.com/-_uuyots-jVo/Wl9GdHiA4EI/AAAAAAAABqM/d535KAl50_4jRcWl3tapHWwIBf8JFd5ygCLcBGAs/s1600/La%2Bpuerta%2Bdel%2Bropero.jpg",
    },
    {
      title: "El cuco",
      type: "Cuento",
      bgImg:
        "https://4.bp.blogspot.com/-AtnuSAdwlZ8/Wl9GbyalWPI/AAAAAAAABp8/cOoivjQIuQUeKuIRDWFvTOk0ugCEQZIuACLcBGAs/s1600/El%2Bcuco.jpg",
    },
    {
      title: "Criaturas Celestes: Un encuentro inesperado",
      type: "Novela",
      bgImg:
        "http://4.bp.blogspot.com/-HZcfKBH2oX8/TaoW_Z7o4zI/AAAAAAAABAs/XCo1Oi2dsKw/s1600/C3+llegan+las+criaturas.jpg",
    },
  ];

  return (
    <>
      <div className="col-span-12 z-10 mx-auto w-full overflow-x-hidden">
        <Carousel backgroundImage={list.map((i) => i.background)}>
          {list.map((i) => i.content)}
        </Carousel>
      </div>
      <div className="col-span-12 md:gap-y-20 py-5 container mx-auto grid grid-cols-2 -translate-y-52 z-10">
        <div className="z-10 lg:col-span-2 md:col-span-2 col-span-2 grid lg:grid-flow-col gap-3 justify-around lg:px-32 pb-14">
          {cards.map((card, index) => {
            return (
              <div
                key={v4()}
                className="flex justify-center lg:first:first-of-type:col-start-1"
              >
                <Card backgroundImage={card.bgImg} key={index}>
                  <div className="text-lg font-bold text-white px-5 font-cinzel">
                    {card.type}
                  </div>
                  <div className="text-4xl font-bold text-white px-5 font-reggae">
                    {card.title}
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="z-10 col-span-2 md:gap-y-3">
          <Banner />
        </div>
        <ParticlesDefault />
      </div>
    </>
  );
}
