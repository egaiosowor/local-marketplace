"use client";
import Image from "next/image";
import { Listing } from "../listing.types";
import { MapPin, Dot, Clock, Star, Bookmark, Heart } from "lucide-react";
import { getTimeAgo } from "@/app/lib/formatters";

export function ListingCard({ listing }: { listing: Listing }) {
  const { title, price, image, createdAt, location } = listing;
  return (
    <div className="w-full flex flex-col gap-2 bg-white rounded-2xl overflow-clip">
      <div className="relative w-full aspect-[2/1]">
        <Image src={image} alt={title} fill className="object-cover" />
        <div className="absolute top-4 right-4 flex items-center gap-1 p-1 text-xs bg-white rounded-md leading-tight">
          <Star size={12} className="" />
          4.5
        </div>
      </div>
      <div className="p-4 flex items-start justify-between">
        <div className="flex flex-col gap-2">
          <h3 className="sm:text-lg leading-tight">{title}</h3>
          <p className="font-semibold leading-tight">${price}</p>
          <div className="flex items-center gap-2">
            <p className="flex items-center  gap-0.5 text-xs text-gray-500">
              <Clock size="12" className="text-black/70" />
              {getTimeAgo(createdAt)}
            </p>
            <Dot className="size-1 text-black/10 bg-black/10 rounded-full" />
            <p className="flex items-center  gap-0.5 text-xs text-gray-500">
              <MapPin size="12" className="text-black/70" />
              {location}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 rounded-full border border-gray-100">
            <Heart className="size-4 text-gray-500" />
          </button>
          <button className="p-2 rounded-full border border-gray-100">
            <Bookmark className="size-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
