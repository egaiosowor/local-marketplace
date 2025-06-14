"use client";

import Link from "next/link";
import {
  Bell,
  Search,
  ChevronDown,
  Plus,
  MessageCircleMore,
  Menu,
  ArrowLeft,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export function Navbar() {
  const isAuthenticated = true;
  const [showSearch, setShowSearch] = useState(false);

  return (
    <nav className="relative mx-auto mb-8 flex max-w-7xl items-center justify-between gap-10 px-6 py-6 md:mb-12">
      <div className="flex items-center gap-1.5">
        <button className="cursor-pointer lg:hidden">
          <Menu />
        </button>
        <span className="text-xl font-semibold">MrktPlace</span>
      </div>

      {/* Desktop search bar */}
      <div className="relative hidden w-full max-w-[50%] flex-1 md:block">
        <input
          placeholder="Search marketplace"
          className="w-full rounded-lg bg-gray-100 p-3 pl-10 text-sm placeholder:text-sm placeholder:font-normal placeholder:text-black/70"
        />
        <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 stroke-1 text-black" />
      </div>

      <div className="flex items-center gap-2">
        {/* Mobile search bar */}
        <div className="flex justify-end md:hidden">
          {showSearch ? (
            <div className="absolute top-0 left-0 z-[100] flex h-full w-full items-center justify-between gap-2 bg-[#FAFAFA] px-2">
              <button
                onClick={() => setShowSearch(false)}
                className="cursor-pointer"
              >
                <ArrowLeft className="size-6 text-black" />
              </button>
              <input
                placeholder="Search marketplace"
                className="w-full rounded-lg bg-gray-100 p-3 pl-10 text-sm placeholder:text-sm placeholder:font-normal placeholder:text-black/70"
              />
            </div>
          ) : (
            <button
              onClick={() => setShowSearch(true)}
              className="cursor-pointer"
            >
              <Search className="absolute top-1/2 right-24 size-5.5 -translate-y-1/2 stroke-1 text-black" />
            </button>
          )}
        </div>

        <div className="flex items-center gap-8">
          <ul className="hidden items-center justify-between gap-6 lg:flex">
            <li>
              <Link href="/explore" className="flex items-center gap-1 text-sm">
                Explore <ChevronDown className="size-4" />
              </Link>
            </li>
            <li>
              <Link href="/community" className="text-sm">
                Collections
              </Link>
            </li>
          </ul>

          {isAuthenticated ? (
            <div className="flex items-center gap-4.5">
              <div className="hidden items-center gap-4.5 lg:flex">
                <button title="create listing">
                  <Plus className="size-5" />
                </button>
                <button title="notifications" className="relative">
                  <MessageCircleMore className="size-5" />
                  <span className="absolute -top-1.5 -right-1.5 size-3.75 rounded-full bg-green-600 text-[10px] font-semibold text-white">
                    2
                  </span>
                </button>
                <button title="notifications" className="relative">
                  <Bell className="size-5" />
                  <span className="absolute -top-1.5 -right-1.5 size-3.75 rounded-full bg-red-600 text-[10px] font-semibold text-white">
                    7
                  </span>
                </button>
              </div>
              <div className="flex items-center gap-1">
                <Image
                  src="https://avatars.githubusercontent.com/u/98913917?v=4"
                  alt="avatar"
                  width={32}
                  height={32}
                  className="rounded-full"
                />{" "}
                <ChevronDown className="size-5" />
              </div>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link
                href="/login"
                className="rounded-md border border-gray-500 px-3 py-1.5 text-sm"
              >
                Log in
              </Link>
              <Link
                href="/register"
                className="rounded-md border border-black bg-black px-3 py-1.5 text-sm text-white"
              >
                Sign Up
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
