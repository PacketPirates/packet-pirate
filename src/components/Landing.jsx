import React from 'react'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import {Link} from "react-router-dom"
import pirate from '../assets/pirate.png'

const Landing = () => {
  return (
    <div name="Welcome" className="h-screen w-full bg-gradient-to-b from-sky-500 to-blue-900 ">
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white mt-28 '>
                    Welcome aboard to the Packet Pirate!
                </h2>
                <p className="text-white py-4 max-w-md">
                    Chart a course to your next WiFi Network evaluation!
                </p>
            </div>
            <div>
            <img alt="my profile" className='rounded-2xl mx-auto sm:w-auto w-2/3 fill-white' size={500} src={pirate} />

            </div>
        </div>
    </div>
    
  )
}

export default Landing