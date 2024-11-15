import React from 'react'
import { useState } from 'react'
import { Form, FormLabel } from './ui/form'
import { Label } from './ui/label'
import { Input } from './ui/input'
import { Button } from './ui/button'
import * as Yup from  'yup'
import Sidebar from './Sidebar'
import { useSelector,useDispatch } from 'react-redux'
import { setFormData ,resetFormData} from '@/features/multistepform/formSlice'
import { useNavigate } from "react-router-dom"

// import {useNavigate} from 'reac'


const PersonalInfo = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const formData = useSelector((state) => state.form);

    const [errors,setErrors]=useState('')
    const validationSchema=Yup.object({
        Name:Yup.string().required(''),
        EmailAddress:Yup.string().required('Email is Required').email('Invaild Email'),
        PhoneNumber:Yup.string().matches(/^\d{10}$/,'Phone Number must be 10 digits').required('Phone Number is required')
    })

    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            await validationSchema.validate(formData, {abortEarly: false});
            console.log("Form Submitted", formData);
            navigate('/SelectPlan')
          } catch (error) {
            console.log(error)
            const newErrors = {};
      
            error.inner.forEach((err) => {
              newErrors[err.path] = err.message;
            });
      
            setErrors(newErrors); 
              
        };
    }
    const handleChange=(e)=>{
        console.log(e.target.name)
        const {name,value}=e.target
        dispatch(setFormData({ name, value }));//payload
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: '', 
          }));
    }

  return (
    <div className='inline-flex mt-12 ml-56 py-4 bg-white shadow rounded absolute'>
        
        <div className='relative right-8 '>
        <Sidebar/>
        </div>
        <div className='py-5 pr-5 '  >
            
            <h2 className='font-bold text-3xl text-marineblue'>Personal Info</h2>
            <p className='text-lightgray mt-2'>Please provide your name,email adderess, and phone number</p>
            <br />
            

            <Form>
                <form action="" onSubmit={handleSubmit} >
                <Label className='text-marineblue'>Name</Label>
                <br />
                <Input
                    type="text" 
                    value={formData.Name}
                    placeholder='e.g.Sameer'
                    name='Name'
                    onChange={handleChange}
                />
                  {errors.Name && <div className="text-red-600 text-xs">{errors.Name}</div>}
                <br />
                <Label className='text-marineblue'>Email Address</Label>
                <Input
                    type="email" 
                    value={formData.EmailAddress}
                    placeholder='e.g.sameer@gmail.com'
                    name='EmailAddress'
                    onChange={handleChange}

                />
                 {errors.EmailAddress && <div className="text-red-600 text-xs">{errors.EmailAddress}</div>}
                <br />
                <Label className='text-marineblue'>Phone Number</Label>
                <Input
                    type="number" 
                    value={formData.PhoneNumber}
                    placeholder='e.g.1234567890'
                    name='PhoneNumber'
                    onChange={handleChange}

                /> 
                {errors.PhoneNumber && <div className="text-red-600 text-xs">{errors.PhoneNumber}</div>}
    
                <div className='ml-marleft mt-6'>
                    <Button type="submit" className="bg-marineblue">Next Step</Button>
                </div>
                
                </form>
               
            </Form>
        </div>
    </div>
  )
}

export default PersonalInfo