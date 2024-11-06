/* LAVET AF JAKOB */
import React from "react";
import Typography from "../Typography";
import { Slider } from "../Slider";
import { useAddress } from "../../stores/useAddress";

function Radius() {
  const { radius, setRadius } = useAddress();

  return (
    <div>
      <Typography className="gap-4 pb-5" variant={"heading"}>
        Radius - {radius} km
      </Typography>
      <Slider
        value={[radius]}
        min={1}
        max={30}
        step={5}
        onValueChange={(e) => setRadius(e[0])}
        className="pb-8 w-full pr-4"
      />
    </div>
  );
}

export default Radius;
