/* Lavet af Jakob */
import React from 'react'
import Preference from '../components/Profile/Preference'
import { Input } from "../components/Input"
import { SearchIcon } from "lucide-react";
import ProfileFront from '../components/Profile/ProfileFront'
import SearchAgent from '../components/Profile/SearchAgent'
import Radius from '../components/Profile/Radius';



function ProfilePage() {
  return (
    <div className='ProfilePage'>
      
      <Input className="pl-8 w-11/12" placeholder="Søg..." />
      <SearchIcon className="absolute top-12 left-8 pointer-events-none text-primary " />
      <ProfileFront />
      <Radius />
      <Preference />
      <SearchAgent />
    </div>
  )
}

export default ProfilePage;