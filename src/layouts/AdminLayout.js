import React from "react";
import { Outlet, Link } from "react-router-dom";

import { AdminPanel } from "../features/admin/components/AdminPanel";

export default function AdminLayout() {
  return (
    <div className="bg-neutral-900 h-screen grid grid-cols-12">
      <div className="bg-neutral-500 col-span-1">
        <Link to="/">
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
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            ></path>
          </svg>
        </Link>
        <Link to="new-book">+</Link>
        <AdminPanel />
      </div>
      <div className="bg-neutral-300 col-span-7 flex justify-center">
        <Outlet />
      </div>
      <div className="bg-neutral-700 col-span-4"></div>
    </div>
  );
}
