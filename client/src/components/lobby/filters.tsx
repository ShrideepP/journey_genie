import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Filters = () => {
  return (
    <div className="w-full sm:w-fit h-fit p-2 flex flex-col sm:flex-row items-center gap-2 rounded-md bg-muted">
      <Select>
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
      <Select>
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
      <Select>
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
  );
};

export default Filters;
