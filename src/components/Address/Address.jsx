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
      <DrawerTrigger>
        <button>{currentAddress.tekst ?? "Nuværende lokation"}</button>
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
