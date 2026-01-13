"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ModeToggle } from "./ModeToggle";
import { ChevronDown } from 'lucide-react';
import { ChevronUp } from 'lucide-react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';


interface Category {
    key: string;
    label: string;
}

const categories: Category[] = [
    {key: "nasional", label: "Nasional"},
    {key: "internasional", label: "Internasional"},
    {key: "teknologi", label: "Teknologi"},
    {key: "olahraga", label: "Olahraga"},
    {key: "ekonomi", label: "Ekonomi"},
    {key: "hiburan", label: "Hiburan"},
];

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    return (
        <nav className="fixed top-0 block w-full px-4 py-2 shadow-md lg:px-8 lg:py-3 z-50 bg-slate-100 dark:bg-slate-900">
            <div className="flex flex-wrap items-center justify-between">
                <Image
                    src="/images/NewsLogo.svg"
                    alt="News Logo"
                    width={70}
                    height={10}
                />
                <div className="hidden sm:block text-slate-900 dark:text-gray-50">
                    <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 sm:flex-row lg:items-center lg:gap-6">
                        <li className="flex items-center p-1 text-sm gap-x-2">
                            <Link
                                href="/"
                                className="inline-flex w-full items-center justify-center rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">
                                    Home
                            </Link>
                        </li>
                        <li className="relative flex items-center p-1 text-sm gap-x-2">
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium hover:bg-slate-200 dark:hover:bg-slate-700">
                                    Category
                                    {dropdownOpen ? <ChevronUp className="ml-1 h-4 w-4"/> : <ChevronDown className="ml-1 h-4 w-4"/>}
                            </button>
                        {/* Dropdown */}
                        {dropdownOpen && (
                            <div className="absolute right-0 top-full mt-3 w-48 rounded-lg shadow-lg bg-gray-100 dark:bg-slate-900 ring-1 ring-gray-300 dark:ring-slate-700 ">
                                <div className="py-1 text-sm">
                                    {categories.map((cat) => (
                                        <Link
                                        key={cat.key}
                                        href={`/category/${cat.key}`}
                                        className="block px-4 py-2 hover:bg-slate-200 dark:hover:bg-slate-700"
                                        onClick={() => setDropdownOpen(false)}
                                        >
                                            {cat.label}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                        </li>
                        <li className="flex items-center p-1 text-sm gap-x-2 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md">
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
                {/* Burger Button */}
                <button
                    onClick={() => setMobileOpen(!mobileOpen)}
                    aria-label="Toggle menu"
                    className="relative h-6 w-6 sm:hidden text-gray-800 dark:text-white"
                >
                    {mobileOpen ? (<X /> ) : (<Menu />)}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileOpen && (
                <div className="absolute right-0 top-15 w-full sm:w-50 bg-slate-50 dark:bg-slate-900 px-6 py-4 sm:hidden shadow-lg text-slate-900 dark:text-gray-50 ">
                    <ul className="flex flex-col gap-4 text-sm">
                        <li className="">
                            <Link 
                                href="/" 
                                onClick={() => setMobileOpen(false)} 
                                className="inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium ">
                                Home
                            </Link>
                        </li>
                        <li>
                            <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="inline-flex w-full items-center rounded-md px-4 py-2 text-sm font-medium ">
                                    Category
                                    {dropdownOpen ? <ChevronUp className="ml-1 h-4 w-4"/> : <ChevronDown className="ml-1 h-4 w-4"/>}
                            </button>
                        {/* Dropdown Mobile */}
                        {dropdownOpen && (
                            <div className="mt-2 w-full bg-gray-100 dark:bg-slate-800 rounded-md shadow text-slate-900 dark:text-gray-50">
                                <div className="py-1">
                                    <Link 
                                        href="/kategori/terbaru" 
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600"
                                        onClick={() => {
                                            setDropdownOpen(false);
                                            setMobileOpen(false);
                                        }}>
                                        Terbaru
                                    </Link>
                                    <Link 
                                        href="/kategori/nasional" 
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600"
                                        onClick={() => {
                                            setDropdownOpen(false);
                                            setMobileOpen(false);
                                        }}>
                                        Nasional
                                    </Link>
                                    <Link 
                                        href="/kategori/internasional" 
                                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-slate-600"
                                        onClick={() => {
                                            setDropdownOpen(false);
                                            setMobileOpen(false);
                                        }}>
                                        Internasional
                                    </Link>
                                </div>
                            </div>
                        )}
                        </li>
                        <li className="flex items-center px-4 py-2 text-sm gap-x-2">
                            <ModeToggle />
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}