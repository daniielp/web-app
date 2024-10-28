import React from 'react'
import {Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger} from "../Drawer"
import AddressInput from './AddressInput'
import AddressLocation from './AddressLocation'
import { Slider } from '../Slider'
import Typography from "../Typography"

/* LAVET AF JAKOB */

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
                    <AddressInput/>
                <div>
                <Typography className='me-5 text-center' variant={'subHeading'}>Radius <Typography>(15 km)</Typography></Typography>
                <Slider className='gap-4 py-10 mb-8 w-11/12'/>
                </div>
            </div>
            </div>
        </DrawerContent>
    </Drawer>
  )
}

export default Address