"use client";

import { useState } from "react";

export default function Dropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {/* Trigger */}
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
      >
        Category
        <svg
          className="ml-2 h-4 w-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      {open && (
        <div className="static right-0 z-50 mt-2 w-44 pl-8 origin-top-right rounded-md shadow-lg ring-1 ring-black/5">
          <div className="py-1 text-sm text-white-700">
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Terbaru
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Nasional
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Internasional
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Ekonomi
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Olahraga
            </a>
            <a href="#" className="block px-4 py-2 hover:bg-gray-100">
              Teknologi
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
