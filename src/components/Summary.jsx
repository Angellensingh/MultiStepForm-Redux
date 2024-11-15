import React from 'react'
import Sidebar from './Sidebar'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button } from './ui/button';

const Summary = () => {
  const navigate=useNavigate()
  const selectedPlan = useSelector((state) => state.billing.selectedPlan);
  const billingType = useSelector((state) => state.billing.billingType);
  const amount = useSelector((state) => state.billing.amount);
  const selectedAddons = useSelector((state) => state.billing.selectedAddons);
  const totalamount = useSelector((state) => state.billing.addonAmount);

  const formatPrice = (price) => {
    return billingType === 'yearly' ? `+$${price * 10}/yr` : `+$${price}/mo`;
  };
  
  return (
    <div className='inline-flex mt-12 ml-56 py-4  bg-white shadow rounded absolute w-add'>
        <div className='relative right-8 '>
        <Sidebar/>
        </div>
        <div className='py-5 pr-10'>
            <h2 className='font-bold text-3xl  text-marineblue'>Finishig up</h2>        
            <p className='text-sm mt-2'>Double check everything looks OK before confirming</p>
            <br />
            <div className='bg-coolgray p-4'>
              <p className='font-semibold inline-flex text-sm text-marineblue'>{selectedPlan}<p>({billingType})</p><span className='ml-64'>${amount}{billingType === 'yearly' ? '/yr' : '/mo'}</span></p>
              <button onClick={() => navigate('/SelectPlan') } className='block text-xs underline mb-2'>Change</button>
              
              <hr />

        <div className="mt-2">
              {selectedAddons.map((addOn) => (
                <div key={addOn} className="grid grid-cols-2 py-1">
                  <p className='text-xs'>{addOn}</p>
                  <p className='ml-40 text-xs'>{formatPrice(addOn === 'Online Service' ? 1 : addOn === 'Large Storage' ? 2 : addOn === 'Custamizable Theme' ? 2:2)}</p>
                  
                </div>
              ))}
        </div>

        <hr />
               
            <div className='inline-flex pt-4'>
                  <p>Total:</p>
                  <p className='ml-80 text-purpleblue font-bold'>${totalamount}</p>
                </div>
            </div>
            <div className='inline-flex'>
                <Button className=" mt-20  bg-blue-900" onClick={() => navigate(-1)}>Back</Button>
                <Button className=" mt-20 ml-60 bg-blue-900 " onClick={()=>navigate('/ThankYou')} >Confirm</Button>
            </div>
            
        </div>
    </div>
  )
}


export default Summary


