import Filters from "@/components/lobby/filters";
import SearchResult from "@/components/lobby/search-result";
import Featured from "@/components/lobby/featured";

export default function Home() {
  return (
    <>
    <header className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20 xl:py-14 grid md:grid-cols-2">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <span className="text-4xl font-extralight">Discover Your</span>
          <span className="text-4xl md:text-6xl font-bold">Perfect Adventure</span>
        </div>
        <p className="text-base md:text-lg text-muted-foreground font-light">Explore handpicked destinations tailored to your desires - from tropical getaways to thrilling adventures. Your dream journey begins with a simple choice.</p>
        <Filters />
      </div>
      <SearchResult />
    </header>
    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20 xl:py-14">
      <div className="w-full h-fit space-y-6 xl:space-y-8">
        <h2 className="text-4xl font-bold">
          Featured <span className="font-extralight">Destinations</span> 
        </h2>
        <Featured />
      </div>
    </section>
    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-16 lg:py-12 xl:px-20 xl:py-14">
      <div className="w-full h-fit space-y-6 xl:space-y-8">
        <h2 className="text-4xl font-bold">
          <span className="font-extralight">Popular</span> Destinations
        </h2>
        <Featured />
      </div>
    </section>
    </>
  );
};
