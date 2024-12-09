import axios from 'axios';
import React, { useEffect, useState } from 'react'


const AboutUs = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    axios({
      url: 'http://localhost:4002/about',
      method: 'GET',
    }).then((res) => {
      setData(res.data);
    })
  }



  return (
    <>

      <div className='grid grid-cols-1 gap-4 p-4 md:grid-cols-4'>
        {
          data.map((d, k) => (
            <>
              <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-white">
                <p>
                  <img class="rounded-t-lg" src={d.image} alt="" />
                </p>
                <div class="p-5">
                  <p >
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{d.title}</h5>
                  </p>
                  <p class="mb-3 font-normal text-white dark:text-white">{d.Name}</p>
                  <p class="mb-3 font-normal text-white dark:text-white">{d.Information}</p>
                  <div className=' inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-[20px] group bg-gradient-to-br from-pink-500 to-orange-400 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800'>
                    <button className=' px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-[20px] group-hover:bg-opacity-0'>Explore Now &#8594;</button>
                  </div>
                </div>
              </div>
            </>
          ))
        }
      </div>

    </>
  )
}

export default AboutUs
