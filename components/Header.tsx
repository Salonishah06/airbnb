import React from 'react'
import Image from 'next/image'
import { BiSearch } from "react-icons/bi";
import { FiGlobe } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { CgProfile} from "react-icons/cg";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md p-5 md:px-10 ">


      {/* left */}
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3" alt="logo"
          className="object-contain object-left" layout="fill"

        />
      </div>
      {/* Middle -Search */}

      <div className="flex md:border-2 py-2 items-center rounded-full md:shadow-sm ">
        <input className=" flex-grow pl-5 bg-transparent outline-none placeholder-gray-400" type="text" placeholder=" Search The place...." />
        <BiSearch className="hidden md:inline-flex w-8 h-8 bg-red-400 text-white rounded-full mt-1 p-2 cursor-pointer md:mx-2 " />
      </div>

      {/* Right */}

      <div className="flex  space-x-4 items-center justify-end text-gray-500">
        <p className="font-bold hidden md:inline cursor-pointer">Become a Host</p>
        <FiGlobe className="w-8 h-8 cursor-pointer"/>
        <div className="flex w-20 h-16 border-2 rounded-full p-2 items-center space-x-2 ">
        <HiOutlineMenu className="w-8 h-8 cursor-pointer"/>
        <CgProfile className="w-8 h-8 cursor-pointer"/>

        </div>
      </div>
    </header>
  )
}

export default Header