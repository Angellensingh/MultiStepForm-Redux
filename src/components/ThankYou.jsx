import React from 'react'
import thankyou from '../assets/images/icon-thank-you.svg';
import Sidebar from './Sidebar'

const ThankYou = () => {
  return (
    <div className='inline-flex mt-12 ml-56 py-4  bg-white shadow rounded absolute w-add'>
        <div className='relative right-8 '>
            <Sidebar/>
        </div>
        <div className='mt-32'>
            <img src={thankyou} alt="" className='mx-44 ' />
            <p className='font-bold text-3xl mx-36 '>Thank You !</p>
            
            <p className='text-center mt-2 ml-8 w-96 text-sm'>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at abc@gmail.com</p>
        
        </div>
    </div>
  )
}

export default ThankYou