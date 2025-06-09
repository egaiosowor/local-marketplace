"use client";
import { useGetListings } from "./features/listings/hooks/use-get-listings";
import { ListingCard } from "./features/listings/components/listing-card";
export default function Home() {
  const { data, isLoading, error, refetch } = useGetListings();

  {
    isLoading && <p>Loading listings...</p>;
  }
  {
    error && (
      <div>
        <p>Could not load listings. Please try again.</p>
        <button onClick={() => refetch()}>Retry</button>
      </div>
    );
  }

  return (
    <main className="py-20 px-6 bg-[#FAFAFA]">
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-8 max-w-7xl mx-auto ">
        {data?.map((listing) => (
          <ListingCard key={listing.id} listing={listing} />
        ))}
      </div>
    </main>
  );
}
