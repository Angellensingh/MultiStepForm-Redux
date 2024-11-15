

import { createSlice } from '@reduxjs/toolkit';

const calculateAmount = (plan, billingType) => {
  const prices = {
    Arcade: 9,
    Advanced: 12,
    Pro: 15,
  };
  let monthlyPrice = prices[plan] || 0;
  return billingType === 'yearly' ? monthlyPrice * 10 : monthlyPrice;
};

const calculateAddOnAmount = (addons, amount, billingType) => {
  const prices = {
    'Online Service': 1,
    'Larger Storage': 2,
    'Customizable Theme': 2,
  };
  const totalAddonAmount = addons.reduce((sum, addon) => sum + (prices[addon] || 0),0);
  return billingType === 'yearly' ? totalAddonAmount * 10 + amount : totalAddonAmount + amount;
};

const billingSlice = createSlice({
  name: 'billing',
  initialState: {
    billingType: 'monthly',
    selectedPlan: '',
    amount: 0,
    
    addonAmount: 0,
    selectedAddons: [],
  },
  reducers: {
    setBillingType: (state, action) => {
      state.billingType = action.payload;
      state.amount = calculateAmount(state.selectedPlan, state.billingType);
    },
    setSelectedPlan: (state, action) => {
      state.selectedPlan = action.payload;
      state.amount = calculateAmount(state.selectedPlan, state.billingType);
    },
    togglePickAdd: (state, action) => {
      const addon = action.payload;
      if (state.selectedAddons.includes(addon)) {
        state.selectedAddons = state.selectedAddons.filter((add) => add !== addon);
      } else {
        state.selectedAddons.push(addon);
      }
      state.addonAmount = calculateAddOnAmount(state.selectedAddons, state.amount, state.billingType);
    },
  },
});

export const { setBillingType, setSelectedPlan, togglePickAdd } = billingSlice.actions;
export default billingSlice.reducer;




