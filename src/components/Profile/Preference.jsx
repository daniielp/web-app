import React from 'react'
import Typography from "../Typography"
import { Switch }  from '../Switch';

/* LAVET AF JAKOB */


function Preference() {
  return (
    <div>
    <div className='PrefHeader'>
    <Typography variant={'heading'} >Præferencer</Typography>
    <Typography variant={'body'} >Hjælp os med at tilpasse dine resultater til dine præferencer.</Typography>
        <p> <span className='OBS'>OBS:</span> Dette vil betyde at vi kan finde færre mulige datovarer</p>
    </div>
    <div>
        <div className='PrefSwitch gap-4'>
            <div>
            <Typography variant={'subHeading'} >Økologi</Typography>
            <Typography variant={'caption'} >Når denne er aktiv vil vi kun lede efter økologiske produkter.</Typography>
            </div>
            <Switch />
        </div>
        <div className='PrefSwitch'>
            <div>
            <Typography variant={'subHeading'} >Dyrevelfærd</Typography>
            <Typography variant={'caption'} >Når denne er aktiv vil vi kun lede efter produkter der tager højde for dyrevelfærd.</Typography>
            </div>  
            <Switch />
        </div>
        <div className='PrefSwitch'>
            <div>
            <Typography variant={'subHeading'} >Lactose Introlerant</Typography>
        <Typography variant={'caption'} >Når denne er aktiv viser vi dig ikke produkter med laktose.</Typography>
            </div>
        <Switch />
        </div>
    </div>
    </div>
  )
}

export default Preference