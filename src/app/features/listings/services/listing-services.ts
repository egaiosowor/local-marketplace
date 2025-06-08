import api from "@/app/lib/api";
import { Listing } from "../listing.types";
const BASE_PATH = "/listings";

export const listingServices = {
  async getListings(): Promise<Listing[]> {
    const res = await api.get<Listing[]>(`${BASE_PATH}`);
    return res.data;
  },
};
