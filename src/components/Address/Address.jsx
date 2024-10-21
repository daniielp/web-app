import React from 'react'
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "../Drawer"
import AddressInput from './AddressInput'
import AddressLocation from './AddressLocation'
import Slider from '../Slider'

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
            <div className='DrawerComp'>
                <div>
                    <AddressLocation />
                    <div className='Drawerdivider'>
                    <hr />
                    <p>
                    Eller
                    </p>
                    <hr />
                    <AddressInput />
                </div>
                <div>
                    <h3>Radius</h3>
                <Slider />
                </div>
            </div>
            </div>
        </DrawerContent>
    </Drawer>
  )
}

export default Address