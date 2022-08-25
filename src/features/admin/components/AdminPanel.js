import React from "react";
import { Link } from "react-router-dom";

import { v4 } from "node-uuid";

export function AdminPanel() {
  const links = [
    {
      label: "Admin",
      url: "",
    },
    {
      label: "Usuarios",
      url: "admin-users",
    },
    {
      label: "Libros",
      url: "admin-books",
    },
  ];
  return (
    <nav className="grid grid-cols-1 bg-pink-700 gap-y-3">
      <h3 className="text-lg uppercase text-center bg-neutral-700 text-white">
        Panel de Admin
      </h3>
      {links.map((link) => {
        return (
          <Link
            to={link.url}
            key={v4()}
            className="h-20 w-20 place-self-center border flex justify-center items-center text-white font-bold"
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
