"use client";
import { useGetListings } from "./features/listings/hooks/use-get-listings";
import { ListingCard } from "./features/listings/components/listing-card";
export default function Home() {
  const { data, isLoading, error, refetch } = useGetListings();

  return (
    <main className="bg-[#FAFAFA] px-6 py-20">
      <>
        {isLoading && <p>Loading listings...</p>}
        {error && (
          <div>
            <p>Could not load listings. Please try again.</p>
            <button onClick={() => refetch()}>Retry</button>
          </div>
        )}
      </>
      <div className="mx-auto grid max-w-7xl [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-8">
        {data?.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </main>
  );
}
