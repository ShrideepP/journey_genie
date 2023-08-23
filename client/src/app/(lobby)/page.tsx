import Filters from "@/components/lobby/filters";
import Carousel from "@/components/lobby/carousel";
import FeaturedDestination from "@/components/lobby/featured-destination";
import { Button } from "@/components/ui/button";

import { 
  fetchFeaturedDestinations,
  fetchMoreDestinations 
} from "@/lib/GET";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Destination {
  _id: string;
  name: string;
  description: string;
  image: {
    _id: string;
    URL: string;
  };
  temperature: string;
  flightDuration: string;
  journeyType: string;
};

export default async function Home() {
  const featuredData = await fetchFeaturedDestinations();

  return (
    <>
    
    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20">
      <div className="w-full h-fit grid md:grid-cols-2">
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
          <Button size="lg">
            Find Your Adventure
          </Button>
        </div>
      </div>
    </section>

    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20">
      <div className="w-full h-fit space-y-4 md:space-y-6 lg:space-y-8">
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
          <Suspense fallback={<Skeleton className="w-60 h-80 rounded-lg" />}>
            {featuredData?.map((destination: Destination) => (
              <FeaturedDestination 
                key={destination._id} 
                destination={destination} 
              />
            ))}
          </Suspense>
        </Carousel>
      </div>
    </section>

    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20">
      <div className="w-full h-fit space-y-4 md:space-y-6 lg:space-y-8">
        <h2 className="text-3xl md:text-4xl">
          <span className="font-light">
            Explore
          </span>
          <span className="mx-[.15rem]" />
          <span className="font-bold">
            More
          </span>
        </h2>
      </div>
    </section>

    </>
  );
};
