import React from 'react'

import Typography from "../Typography";
/* LAVET AF JAKOB */


function SearchAgent() {
  return (
    <div>
    <div className='AgentHeader pb-4'>
        <Typography variant={'heading'}>Mine Søgeagenter</Typography>
        <Typography className='leading-1' variant={'caption'} >Søgeagenter er din måde for at modtage notificationer når bestemte produkter kommer på tilbud.</Typography>
    </div>
    <div className='AgentCard'>
      <div className='AgentSpec gap-4'>
      <Typography variant={'subHeading'}>Kylling</Typography>
      <div><Typography variant={'body'}>Økologisk</Typography></div>
      </div>
            <button className='AgentEditor'><img src="../AgentDots.svg" alt="" /></button>
    </div>
    <div className='AgentCard'>
      <div className='AgentSpec gap-4'>
        <div>
        <Typography variant={'subHeading'}>Rugbrød</Typography>
        </div>
        <Typography variant={'body'}>Skovmandens Solsikke rugbrød</Typography>
      </div>

            <button className='AgentEditor'><img src="../AgentDots.svg" alt="" /></button>
    </div>
    <Typography variant={'subHeading'}>
    <button className='AgentButton'>
        Tilføj ny agent <span className='AgentArrow'></span>
    </button> 
</Typography>
    
    </div>
  )
}

export default SearchAgent