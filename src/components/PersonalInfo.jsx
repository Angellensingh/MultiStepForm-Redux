import React from "react";
import { useState } from "react";
import { Form } from "./ui/form";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import * as Yup from "yup";
import Sidebar from "./Sidebar";
import { useSelector, useDispatch } from "react-redux";
import { setFormData } from "@/features/multistepform/formSlice";
import { useNavigate } from "react-router-dom";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentStep = 1;

  const formData = useSelector((state) => state.form);

  const [errors, setErrors] = useState("");
  const validationSchema = Yup.object({
    name: Yup.string().required(""),
    emailAddress: Yup.string()
      .required("Email is Required")
      .email("Invaild Email"),
    phoneNumber: Yup.string()
      .matches(/^\d{10}$/, "Phone Number must be 10 digits")
      .required("Phone Number is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("Form Submitted", formData);
      navigate("/select-plan");
    } catch (error) {
      console.log(error);
      const newErrors = {};
      error.inner.forEach((err) => {
        newErrors[err.path] = err.message;
      });

      setErrors(newErrors);
    }
  };
  const handleChange = (e) => {
    console.log(e.target.name);
    const { name, value } = e.target;
    dispatch(setFormData({ name, value })); //payload
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  return (
    <div className="inline-flex mt-12 ml-56 py-4 bg-white shadow rounded absolute">
      <div className="relative right-8 ">
        <Sidebar currentStep={currentStep} />
      </div>
      <div className="py-5 pr-5 ">
        <h2 className="font-bold text-3xl text-marineblue">Personal Info</h2>
        <p className="text-lightgray mt-2">
          Please provide your name,email adderess, and phone number
        </p>
        <br />

        <Form>
          <form action="" onSubmit={handleSubmit}>
            <Label className="text-marineblue">Name</Label>
            <br />
            <Input
              type="text"
              value={formData.name}
              placeholder="e.g.Sameer"
              name="name"
              onChange={handleChange}
            />
            {errors.Name && (
              <div className="text-red-600 text-xs">{errors.Name}</div>
            )}
            <br />
            <Label className="text-marineblue">Email Address</Label>
            <Input
              type="email"
              value={formData.emailAddress}
              placeholder="e.g.sameer@gmail.com"
              name="emailAddress"
              onChange={handleChange}
            />
            {errors.EmailAddress && (
              <div className="text-red-600 text-xs">{errors.EmailAddress}</div>
            )}
            <br />
            <Label className="text-marineblue">Phone Number</Label>
            <Input
              type="number"
              value={formData.phoneNumber}
              placeholder="e.g.1234567890"
              name="phoneNumber"
              onChange={handleChange}
            />
            {errors.PhoneNumber && (
              <div className="text-red-600 text-xs">{errors.PhoneNumber}</div>
            )}

            <div className="ml-marleft mt-6">
              <Button type="submit" className="bg-marineblue">
                Next Step
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default PersonalInfo;
