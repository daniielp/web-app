import React from 'react'
import Preference from '../components/Profile/Preference'
import { Input } from "../components/Input"
import ProfileFront from '../components/Profile/ProfileFront';

function ProfilePage() {
  return (
    <div>
      <ProfileFront />
      <Input className="pl-8" placeholder="Søg..." />
      <Preference />
    </div>
  )
}

export default ProfilePage