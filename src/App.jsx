import { IoLocationSharp, IoMoon } from 'react-icons/io5'
import './App.css'
import { FaLaptopCode, FaLink, FaRegLightbulb, FaTwitter } from 'react-icons/fa'
import { MdBookmarks } from 'react-icons/md'
import { PiBuildingsFill } from 'react-icons/pi'
import { CiSearch } from 'react-icons/ci'
import { useEffect, useState } from 'react'
import { LuSunDim } from 'react-icons/lu'
import axios from 'axios'
import moment from 'moment/moment'


function App() {
  

  const [color, setColor] = useState(false);

  const [search, setSearch] = useState("Amit9956");

  const [inputValue, setInputValue] = useState("Amit9956");

  const [data, setData] = useState()


  const fetchApi = async () => {


    try{

      const result = await axios.get(`https://api.github.com/users/${search}`)

      console.log(result)

      setData(result?.data)



    }catch(e){

      console.error(e)

    }

  }

  const handle1 = () => {
    setColor(!color);
  };

  useEffect(() => {

    fetchApi()
    
  }, [search])
  


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
          <input type='search' className={`${color ? "bg-[#1E2A47]  placeholder:text-white" : " bg-white   placeholder:text-[#4B6A9B]"} lg:px-14 px-6 py-6 rounded-2xl w-full  outline-none lg:text-xl text-sm `} name='search' placeholder='Enter a GitHub username...'  onChange={(e) => setInputValue(e.target.value)}/>
          <button className='bg-blue-500 px-6 absolute right-2 top-2.5  text-white rounded-lg py-3 font-semibold' onClick={() => setSearch(inputValue)}>Search</button>
          </div>
        </div>
        <div className={`lg:h-[70vh] lg:w-[50%] ${color ? "bg-[#1E2A47] text-white" : "bg-white text-[#4b6a9b]"} lg:mx-auto mx-5 my-4 flex lg:flex-row flex-col rounded-2xl`}>
          <div className='w-[30%] h-full '>
              <img className='rounded-full lg:h-[35%] lg:mx-auto  ml-28 md:ml-[115%] my-5' src={data?.avatar_url}/>
          </div>
          <div className={`lg:w-[70%] h-full`}>
            <div className='flex lg:flex-row flex-col items-center justify-between lg:mx-5  mx-2  lg:mt-10 '>
              <p className={`lg:text-3xl text-4xl font-bold ${color ? "text-white" : "text-black"}`}>{data?.name}</p>
              <p className='lg:text-lg text-md lg:pr-5 '>{moment(data?.created_at
              ).format("Do MMM YYYY")}</p>
            </div>
            <a href={data?.html_url} className='text-blue-500 mt-3 lg:mx-5  ml-32 underline'>{data?.login}</a>

            <div className='lg:w-[95%] text-md my-4 lg:mx-5 mx-2'>
            <p className='flex gap-x-4 '>{data?.bio}</p>
            
            </div>
            
            <div className={`h-[18%] lg:w-[80%] w-full  lg:mx-auto  ${color ? "bg-[#141D2F]":"bg-[#F6F8FF]"} lg:my-10 rounded-md flex items-center justify-evenly`}>
                <div className='w-[30%] pl-6'>
                <p className=''>Respo</p>
                <p className='text-2xl font-semibold'>{data?.public_repos}</p>
                </div>
                <div className='w-[30%]'>
                <p className=''>Followers</p>
                <p className='text-2xl font-semibold'>{data?.
                  followers}</p>
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
                    <p className='lg:pl-24 flex gap-x-3 text-gray-400 underline'><FaTwitter className='mt-1 text-xl' />{data?.twitter_username || "Noy Available"}</p>
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
