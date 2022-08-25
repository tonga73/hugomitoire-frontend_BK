import React from "react";

import { Navigation } from "../navigation/Navigation";
import { SocialLinks } from "../socialLinks/SocialLinks";

export default function Footer() {
  return (
    <div className="h-80 pb-64 pt-96 flex bg-gradient-to-t dark:from-neutral-900 via-neutral-900">
      <div className="flex flex-col gap-y-10 justify-center items-center container mx-auto">
        <div className="w-2/3">
          <Navigation />
        </div>
        <div className="w-1/3 py-3">
          <SocialLinks />
        </div>
        <div className="w-full flex flex-col text-center justify-end gap-1 dark:text-neutral-300">
          <h5 className="w-full uppercase tracking-wider font-cinzel font-bold text-3xl dark:text-neutral-500">
            Hugo Mitoire
          </h5>
          © Todos los derechos reservados
        </div>
      </div>
    </div>
  );
}
