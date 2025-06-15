"use client";
import { useParams } from "next/navigation";
import { useGetListingById } from "@/app/features/listings/hooks/use-get-listing";
import { TryAgain } from "@/app/components/try-again";

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
