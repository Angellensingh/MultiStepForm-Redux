import React from 'react'

const Sidebar = () => {
    
  return (
    
          <div className=" h-imghg w-80 bg-desktopimage bg-cover bg-center">
           <div className='ml-20 mt-12 inline-flex'>
                <div className='mt-1'>
                    <button className=' rounded-full font-bold  p-1 px-2 text-xs  text-white border-solid border-white border-2'>1</button>
                </div>
                <div className='text-xs ml-4  text-white '>
                    <p>STEP-1</p>
                    <p><strong>YOUR INFO</strong></p>
                </div>
            </div>
            <div className='ml-20 mt-6 inline-flex'>
                <div className='mt-1'>
                    <button className=' rounded-full font-bold  p-1 px-2 text-xs  text-white border-solid border-white border-2'>2</button>
                </div>
                <div className='text-xs ml-4  text-white '>
                    <p>STEP-2</p>
                    <p><strong>SELECT PLAN</strong></p>
                </div>
            </div>
            <div className='ml-20 mt-6 inline-flex'>
                <div className='mt-1'>
                    <button className=' rounded-full font-bold  p-1 px-2 text-xs  text-white border-solid border-white border-2'>3</button>
                </div>
                <div className='text-xs ml-4  text-white '>
                    <p>STEP-3</p>
                    <p><strong>ADD-ONS</strong></p>
                </div>
            </div>
            <div className='ml-20 mt-6 inline-flex'>
                <div className='mt-1'>
                    <button className=' rounded-full font-bold  p-1 px-2 text-xs  text-white border-solid border-white border-2'>4</button>
                </div>
                <div className='text-xs ml-4  text-white '>
                    <p>STEP-4</p>
                    <p><strong>SUMMARY</strong></p>
                </div>
            </div>   
        </div>
   
  )
}

export default Sidebar