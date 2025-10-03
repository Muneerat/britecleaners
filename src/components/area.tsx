import React from 'react'

export default function Area() {
  return (
    <div className=' md:px-10 px-6 bg-[#f0f0f2] pb-5 pt-3 '>
        <div className='flex flex-col md:max-w-xl mx-auto gap-4 md:text-center'>
        <h1 className="mb-2 font-bold text-3xl text-[#6b6b78] ">Areas we cover around Manchester</h1>
        <div className='flex justify-center gap-20'>
            <p className='text-[#2c39b9]  text-lg font-semibold hover:underline hover:text-[#2a92e6]'>Manchester  </p>
              <p className='text-[#2c39b9] text-lg font-semibold hover:underline hover:text-[#2a92e6]'>Bolton</p>
        </div>
        <p className=''>Brite Cleaners covers most locations around Manchester.</p>
        </div>
    </div>
  )
}
