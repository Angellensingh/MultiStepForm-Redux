import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Summary = () => {
  const currentStep = 4
  const navigate = useNavigate()
  const selectedPlan = useSelector((state) => state.billing.selectedPlan);
  const billingType = useSelector((state) => state.billing.billingType);
  const amount = useSelector((state) => state.billing.amount);
  const selectedAddons = useSelector((state) => state.billing.selectedAddons);
  const totalamount = useSelector((state) => state.billing.addonAmount);

  const formatPrice = (price) => {
    return billingType === 'yearly' ? `+$${price * 10}/yr` : `+$${price}/mo`;
  };
  
  return (
    <div className='inline-flex mt-12 ml-56 py-4  bg-white shadow rounded absolute w-[775px]'>
        <div className='relative right-8 '>
        <Sidebar currentStep = {currentStep}/>
        </div>
        
        <div className='py-5 pr-10'>
            <h2 className='font-bold text-3xl  text-marineblue'>Finishig up</h2>        
            <p className='text-sm mt-2 text-lightgray'>Double check everything looks OK before confirming</p>
            <br />

            <div className='bg-coolgray p-4 rounded-lg'>
                <p className='font-semibold inline-flex text-sm text-marineblue'>{selectedPlan}<p>({billingType})</p><span className={`${billingType==='yearly'?'ml-[180px]':'ml-[160px]'}`}>${amount}{billingType === 'yearly' ? '/yr' : '/mo'}</span></p>
                <button onClick={() => navigate('/select-plan') } className='block text-xs underline mb-2 hover:text-purpleblue'>Change</button>
              
                <hr />

                <div className="mt-2">
                    {selectedAddons.map((addOn) => (
                      <div key={addOn} className="grid grid-cols-2 py-1 text-marineblue">
                        <p className='text-xs'>{addOn}</p>
                        <p className='ml-[100px] text-xs font-semibold'>{formatPrice(addOn === 'Online Service' ? 1 : addOn === 'Large Storage' ? 2 : addOn === 'Custamizable Theme' ? 2:2)}</p>
                      </div>
                  ))}
                </div>

              <hr />
                
              <div className='inline-flex pt-4'>
                    <p className='text-marineblue'>Total:</p>
                    <p className='ml-[250px] text-purpleblue font-bold'>${totalamount}</p>
              </div>
            </div>
              <div className='inline-flex'>
                  <Button className=" mt-24  bg-blue-900" onClick={() => navigate(-1)}>Back</Button>
                  <Button className=" mt-24 ml-64 bg-blue-900 " onClick={()=>navigate('/thank-you')} >Confirm</Button>
              </div>
            
        </div>
    </div>
  )
}


export default Summary


