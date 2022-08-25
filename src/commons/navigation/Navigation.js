import React from "react";
import { Link } from "react-router-dom";

import { v4 } from "node-uuid";

export function Navigation({ styles }) {
  const locations = [
    {
      name: "Inicio",
      path: "/",
    },
    {
      name: "Libros",
      path: "/libros",
    },
    {
      name: "Blog",
      path: "/blog",
    },
    {
      name: "Media",
      path: "/media",
    },
    {
      name: "Contacto",
      path: "/contacto",
    },
  ];
  return (
    <nav
      className={`${
        styles ? styles : "w-full grid grid-flow-col gap-1 text-center"
      }`}
    >
      {locations.map((e, index) => (
        <Link
          to={e.path}
          className="font-reggae px-1 text-white text-opacity-70 hover:text-opacity-100"
          key={v4()}
        >
          {e.name}
        </Link>
      ))}
    </nav>
  );
}
