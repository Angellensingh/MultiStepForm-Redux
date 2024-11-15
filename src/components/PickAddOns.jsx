import React from 'react';
import Sidebar from './Sidebar';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { togglePickAdd } from '@/features/multistepform/billingSlice';

const PickAddOns = () => {
  const billingType = useSelector((state) => state.billing.billingType);
  const totalamount = useSelector((state) => state.billing.addonAmount);
  const selectedAddons = useSelector((state) => state.billing.selectedAddons);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectAddon = (addon) => {
    dispatch(togglePickAdd(addon));
  };

  return (
    <div className='inline-flex mt-12 ml-56 py-4 bg-white shadow rounded absolute '>
      <div className='relative right-8'>
        <Sidebar />
      </div>
      <div className='ml-2 p-5 pr-10'>
        <h2 className='font-bold text-3xl  text-marineblue'>Pick add-ons</h2>
        <p className='text-sm mt-2'>Add-ons help enhance your gaming experience</p>
        

        {['Online Service', 'Larger Storage', 'Customizable Theme'].map((addon) => (
          <div key={addon} className=' bg-white shadow rrounded  mt-5 p-2 pt-3 border-solid border-gray-300 border-2 '>
            <input
              type="checkbox"
              className=''
              onChange={() => handleSelectAddon(addon)}
              checked={selectedAddons.includes(addon)}
            />
            <div className=' ml-8 relative bottom-8 h-2'>
              <p className='font-bold text-sm'>{addon}</p>
              <p className='text-xs block'>
                {addon === 'Online Service' ? 'Access to multiplayer games' : addon === 'Larger Storage' ? 'Extra 1TB of cloud save' : 'Custom theme on your profile'}
              </p>
              <p className='text-sm relative left-64 bottom-7'>
                {billingType === 'yearly' ? `+${addon === 'Online Service' ? '$10' : "$20"}/yr` : `+${addon === 'Online Service' ? "$1" : '$2'}/mo`}
              </p>
            </div>
          </div>
        ))}

        <div className='inline-flex'>
          <Button className="mt-24 bg-marineblue" onClick={() => navigate(-1)}>Back</Button>
          <Button className="mt-24 ml-60 bg-marineblue" onClick={() => navigate('/Summary')}>Next Step</Button>
        </div>
        {/* ${totalamount} */}
      </div>
    </div>
  );
};

export default PickAddOns;