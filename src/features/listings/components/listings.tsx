"use client";
import { useGetListings } from "@/features/listings/hooks/use-get-listings";
import { ListingCard } from "@/features/listings/components/listing-card";
import { ListingSkeleton } from "@/features/listings/components/listing-skeleton";
import { TryAgain } from "@/components/try-again";

export function Listings() {
  const { data, error, isLoading, refetch } = useGetListings();
  return (
    <>
      <main className="mx-auto grid max-w-7xl gap-8 px-6 py-4 sm:[grid-template-columns:repeat(auto-fill,minmax(300px,1fr))]">
        {data?.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}

        {isLoading &&
          Array.from({ length: 9 }).map((_, i) => <ListingSkeleton key={i} />)}
      </main>
      {error && <TryAgain onRetry={() => refetch()} />}
    </>
  );
}
