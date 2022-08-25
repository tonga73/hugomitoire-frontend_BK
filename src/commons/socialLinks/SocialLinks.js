import React from "react";

import { v4 } from "node-uuid";

export function SocialLinks() {
  const links = [
    {
      icon: "facebook",
    },
    {
      icon: "instagram",
    },
    {
      icon: "youtube",
    },
    {
      icon: "email",
    },
  ];
  return (
    <nav className="grid grid-cols-4 gap-2">
      {links.map((link) => {
        return (
          <button
            type="button"
            key={v4()}
            className="opacity-70 hover:opacity-100 h-7 w-7"
          >
            <img
              className="mx-auto"
              src={`icons/social/${link.icon}.svg`}
              alt=""
            />
          </button>
        );
      })}
    </nav>
  );
}
