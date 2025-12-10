import React from 'react'

const  Footer= () => {
  return (
    <div className='mx-auto text-white font-extralight md:flex py-4 justify-center md:grid-cols-3  h-full flex-row text-center md:text-left bg-black w-full'>
      <div className='flex flex-col justify-center'>
        <p className='text-[#F4D35E]'>© 2025 By Cisty Studios</p>
       </div>
       <div className='md:mx-[200px]' >
        <h1 className='pb-4 font-bold md:text-xl'>Phone Number</h1>
        <p>08038163489</p>
        <p>08082042447</p>

       </div>
       <div className='md:w-[300px]'>
        <h1 className='pb-4 font-bold md:text-xl'>Address</h1>
        <p>Otumbadi plaza , Beside Ten Naira junction , IMSU front Gate , Owerri imo state .</p>
       </div>


    </div>
  )
}

export default Footer