import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { FiTwitter } from "react-icons/fi";
import { IoIosLink } from "react-icons/io";
import { MdOutlineMapsHomeWork } from "react-icons/md";
import './App.css'

function App() {

  return (
    <>
      <div className="lg:w-[32rem] lg:h-[24rem]">
        <p>devrepofinder</p>

        <div className="bg-blue-950 flex flex-row items-center justify-between py-1 px-2 rounded-lg">
          <div className="flex flex-row items-center">
            <IoIosSearch className="h-6 w-6 mr-2" />
            <input className="bg-blue-950 text-white" placeholder="Search Github Username" />
          </div>


          <button className="py-2 bg-sky-500 text-white px-5">Search</button>
        </div>

        <div className="flex flex-row bg-blue-950 text-slate-100 mt-5 rounded-lg py-5 px-10">
          <div className="w-1/5">
            <img src='' className="h-20 w-20 bg-black rounded-full"/>
          </div>
          <div className="w-4/5 ml-10">
            <div className="lg:flex lg:flex-row justify-between">
              <div>
                <p className="text-xl text-start">name</p>
                <p className="text-stone-950">username</p>
              </div>
              <p>Joined Date</p>
            </div>
            <p className="text-start text-wrap mt-2">this the paragraph bio</p>

            <div className="flex flex-row bg-cyan-800 justify-between p-3 rounded-xl text-white my-3">
              <div>
                <p className="text-sm">Repos</p>
                <span className="text-sm">8</span>
              </div>
              <div>
                <p className="text-sm">Followers</p>
                <span className="text-sm">290</span>
              </div>
              <div>
                <p className="text-sm">Following</p>
                <span className="text-sm">800</span>
              </div>
            </div>
            <div className="flex lg:flex-row">
            <div>
              <div  className="flex flex items-center">
                <CiLocationOn className="mr-2" />
                <p>Location</p>
              </div>
              <div  className="flex flex items-center">
                <IoIosLink  className="mr-2"/>
                <p>Link</p>
              </div>

            </div>
            <div className="lg:ml-10">
              <div className="flex flex items-center">
                <FiTwitter className="mr-2" />
               <p>twitter</p>
              </div>

              <div className="flex flex items-center">
               <MdOutlineMapsHomeWork className="mr-2" />
               <p>Location</p>
              </div>

            </div>
          </div>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
