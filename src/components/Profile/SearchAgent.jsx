import React from 'react'

function SearchAgent() {
  return (
    <div>
    <div className='AgentHeader'>
        <h3>Mine Søgeagenter</h3>
        <p>Søgeagenter er din måde for at modtage notificationer når bestemte produkter kommer på tilbud.</p>
    </div>
    <button className='AgentButton'>Tilføj ny agent <span className='AgentArrow'></span>
    </button>
    </div>
  )
}

export default SearchAgent