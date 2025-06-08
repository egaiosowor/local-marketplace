"use client";
import { useGetListings } from "./features/listings/hooks/use-get-listings";

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

  return <div>Hello World</div>;
}
