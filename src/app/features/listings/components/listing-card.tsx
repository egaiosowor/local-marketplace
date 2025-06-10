"use client";
import Image from "next/image";
import { Listing } from "../listing.types";
import { MapPin, Dot, Clock, Star, Bookmark, Heart } from "lucide-react";
import { getTimeAgo } from "@/app/lib/formatters";

export function ListingCard({ listing }: { listing: Listing }) {
  const { title, price, image, createdAt, location } = listing;
  return (
    <div className="flex w-full flex-col gap-2 overflow-clip rounded-2xl bg-white">
      <div className="relative aspect-[2/1] w-full">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4 flex items-center gap-1 rounded-md bg-white p-1 text-xs leading-[0]">
          <Star size={14} className="fill-yellow-400 text-transparent" />
          4.5
        </div>
      </div>
      <div className="flex items-start justify-between p-4">
        <div className="flex flex-col gap-2">
          <h3 className="leading-tight sm:text-lg">{title}</h3>
          <p className="leading-tight font-semibold">${price}</p>
          <div className="flex items-center gap-2">
            <p className="flex items-center gap-0.5 text-xs text-gray-500">
              <Clock size="12" className="text-black/70" />
              {getTimeAgo(createdAt)}
            </p>
            <Dot className="size-1 rounded-full bg-black/10 text-black/10" />
            <p className="flex items-center gap-0.5 text-xs text-gray-500">
              <MapPin size="12" className="text-black/70" />
              {location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="group cursor-pointer rounded-full border border-gray-100 p-2">
            <Heart className="size-4 text-gray-500 transition-colors duration-300 ease-in group-hover:fill-red-500 group-hover:text-red-500" />
          </button>
          <button className="group cursor-pointer rounded-full border border-gray-100 p-2">
            <Bookmark className="size-4 text-gray-800 transition-colors duration-300 ease-in group-hover:fill-gray-800" />
          </button>
        </div>
      </div>
    </div>
  );
}
