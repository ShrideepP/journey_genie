import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Dashboard() {
  return (
    <section className="w-full h-[85vh] px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-8 lg:py-6 xl:px-10 xl:py-8 grid place-items-center">
      <div className="w-full md:w-2/4 text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">
          Welcome to the Dashboard!
        </h2>
        <p className="text-sm md:text-base text-muted-foreground font-normal">
          Here, you have the power to manage and curate the perfect travel experiences for your users.
        </p>
        <div>
          <Link href="/dashboard/add">
            <Button>Add Destinations!</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
