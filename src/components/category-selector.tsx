"use client";

import { useState } from "react";
import { Category } from "../../sanity.types";
import { useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
 

interface CategorySelectorProps {
    categories: Category[];
}

export function CategorySelectorComponent({
    categories,
}: CategorySelectorProps) {
     const [open, setOpen] = useState(false);
     const [value, setValue] = useState<string>("");
     const router = useRouter();

     return (
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-full max-w-full relative flex justify-center sm:justify-start sm:flex-none items-center space-x-2 bg-blue-500 hover:bg-blue-700 hover:text-white text-white font-bold py-2 px-4 rounded"
            >
              {value
                ? categories.find((Category) => Category._id === value)?.name
                : "Filter by the Category"}
              <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-full p-0">
            <Command>
              <CommandInput placeholder="Search category..." className="h-9"
              onKeyDown={(e) =>{
                if (e.key === "Enter"){
                    const selectedCategory = categories.find((c) =>
                        c.name?.toLowerCase()
                        .includes(e.currentTarget.value.toLowerCase())
                    );
                    if (selectedCategory?.slug?.current){
                        setValue(selectedCategory._id);
                        router.push(`/categories/${selectedCategory.slug.current}`);
                        setOpen(false);
                    }
                }
              }}
              />
              <CommandList>
                <CommandEmpty>No Category found.</CommandEmpty>
                <CommandGroup>
                  {categories.map((Category) => (
                    <CommandItem
                      key={Category._id}
                      value={Category.name}
                      onSelect={() => {
                        setValue(value === Category._id ? "" : Category._id);
                        router.push(`/categories/${Category.slug?.current}`);
                        setOpen(false);
                      }}
                    >
                      {Category.name}
                      <Check
                        className={cn(
                          "ml-auto h-4 w-4",
                          value === Category._id ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      )
    }


