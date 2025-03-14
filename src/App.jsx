import { IoLocationSharp, IoMoon } from 'react-icons/io5'
import './App.css'
import { FaLaptopCode, FaLink, FaRegLightbulb, FaTwitter } from 'react-icons/fa'
import { MdBookmarks } from 'react-icons/md'
import { PiBuildingsFill } from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import { useState } from 'react'
import { LuSunDim } from 'react-icons/lu'

function App() {
  

  const [color, setColor] = useState(false);

  const handle1 = () => {
    setColor(!color);
  };


  return (
    <>
      <div className={`${color ? "bg-[#141D2F] text-blue-800" : "bg-[#F6F8FF] text-[#4b6a9b]"} lg:h-screen h-full  w-full `}>
        <div className={`h-[25vh] lg:w-[50%] lg:mx-auto mx-5 `}>
          <div className='flex items-center justify-between py-8 '>
            <p className={`${color ? "text-white" : "text-[#4b6a9b]"} text-3xl font-bold `}>DevDetective</p>
            <p className="font-mono flex gap-x-3 cursor-pointer" onClick={handle1}>
            {color ? "Light" : "Dark"}
            {color ? <LuSunDim className="mt-1" /> : <IoMoon className="mt-1" />}
          </p>
          </div>
          <div className='relative '>
          <CiSearch className='absolute text-blue-600  text-2xl top-6 lg:ml-5 ' />
          <input type='search' className={`${color ? "bg-[#1E2A47]  placeholder:text-white" : " bg-white   placeholder:text-[#4B6A9B]"} lg:px-14 px-6 py-6 rounded-2xl w-full  outline-none lg:text-xl text-sm `} name='search' placeholder='Enter a GitHub username...'/>
          <button className='bg-blue-500 px-6 absolute right-2 top-3.5  text-white rounded-lg py-3 font-semibold'>Search</button>
          </div>
        </div>
        <div className={`lg:h-[70vh] lg:w-[50%] ${color ? "bg-[#1E2A47] text-white" : "bg-white text-[#4b6a9b]"} lg:mx-auto mx-5 my-4 flex lg:flex-row flex-col`}>
          <div className='w-[30%] h-full '>
              <img className='rounded-full lg:h-[35%] lg:mx-auto  ml-24 my-5' src='https://avatars.githubusercontent.com/u/137944649?v=4'/>
          </div>
          <div className={`lg:w-[70%] h-full`}>
            <div className='flex lg:flex-row flex-col items-center justify-between lg:mx-5  mx-2  lg:mt-10 '>
              <p className={`lg:text-3xl text-4xl font-bold ${color ? "text-white" : "text-black"}`}>Amit Kumar</p>
              <p className='lg:text-lg text-md lg:pr-5 '>Joined 20 Jan 2023</p>
            </div>
            <a className='text-blue-500 mt-3 lg:mx-5 mx-32 underline'>@amit9956</a>

            <div className='lg:w-[95%] text-md my-4 lg:mx-5 mx-2'>
            <p className='flex gap-x-4 '><FaLaptopCode className='mt-1'/>I write Code</p>
            <p className='flex gap-x-4 '><MdBookmarks className='mt-1 text-green-500'/>Learning, coding, and exploring the digital world</p>
            <p className='flex gap-x-4 '><FaRegLightbulb className='mt-1 text-yellow-300' />Passionate about software development, algorithms, and AI</p>
            </div>
            
            <div className={`h-[18%] w-[80%] lg:mx-auto mx-8 ${color ? "bg-[#141D2F]":"bg-[#F6F8FF]"} lg:my-10 rounded-md flex items-center justify-evenly`}>
                <div className='w-[30%] pl-6'>
                <p className=''>Respo</p>
                <p className='text-2xl font-semibold'>7</p>
                </div>
                <div className='w-[30%]'>
                <p className=''>Followers</p>
                <p className='text-2xl font-semibold'>0</p>
                </div>
                <div className='w-[30%]'>
                <p className=''>Following</p>
                <p className='text-2xl font-semibold'>0</p>
                </div>
              </div>
              <div className='lg:mt-0 mt-5'>
                <div className='flex lg:flex-row flex-col justify-between text-lg '>
                    <p className='lg:pl-28 flex gap-x-3 '><IoLocationSharp className='mt-1' />Lucknow</p>
                    <p className='pr-20 flex gap-x-3 text-gray-400 underline'><FaLink className='mt-1'  />Not Available</p>
                </div>
                <div className='flex lg:flex-row flex-col justify-between text-lg '> 
                    <p className='lg:pl-24 flex gap-x-3 text-gray-400 underline'><FaTwitter className='mt-1 text-xl' />Not Available</p>
                    <p className='pr-20 flex gap-x-3 text-gray-400'><PiBuildingsFill className='mt-1 text-2xl' />Not Available</p>
                </div>
              </div>
            </div>
        </div>
      </div>
     
    </>
  )
}

export default App
