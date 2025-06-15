"use client";
import { useParams } from "next/navigation";
import { useGetListingById } from "@/features/listings/hooks/use-get-listing";
import { TryAgain } from "@/components/try-again";

export function ListingDetailsScreen() {
  const { id } = useParams();
  const { data, isLoading, error, refetch } = useGetListingById(id as string);

  if (data) {
    console.log(data);
  }
  return (
    <main className="mx-auto max-w-7xl px-6">
      Listing details screen
      {error && <TryAgain onRetry={refetch} />}
      {isLoading && <>Loading............</>}
    </main>
  );
}
