import React from 'react'
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "../Drawer"
import AddressInput from './AddressInput'
import AddressLocation from './AddressLocation'

function Address() {
  return (
    <Drawer>
        <DrawerTrigger>
            <button>HEjsa</button>
        </DrawerTrigger>
        <DrawerContent>
            <DrawerHeader>
                <DrawerTitle>
                    Lokation
                </DrawerTitle>
            </DrawerHeader>
            <div>
                <AddressLocation />
                <AddressInput />
            </div>
        </DrawerContent>
    </Drawer>
  )
}

export default Address