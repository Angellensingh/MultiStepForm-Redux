import { configureStore } from '@reduxjs/toolkit';
import formReducer from "../features/multistepform/formSlice";
import billingReducer from '../features/multistepform/billingSlice'


const store = configureStore({
  reducer: {
    form: formReducer,
    billing:billingReducer,
  },
});

export default store;
