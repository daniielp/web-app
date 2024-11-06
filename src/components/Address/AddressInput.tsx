// Made by: Daniel
import React, { useEffect, useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "../Command";
import { Popover, PopoverContent, PopoverTrigger } from "../Popover";
import { cn } from "../../lib/utils";
import { getAddresses } from "../../lib/api/dawa";
import type { DawaResponse } from "../../lib/types";
import { useAddress } from "../../stores/useAddress";

/* LAVET AF JAKOB */

function AddressInput() {
  const [open, setOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [adresses, setAdresses] = useState<DawaResponse>([]);
  const { setCurrentAddress, currentAddress } = useAddress();

  useEffect(() => {
    (async function () {
      const res = await getAddresses(searchValue);
      setAdresses(res);
    })();
  }, [searchValue]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          aria-expanded={open}
          className="flex h-10 w-full justify-between rounded-3xl border-2 border-input bg-white text-xs text-primary-dark placeholder:text-primary-dark px-3 py-2 ring-primary focus:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {searchValue
            ? currentAddress.tekst ?? "Nuværende lokation"
            : "Søg efter din adresse ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-80 min-w-full p-0">
        <Command>
          <CommandInput
            onValueChange={(e) => setSearchValue(e)}
            placeholder="Søg efter din adresse ..."
          />
          <CommandList>
            <CommandEmpty>Ingen adresser fundet</CommandEmpty>
            <CommandGroup>
              {adresses.map((address) => (
                <CommandItem
                  key={address.tekst}
                  value={address.tekst}
                  onSelect={(currentValue) => {
                    setCurrentAddress(address);
                    setSearchValue(currentValue);
                    setOpen(false);
                    console.log(adresses);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      searchValue === address.tekst
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                  {address.tekst}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
    // <div className="flex-1 relative AddInput">
    //   <SearchIcon className="absolute top-2 left-2 pointer-events-none text-primary" />
    //   <Input className="pl-8" placeholder="Søg efter din adresse ..." />
    // </div>
  );
}

export default AddressInput;
