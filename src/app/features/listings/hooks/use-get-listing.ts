import { useQuery } from "@tanstack/react-query";
import { listingServices } from "../services/listing-services";
import { ListingSchema } from "../listing.validation";

export function useGetListingById(id: string) {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: [`listing-${id}`],
    queryFn: async () => {
      const data = await listingServices.getListingById(id);
      return ListingSchema.parse(data);
    },
  });

  return { data, isLoading, error, refetch };
}
