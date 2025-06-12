import Link from "next/link";
import {
  Bell,
  Search,
  ChevronDown,
  Plus,
  MessageCircleMore,
} from "lucide-react";
import Image from "next/image";

export function Navbar() {
  const isAuthenticated = true;
  return (
    <nav className="mx-auto mb-12 flex max-w-7xl items-center justify-between gap-10 px-6 py-6">
      <span className="text-xl font-semibold">MrktPlace</span>

      <div className="relative w-full max-w-[50%] flex-1">
        <input
          placeholder="Search marketplace"
          className="w-full rounded-lg bg-gray-100 p-3 pl-10 text-sm placeholder:text-sm placeholder:font-normal placeholder:text-black/70"
        />
        <Search className="absolute top-1/2 left-3.5 size-4 -translate-y-1/2 stroke-1 text-black" />
      </div>
      <div className="flex items-center gap-8">
        <ul className="flex items-center justify-between gap-6">
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
    </nav>
  );
}
