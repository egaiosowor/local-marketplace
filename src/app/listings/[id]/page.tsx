import { ListingDetailsScreen } from "./screen";
import { listingServices } from "@/features/listings/services/listing-services";
import { ListingSchema } from "@/features/listings/listing.validation";
import type { Metadata } from "next";
import { env } from "@/config/env";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  try {
    const data = await listingServices.getListingById(id);
    const listing = ListingSchema.parse(data);
    const title = listing.title || "Listing";
    return { title: `${title} | ${env.APP_NAME}` };
    //eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return { title: `Listing | ${env.APP_NAME}` };
  }
}

export default async function ListingDetailsPage() {
  return <ListingDetailsScreen />;
}
