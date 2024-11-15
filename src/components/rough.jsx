import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPlan, setBillingType } from '../redux/billingSlice';

const SelectPlan = () => {
  const dispatch = useDispatch();
  const selectedPlan = useSelector((state) => state.billing.selectedPlan);
  const billingType = useSelector((state) => state.billing.billingType);
  const amount = useSelector((state) => state.billing.amount);

  const handlePlanSelect = (plan) => {
    dispatch(setSelectedPlan(plan)); // Dispatch selected plan to store
  };

  const toggleBillingType = () => {
    const newBillingType = billingType === 'monthly' ? 'yearly' : 'monthly';
    dispatch(setBillingType(newBillingType)); // Toggle billing type
  };

  return (
    <div>
      <h2>Select your plan</h2>
      <button onClick={() => handlePlanSelect('arcade')}>Arcade Plan</button>
      <button onClick={() => handlePlanSelect('advanced')}>Advanced Plan</button>
      <button onClick={() => handlePlanSelect('pro')}>Pro Plan</button>

      <h3>Billing Type</h3>
      <button onClick={toggleBillingType}>
        Toggle to {billingType === 'monthly' ? 'Yearly' : 'Monthly'}
      </button>

      <div>
        <p>Selected Plan: {selectedPlan}</p>
        <p>Billing Type: {billingType}</p>
        <p>Amount: ${amount}/{billingType}</p>
      </div>
    </div>
  );
};

export default SelectPlan;


// src/redux/billingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const calculateAmount = (plan, billingType) => {
  const prices = {
    arcade: 9,
    advanced: 12,
    pro: 15,
  };

  let monthlyPrice = prices[plan] || 0;
  if (billingType === 'yearly') {
    // Apply a discount for yearly billing, e.g., 2 months free (10 months' price)
    return monthlyPrice * 10; // 10 months' price for yearly plan
  } else {
    return monthlyPrice;
  }
};

const billingSlice = createSlice({
  name: 'billing',
  initialState: {
    billingType: 'monthly',
    selectedPlan: null,
    amount: 0,
  },
  reducers: {
    setBillingType: (state, action) => {
      state.billingType = action.payload;
      // Recalculate the amount whenever billing type changes
      state.amount = calculateAmount(state.selectedPlan, state.billingType);
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
      // Recalculate the amount whenever the selected plan changes
      state.amount = calculateAmount(state.selectedPlan, state.billingType);
    },
  },
});
export const { setBillingType, setSelectedPlan } = billingSlice.actions;
export default billingSlice.reducer;