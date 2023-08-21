import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

const Filters = () => {
  return (
    <>
    <div className='w-full sm:w-fit h-fit p-2 flex flex-col sm:flex-row gap-2 rounded-md bg-muted'>
      <Select>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Temperature" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Temperature</SelectLabel>
            <SelectItem value="apple">Hot</SelectItem>
            <SelectItem value="banana">Warm</SelectItem>
            <SelectItem value="blueberry">Temperate</SelectItem>
            <SelectItem value="grapes">Cool</SelectItem>
            <SelectItem value="pineapple">Cold</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Flight Time" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Flight Time</SelectLabel>
            <SelectItem value="apple">Short Haul</SelectItem>
            <SelectItem value="banana">Medium Haul</SelectItem>
            <SelectItem value="blueberry">Long Haul</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-full sm:w-[180px]">
          <SelectValue placeholder="Journey Type" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Journey Type</SelectLabel>
            <SelectItem value="apple">Adventurous</SelectItem>
            <SelectItem value="banana">Relaxing</SelectItem>
            <SelectItem value="blueberry">Cultural</SelectItem>
            <SelectItem value="grapes">Nature Exploration</SelectItem>
            <SelectItem value="pineapple">Romantic</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <Button size="lg" className="sm:w-fit">
      Find Your Adventure
    </Button>
    </>
  );
};

export default Filters;