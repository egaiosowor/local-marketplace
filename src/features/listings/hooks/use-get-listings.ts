import { useQuery } from "@tanstack/react-query";
import { listingServices } from "@/features/listings/services/listing-services";
import { ListingsSchema } from "@/features/listings/listing.validation";

export function useGetListings() {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["listings"],
    queryFn: async () => {
      const data = await listingServices.getListings();
      return ListingsSchema.parse(data);
    },
  });

  return { data, isLoading, error, refetch };
}
