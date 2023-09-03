import Filters from "@/components/lobby/filters";
import FilterResult from "@/components/lobby/filter-result";
import Carousel from "@/components/lobby/carousel";
import FeaturedDestination from "@/components/lobby/featured-destination";
import Destination from "@/components/lobby/destination";

import { API_REQUESTS } from "@/lib/requests";

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

export default async function Home() {
  const [
    destinations, 
    moreDestinations
  ] = await Promise.all([
    fetchFeaturedDestinations(), 
    fetchMoreDestinations()
  ]);

  return (
    <>
    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20">
      <div className="w-full h-fit grid md:grid-cols-2 gap-y-6">
        <div className="space-y-4">
          <h1 className="flex flex-col gap-2">
            <span className="text-3xl md:text-4xl font-light">
              Discover Your
            </span>
            <span className="text-4xl md:text-6xl font-bold">
              Perfect Adventure
            </span>
          </h1>
          <p className="text-sm md:text-base text-muted-foreground font-normal">
            Explore handpicked destinations tailored to your desires - from tropical getaways to thrilling adventures. Your dream journey begins with a simple choice.
          </p>
          <Filters />
        </div>
        <FilterResult />
      </div>
    </section>

    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20">
      <div className="w-full h-fit space-y-6 lg:space-y-8">
        <h2 className="text-3xl md:text-4xl">
          <span className="font-bold">
            Featured
          </span>
          <span className="mx-[.15rem]" />
          <span className="font-light">
            Destinations
          </span>
        </h2>
        <Carousel>
          {destinations.map((destination: Destination) => (
            <FeaturedDestination 
              key={destination._id} 
              destination={destination} 
            />
          ))}
        </Carousel>
      </div>
    </section>

    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20">
      <div className="w-full h-fit space-y-6 lg:space-y-8">
        <h2 className="text-3xl md:text-4xl">
          <span className="font-light">
            Explore
          </span>
          <span className="mx-[.15rem]" />
          <span className="font-bold">
            More
          </span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {moreDestinations?.map((destination: Destination) => (
            <Destination 
              key={destination._id} 
              destination={destination}
            />
          ))}
        </div>
      </div>
    </section>
    </>
  );
};
