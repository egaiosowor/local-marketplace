import { useQuery } from "@tanstack/react-query";
import { listingServices } from "../services/listing-services";
import { ListingsSchema } from "../listing.validation";

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
