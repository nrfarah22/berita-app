"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";


export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 block w-full px-4 py-2 text-white bg-slate-900 shadow-md lg:px-8 lg:py-3 z-50">
            <div className="flex flex-wrap items-center justify-between">
                <Image
                    src="/images/NewsLogo.svg"
                    alt="News Logo"
                    width={70}
                    height={10}
                />
                <div className="hidden sm:block">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 sm:flex-row lg:items-center lg:gap-6">
                        <li className="flex items-center p-1 text-sm gap-x-2 text-gray-200">
                            <Link
                                href="/"
                                className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                                    Home
                            </Link>
                        </li>
                        <li className="relative flex items-center p-1 text-sm gap-x-2 text-gray-200">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
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
                        {dropdownOpen && (
                            <div className="absolute right-0 top-full mt-3 w-48 rounded-lg bg-slate-900 shadow-lg ring-1 ring-white/10">
                                <div className="py-1 text-sm text-white">
                                    <Link href="/kategori/terbaru" className="block px-4 py-2 hover:bg-slate-700">
                                        Terbaru
                                    </Link>
                                    <Link href="/kategori/terbaru" className="block px-4 py-2 hover:bg-slate-700">
                                        Nasional
                                    </Link>
                                    <Link href="/kategori/terbaru" className="block px-4 py-2 hover:bg-slate-700">
                                        Internasional
                                    </Link>
                                </div>
                            </div>
                        )}
                        </li>
                    </ul>
                </div>
                {/* Burger Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    className="relative h-6 w-6 sm:hidden"
                >
                    <svg
                    className="h-6 w-6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    >
                    {mobileOpen ? (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                        />
                    ) : (
                        <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 6h16M4 12h16M4 18h16"
                        />
                    )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute right-0 top-15 w-50 bg-slate-900 px-6 py-4 sm:hidden">
                    <ul className="flex flex-col gap-4 text-sm text-gray-200">
                        <li>
                            <Link href="/" onClick={() => setMobileOpen(false)} className="inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
                                Home
                            </Link>
                        </li>
                        <button
                            onClick={() => setDropdownOpen(!dropdownOpen)}
                            className="relative inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium text-white hover:bg-slate-700">
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
                        {dropdownOpen && (
                            <div className="static right-0 z-50 w-44 pl-8 origin-top-right rounded-md shadow-lg ring-1 ring-black/5">
                                <div className="py-1 text-sm text-white-700">
                                    <Link href="/kategori/terbaru" className="block px-4 py-2 hover:bg-slate-700">
                                        Terbaru
                                    </Link>
                                    <Link href="/kategori/terbaru" className="block px-4 py-2 hover:bg-slate-700">
                                        Nasional
                                    </Link>
                                    <Link href="/kategori/terbaru" className="block px-4 py-2 hover:bg-slate-700">
                                        Internasional
                                    </Link>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
            )}
        </nav>
    )
}
