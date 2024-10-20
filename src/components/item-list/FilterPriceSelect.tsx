import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export default function FilterPriceSelect() {
  return (
    <Select>
      <SelectTrigger className="w-48 h-10 rounded-full">
        <SelectValue placeholder="Sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="apple">Price: Low - High</SelectItem>
          <SelectItem value="banana">Price: High - Low</SelectItem>
          <SelectItem value="blueberry">Customer's Top Rated</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
