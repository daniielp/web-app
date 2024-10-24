import React from 'react'

function ProfileFront() {
  return (
    <div>
        <img src="/ProfilePic.svg" alt="Profile Picture" />
        <div className='NameDescrip'>
            <h3>Daniel Pedersen</h3>
            <p>Ret adgangskode, sikkerhed, personlige oplysninger</p>
        </div>
        <span className='ProfileArrow'></span>
    </div>
  )
}

export default ProfileFront