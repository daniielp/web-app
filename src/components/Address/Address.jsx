import React from "react";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../Drawer";
import AddressInput from "./AddressInput";
import AddressLocation from "./AddressLocation";
import { Slider } from "../Slider";
import Typography from "../Typography";
import { useAddress } from "../../stores/useAddress";

/* LAVET AF JAKOB */

function Address() {
  const { currentAddress, setRadius, radius } = useAddress();

  return (
    <Drawer>
      <DrawerTrigger className="flex flex-row gap-1 p-2 text-teal-950 mt-1 z-10">
        <img src="/navigation.svg" alt="Navigation icon" className="w-4 h-4" />
      <Typography variant={"body"}>
        {currentAddress.tekst ?? "Nuværende lokation"}
      </Typography>  
      <img src="/chevron-down.svg" alt="click me" className="w-4 h-4" />
      <img src="/bell-dot.svg" alt="Notification icon" className="w-6 h-6 absolute top-2 right-6" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Lokation</DrawerTitle>
        </DrawerHeader>
        <div className="DrawerComp">
          <div>
            <AddressLocation />
            <div className="Drawerdivider">
              <span>Eller</span>
            </div>
            <AddressInput />
            <div>
              <Typography className="me-5 text-center" variant={"subHeading"}>
                Radius <Typography>({radius} km)</Typography>
              </Typography>
              <Slider
                value={[radius]}
                step={5}
                min={1}
                max={30}
                onValueChange={(e) => setRadius(e[0])}
                className="gap-4 py-10 mb-8 w-11/12"
              />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default Address;
