"use client";

import Link from "next/link";
import Dropdown from "./Dropdown";

type BurgerButtonProps = {
  open: boolean;
  toggle: () => void;
};

export default function BurgerButton({ open, toggle }: BurgerButtonProps) {
  return (
    <>
      {/* Burger Button */}
      <button
        onClick={toggle}
        aria-label="Toggle menu"
        className="relative h-6 w-6 sm:hidden"
      >
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
        >
          {open ? (
            // X icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            // Burger icon
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute right-0 top-15 w-50 bg-slate-900 px-6 py-4 sm:hidden">
          <ul className="flex flex-col gap-4 text-sm text-gray-200">
            <li>
              <Link href="/" onClick={toggle} className="inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                Home
              </Link>
            </li>
            <li>
              <Dropdown />
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
