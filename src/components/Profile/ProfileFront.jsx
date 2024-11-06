import React from 'react'
import Typography from "../Typography";

/* LAVET Af Jakob */

function ProfileFront() {
  return (
    <div className='FrontContainer gap-4 py-4'>
        <img src="/ProfilePic.svg" alt="Profile Picture" />
        <div className='NameDescrip'>
        <Typography variant={'heading'} >Rikke Johansen</Typography>
        <Typography className='leading-1' variant={'caption'} >Ret adgangskode, sikkerhed, personlige oplysninger</Typography>
            
        </div>
        <img className='FrontArrow' src="/Chevron-right.svg" alt="Profile Picture" />
    </div>
  )
}

export default ProfileFront