import React from 'react'

function Background() {
  return (
    <>
    <div className='fixed z-[2] w-full h-full'>

         <div className="w-full py-10 flex justify-center text-[20px] text-zinc-600 font-semibold ">Documents</div>
      <h1 className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] text-[100px] font-semibold text-zinc-900">
      Docs
      </h1>
    </div>
    </>
  )
}

export default Background;