import { Listings } from "./features/listings/components/listings";
import { FilterTab } from "./components/filter-tab";
export default function Home() {
  return (
    <>
      <FilterTab />
      <Listings />
    </>
  );
}
