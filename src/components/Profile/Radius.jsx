import React from 'react';
import Typography from "../Typography";
import { Slider } from '../Slider';

function Radius() {
    return (
        <div>
            <Typography className='gap-4 pb-5' variant={'heading'}>Radius</Typography>
            <Slider className='pb-8 w-80'/>
        </div>
    );
}

export default Radius;