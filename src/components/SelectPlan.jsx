import React from 'react'
import Sidebar from './Sidebar'
import arcade from '../assets/images/icon-arcade.svg';
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { setBillingType,setSelectedPlan } from '@/features/multistepform/billingSlice';
import { useDispatch,useSelector } from 'react-redux';


const SelectPlan = () => {
        const navigate =useNavigate()
        const dispatch = useDispatch();
        const billingType = useSelector((state) => state.billing.billingType);
        const selectedPlan = useSelector((state) => state.billing.selectedPlan);
        const amount = useSelector((state) => state.billing.amount);

        const toggleBillingType = () => {
            const newBillingType = billingType === 'monthly' ? 'yearly' : 'monthly';
            dispatch(setBillingType(newBillingType));
        };
        const handleSelectPlan = (plan) => {
            dispatch(setSelectedPlan(plan));
        };

  return (

    <div className='inline-flex mt-12 ml-56 py-4 bg-white shadow rounded absolute '>
        <div className='relative right-8 '>
        <Sidebar/>
        </div>
        <div className=' ml-2 pt-3 pr-10 '>
            <h2 className='font-bold text-3xl text-marineblue'>Select your plan</h2>
            
            <p className='mt-2'>you have the option of monthly or yearly billing</p>
            <br />
            <div className='inline-flex '>
                <div onClick={() => handleSelectPlan('Arcade')} className={ ` bg-white shadow rounded pl-5 pt-6 w-28 border-solid border-gray-300 border-2 ${selectedPlan === 'Arcade' ? 'border-black' : 'border-gray-300'} hover:border-blue-900`}>
                    <img src={arcade} alt="rhg"  />
                    <br/>
                    <p className='font-semibold'>Arcade</p>
                        <p className="text-lightgray text-xs">
                        {billingType === 'monthly' ? '$9/mo' : '$90/yr'}
                        {billingType === 'yearly' && <p className="text-black mt-1"> 2 months free</p>}
                        </p>
                </div>
                
                <div  onClick={() => handleSelectPlan('Advanced')} className={` bg-white shadow rounded pl-5 pt-5 pb-2  w-28 ml-4 border-solid border-gray-300 border-2 ${selectedPlan === 'Advanced' ? 'border-black' : 'border-gray-300'} hover:border-blue-900 `}>
                    <img src={advanced} alt="rhg"  />
                    <br/>
                    <p className='font-semibold'>Advanced</p>
                  
                            <p className="text-lightgray text-xs">
                            ${billingType === 'monthly' ? '12/mo' : '120/yr'}
                            {billingType === 'yearly' && <p className="text-black mt-1"> 2 months free</p>}
                            </p>
                </div>
                <div  onClick={() => handleSelectPlan('Pro')} className={` bg-white shadow rounded pl-5 pt-5 w-28 ml-4 border-solid border-gray-300 border-2 ${selectedPlan === 'Pro' ? 'border-black' : 'border-gray-300'}  hover:border-blue-900 `}>
                    <img src={pro} alt="rhg"  />
                    <br/>
                    <p className='font-semibold'>Pro</p>
                    <p className="text-lightgray text-xs">
                    ${billingType === 'monthly' ? '15/mo' : '150/yr'}
                    {billingType === 'yearly' && <p className="text-black mt-1"> 2 months free</p>}
                    </p>

                </div>
            </div>  

            <div  className='block mt-9 '>
                <label className="inline-flex items-center cursor-pointer ml-20">
                    <span className={`text-sm font-medium text-gray-900  ${billingType === 'monthly' ? 'text-black' : 'text-gray-400'}`}>Monthly  </span>
                    <input type="checkbox" value="" className="sr-only peer"  onChange={toggleBillingType} />
                    <div className=" ml-4 relative w-11 h-6 bg-black peer-focus:outline-none  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-black-600"></div>
                    <span className={`ms-3 text-sm font-medium text-gray-900 ${billingType === 'yearly' ? 'text-black' : 'text-gray-400'}`}>Yearly</span>
                </label>

            </div>
            <div className='inline-flex'>
                <Button className=" mt-20  bg-blue-900" onClick={() => navigate(-1)}>Back</Button>
                <Button className=" mt-20 ml-60 bg-blue-900 " onClick={()=>{navigate('/PickAddOns')}} >Next Step</Button>
                {/* ${amount}
                {selectedPlan}
                {billingType} */}
            </div>
                     
        </div>
    </div>

  )
}

export default SelectPlan

