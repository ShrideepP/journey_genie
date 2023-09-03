"use client";

import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  setMessage,
  toggleIsLoading,
  setData 
} from "@/toolkit/features/filterResultSlice";
import { 
  useAppSelector, 
  AppDispatch 
} from "@/toolkit/store";
import { Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button";
import { API_REQUESTS } from "@/lib/requests";

const Filters = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { isLoading } = useAppSelector((state) => state.filterResult);

  const [filters, setFilters] = useState({
    temperature: "",
    flightDuration: "",
    journeyType: "",
  });

  const {
    temperature,
    flightDuration,
    journeyType
  } = filters;

  const fetchFilteredDestination = async () => {
    dispatch(toggleIsLoading(true));
    try {
      const response = await fetch(API_REQUESTS.filterDestinations(temperature, flightDuration, journeyType), {
        cache: "no-store"
      });
      const data = await response.json();
      if(response.status === 404 && data.message === "No matching destinations found") {
        dispatch(setMessage(data.message));
        return;
      };
      dispatch(setData(data));
      console.log(data);
    } catch (error) {
      throw new Error("Oops! something went wrong.");
    } finally {
      dispatch(toggleIsLoading(false));
    };
  };
  
  return (
    <>
    <div className="w-full sm:w-fit h-fit p-2 flex flex-col sm:flex-row items-center gap-2 rounded-md bg-muted">
      <Select onValueChange={(value) => setFilters({ ...filters, temperature: value })}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Temperature" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Temperature</SelectLabel>
            <SelectItem value="hot">Hot</SelectItem>
            <SelectItem value="warm">Warm</SelectItem>
            <SelectItem value="temperate">Temperate</SelectItem>
            <SelectItem value="cool">Cool</SelectItem>
            <SelectItem value="cold">Cold</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>

      <Select onValueChange={(value) => setFilters({ ...filters, flightDuration: value })}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Flight Duration" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Flight Duration</SelectLabel>
            <SelectItem value="short-haul">Short Haul</SelectItem>
            <SelectItem value="medium-haul">Medium Haul</SelectItem>
            <SelectItem value="long-haul">Long Haul</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      
      <Select onValueChange={(value) => setFilters({ ...filters, journeyType: value })}>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Journey Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Journey Type</SelectLabel>
            <SelectItem value="adventurous">Adventurous</SelectItem>
            <SelectItem value="relaxing">Relaxing</SelectItem>
            <SelectItem value="cultural">Cultural</SelectItem>
            <SelectItem value="nature-exploration">Nature Exploration</SelectItem>
            <SelectItem value="romantic">Romantic</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>

    <Button 
      onClick={fetchFilteredDestination}
      disabled={(!temperature || !flightDuration || !journeyType) ? true : false}
      size="lg"
    >
      {isLoading && <Loader2 className="w-5 h-5 mr-2 animate-spin" />}
      {isLoading ? "Loading" : "Find Your Adventure"}
    </Button>
    </>
  );
};

export default Filters;
