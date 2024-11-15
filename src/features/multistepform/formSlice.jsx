import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Name: '',
  EmailAddress: '',
  PhoneNumber: '',
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFormData: (state, action) => {// action(object)->type,payload. type->form. Payload(object)->name,value(what we enter in the input field). name->Name. payload is from personal info
      console.log(action)
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetFormData: () => initialState, 
  },
});

export const { setFormData, resetFormData } = formSlice.actions;

export default formSlice.reducer;
