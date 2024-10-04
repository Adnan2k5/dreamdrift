import React from 'react'
import address from '../assets/address.png'
import phone from '../assets/phone.png'

export const Footer = () => {
  return (
    <div className=" mt-16 flex gap-5 flex-col  items-center justify-center h-[30vh]">
        <p className="text-center flex text-white md:text-lg">&copy; Dream Drift Services</p>
        <div className="address flex flex-col gap-4">
          <p className='flex gap-2'>
            <p className="text-white text-sm text-center md:text-lg">Taj Deccan, Banjara Hills Main Rd, Balapur Basthi, Hyderabad, Telangana 500034</p>
          </p>
          <p className='flex items-center justify-center gap-2'>
            <img src={phone} alt="phone" width={20} height={20}/>
            <p className="text-white">0651 040 6652 3939</p>
          </p>
        </div>
        
    </div>
  )
}
