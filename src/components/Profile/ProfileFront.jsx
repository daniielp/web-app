import React from 'react'
import Typography from "../Typography";
import { ChevronRight } from 'lucide-react';

/* LAVET Af Jakob */

function ProfileFront() {
  return (
    <div className='FrontContainer gap-4 py-4'>
        <img src="/ProfilePic.svg" alt="Profile Picture" />
        <div className='NameDescrip'>
        <Typography variant={'heading'} >Rikke Johansen</Typography>
        <Typography className='leading-1' variant={'caption'} >Ret adgangskode, sikkerhed, personlige oplysninger</Typography>
            
        </div>
        <ChevronRight className='w-24 h-20 text-primary ' />
    </div>
  )
}

export default ProfileFront