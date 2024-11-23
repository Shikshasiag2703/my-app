import { NavItems } from "@/app/helpers";
import Link from "next/link";
import React from "react";

export default function Header({ active }) {
  return (
    <nav className="block py-6 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border-white/80 w-full max-w-full rounded-none px-6 bg-white text-white border-0 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-1">
          <Link href="/">
            <p className="text-black block antialiased mr-8 md:mr-0 whitespace-nowrap font-sans text-xl font-bold">
              My App
            </p>
          </Link>
        </div>
        <ul className="items-center gap-8 flex">
          {NavItems.map((navItem) => (
            <li
              key={navItem.path}
              className={`border-expand-fromLeft ${
                active == navItem.path ? "active" : ""
              }`}
            >
              <Link
                href={navItem.path}
                className="antialiased font-sans text-lg leading-relaxed flex items-center gap-2 font-medium text-gray-900"
              >
                {navItem.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex-1" />
      </div>
    </nav>
  );
}
