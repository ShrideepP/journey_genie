"use client";

import { useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useToast } from "@/components/ui/use-toast";

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
  RadioGroup, 
  RadioGroupItem 
} from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

import { API_REQUESTS } from "@/lib/requests";
import { Icons } from "@/components/icons";

interface FormData {
  name: string;
  description: string;
  image: File | null;
  temperature: string | null;
  flightDuration: string | null;
  journeyType: string | null;
  category: string;
};

const initialState = {
  name: '',
  description: '',
  image: null,
  temperature: null,
  flightDuration: null,
  journeyType: null,
  category: 'normal',
};

export default function AddDestination() {
  const [data, setData] = useState<FormData>(initialState);
  const [loading, setLoading] = useState(false);

  const { data: session } = useSession();
  const { refresh, push } = useRouter();
  const { toast } = useToast();

  function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
    if(event.target.files) {
      setData({ ...data, image: event.target.files[0] });
    };
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const {
      name,
      description,
      image,
      temperature,
      flightDuration,
      journeyType,
      category,
    } = data;

    if(!image) return toast({
      title: "Please select an Image!!!",
    });

    if(!temperature || !flightDuration || !journeyType) return toast({
      title: "Make sure you have selected all the select boxes!",
    });

    const formData = new FormData();
    formData.append('name', name);
    formData.append('description', description);
    formData.append('image', image);
    formData.append('temperature', temperature);
    formData.append('flightDuration', flightDuration);
    formData.append('journeyType', journeyType);
    formData.append('category', category);
    setLoading(true);

    try {
      const response = await fetch(API_REQUESTS.createDestination, {
        method: 'POST',
        body: formData,
        headers: {
          'Authorization': `Bearer ${session?.user.token}`,
        },
      });
      const data = await response.json();
      if(response.ok && data) {
        toast({
          title: `${data.name} added successfully!`,
        });
        refresh();
        push('/dashboard/manage');
      };
    } catch (error) {
      toast({
        title: 'Oops! something went wrong.',
        description: 'Please try again later or contact the website owner.'
      });
      console.log(error);
    } finally {
      setLoading(false);
    };
  };

  return (
    <section className="w-full h-fit px-4 py-6 sm:px-8 sm:py-8 md:px-12 md:py-10 lg:px-8 lg:py-6 xl:px-10 xl:py-8">
      <div className="mb-6 lg:mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">
          Add Destination
        </h2>
        <Separator />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="name" className="text-sm">
              Destination Name
            </Label>
            <Input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Enter the destination name"
              onChange={(event) => setData({ ...data, name: event.target.value })} 
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="picture" className="text-sm">
              Picture
            </Label>
            <Input 
              id="picture" 
              type="file"
              name="image" 
              required
              onChange={handleFileChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <Label htmlFor="description" className="text-sm">
            Description
          </Label>
          <Textarea  
            id="description"
            name="description"
            required
            placeholder="Provide a brief description of the destination..."
            minLength={80}
            onChange={(event) => setData({ ...data, description: event.target.value })}
          />
        </div>
        
        <div className="grid md:grid-cols-3 gap-4">
          <Select name="temperature" onValueChange={(value) => setData({ ...data, temperature: value })}>
            <SelectTrigger>
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

          <Select name="flightDuration" onValueChange={(value) => setData({ ...data, flightDuration: value })}>
            <SelectTrigger>
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

          <Select name="journeyType" onValueChange={(value) => setData({ ...data, journeyType: value })}>
            <SelectTrigger>
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

        <div className="py-2 flex flex-col md:flex-row gap-x-4 gap-y-2">
          <Label htmlFor="category" className="text-sm">
            Add destination to featured section?
          </Label>
          <RadioGroup 
            id="category" 
            name="category" 
            defaultValue="normal"
            onValueChange={(value) => setData({ ...data, category: value })}
            className="flex items-center gap-x-4"
          >
            <div className="flex items-center gap-x-2">
              <RadioGroupItem value="featured" id="yes" />
              <Label htmlFor="yes" className="text-sm">Yes!!!</Label>
            </div>
            <div className="flex items-center gap-x-2">
              <RadioGroupItem value="normal" id="no" />
              <Label htmlFor="no" className="text-sm">No!!!</Label>
            </div>
          </RadioGroup>
        </div>
        
        <div>
          <Button disabled={loading}>
            {loading && <Icons.loader className="w-5 h-5 mr-2 animate-spin" />}
            {loading ? "Please wait" : "Add Destination"}
          </Button>
        </div>
      </form>
    </section>
  );
};
