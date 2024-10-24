import React from 'react'

function Preference() {
  return (
    <div>
    <div className='PrefHeader'>
        <h3>Præferencer</h3>
        <p>Hjælp os med at tilpasse dine resultater til dine præferencer.</p>
        <p className='OBS'>OBS: Dette vil betyde at vi kan finde færre mulige datovarer</p>
    </div>
    <div>
        <div className='PrefSwitch'>
            <h4>Økologi</h4>
            <p>Når denne er aktiv vil vi kun lede efter økologiske produkter.</p>
        </div>
        <div className='PrefSwitch'>
            <h4>Dyrevelfærd</h4>
            <p>Når denne er aktiv vil vi kun lede efter produkter der tager højde for dyrevelfærd.</p>

        </div>
        <div className='PrefSwitch'>
            <h4>Lactose intolerant</h4>
            <p>Når denne er aktiv viser vi dig ikke produkter med laktose.</p>
        </div>
    </div>
    </div>
  )
}

export default Preference