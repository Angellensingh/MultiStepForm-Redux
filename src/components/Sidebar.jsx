import React from 'react'
import { useNavigate } from "react-router-dom";

const Sidebar = ({currentStep}) => {
    const navigate = useNavigate()
    
  return (
    
          <div className=" h-imghg w-80 bg-desktopimage bg-cover bg-center">
           <div className='ml-20 mt-12 inline-flex ' onClick={()=>{navigate('/')}}>
                <div className='mt-1'>
                    <button className= {`rounded-full font-bold  p-1 px-2 text-xs border-solid  border-white border-2  ${currentStep===1 ? 'bg-lightblue  text-black':'text-white'}`}>1</button>
                </div>
                <div className='text-xs ml-4  text-white '>
                    <p>STEP-1</p>
                    <p><strong>YOUR INFO</strong></p>
                </div>

            </div>
            <div className='ml-20 mt-6 inline-flex ' onClick={()=>{navigate('/select-plan')}}>
                <div className='mt-1'>
                    <button className={` rounded-full font-bold  p-1 px-2 text-xs   border-solid border-white border-2 ${currentStep===2 ? 'bg-lightblue text-black':'text-white'}`}>2</button>
                </div>
                <div className='text-xs ml-4  text-white '>
                    <p>STEP-2</p>
                    <p><strong>SELECT PLAN</strong></p>
                </div>
            </div>
            <div className='ml-20 mt-6 inline-flex' onClick={()=>{navigate('/pick-add-ons')}}>
                <div className='mt-1'>
                    <button className= {`rounded-full font-bold  p-1 px-2 text-xs   border-solid border-white border-2  ${currentStep===3 ? 'bg-lightblue text-black':'text-white'}`}>3</button>
                </div>
                <div className='text-xs ml-4  text-white '>
                    <p>STEP-3</p>
                    <p><strong>ADD-ONS</strong></p>
                </div>
            </div>
            <div className='ml-20 mt-6 inline-flex' onClick={()=>{navigate('/summary')}}>
                <div className='mt-1'>
                    <button className= {`rounded-full font-bold  p-1 px-2 text-xs   border-solid border-white border-2 ${currentStep===4 ? 'bg-lightblue text-black':'text-white'}`}>4</button>
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