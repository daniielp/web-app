import React from 'react'
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "../Drawer"
import AddressInput from './AddressInput'
import AddressLocation from './AddressLocation'
import Slider from '../Slider'

function Address() {
  return (
    <Drawer>
        <DrawerTrigger>
            <button>MyAdress</button>
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
                            
                            <span>
                            Eller
                            </span>
                            
                        </div>
                    <AddressInput />
                <div>
                <Slider />
                </div>
            </div>
            </div>
        </DrawerContent>
    </Drawer>
  )
}

export default Address