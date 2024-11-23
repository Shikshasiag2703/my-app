import React from "react";
import Link from "next/link";
import { NavItems } from "@/app/helpers";

export default function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 border-t border-gray-200 py-6 md:justify-between">
          <p className="block antialiased font-sans text-base leading-relaxed text-inherit text-center font-normal !text-gray-700">
            My App © {new Date().getFullYear()} All rights reserved.
          </p>
          <ul className="flex gap-8 items-center">
            {NavItems.map((navItem) => (
              <li key={navItem.path}>
                <Link
                  href={navItem.path}
                  className="block antialiased font-sans text-sm leading-normal font-normal text-gray-700 hover:text-gray-900 transition-colors"
                >
                  {navItem.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
