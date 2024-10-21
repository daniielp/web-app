import React from "react";
import { Input } from "../Input";
import { SearchIcon } from "lucide-react";

function AddressInput() {
  return (
    <div className="flex-1 relative">
      <SearchIcon className="absolute top-2 left-2 pointer-events-none text-primary" />
      <Input className="pl-8" placeholder="Søg efter din adresse ..." />
    </div>
  );
}

export default AddressInput;
