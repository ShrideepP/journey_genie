import { 
  columns, 
  Destination 
} from "@/components/dashboard/table/columns";
import { Separator } from "@/components/ui/separator";
import { API_REQUESTS } from "@/lib/requests";
import DataTable from "@/components/dashboard/table";

const fetchFeaturedDestinations = async () => {
  const response = await fetch(API_REQUESTS.featuredDestinations, {
    cache: "no-store",
  });
  if(!response.ok) throw new Error('Oops! something went wrong.');
  return await response.json();
};

const fetchMoreDestinations = async () => {
  const response = await fetch(API_REQUESTS.moreDestinations, {
    cache: "no-store",
  });
  if(!response.ok) throw new Error('Oops! something went wrong.');
  return await response.json();
};

export default async function ManageDestination() {
  const [
    destinations, 
    moreDestinations
  ] = await Promise.all([
    fetchFeaturedDestinations(), 
    fetchMoreDestinations()
  ]);

  return (
    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-8 lg:py-6 xl:px-10 xl:py-8">
      <div className="mb-6 lg:mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">
          Manage Destinations
        </h2>
        <Separator />
      </div>
      <DataTable columns={columns} data={destinations.concat(moreDestinations)} />
    </section>
  );
};
