import React from 'react'

const Topnav = () => {
  return (
    <div className='w-full h-[10vh] relative flex justify-center items-center'>
        <i class="text-zinc-400 text-3xl ri-search-line"></i>
        <input className='w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent' type="text" placeholder='Search Anything' />
        <i class="text-zinc-400 text-3xl ri-close-fill"></i>
    </div>
  )
}

export default Topnav