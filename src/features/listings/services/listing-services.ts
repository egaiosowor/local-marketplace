import api from "@/lib/api";
import { Listing } from "../listing.types";
const BASE_PATH = "/listings";

export const listingServices = {
  async getListings(): Promise<Listing[]> {
    const res = await api.get<Listing[]>(`${BASE_PATH}`);
    return res.data;
  },

  async getListingById(id: string): Promise<Listing> {
    const res = await api.get<Listing>(`${BASE_PATH}/${id}`);
    return res.data;
  },
};
