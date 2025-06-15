import z from "zod";

export const ListingSchema = z.object({
  id: z.string(),
  createdAt: z.string(),
  title: z.string(),
  price: z.string(),
  location: z.string(),
  description: z.string(),
  image: z.string(),
});

export const ListingsSchema = z.array(ListingSchema);
