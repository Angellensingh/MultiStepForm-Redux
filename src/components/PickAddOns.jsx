import React from "react";
import Sidebar from "./Sidebar";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { togglePickAdd } from "@/features/multistepform/billingSlice";

const PickAddOns = () => {
  const currentStep = 3;
  const billingType = useSelector((state) => state.billing.billingType);
  const totalamount = useSelector((state) => state.billing.addonAmount);
  const selectedAddons = useSelector((state) => state.billing.selectedAddons);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSelectAddon = (addon) => {
    dispatch(togglePickAdd(addon));
  }; 
  const handleClick = () => {
    if (selectedAddons.length > 0) {
      navigate("/summary");
    }
    else{
      alert('please select any one')
    }
  };

  return (
    <div className="inline-flex mt-12 ml-56 py-4 bg-white shadow rounded absolute ">
      <div className="relative right-8">
        <Sidebar currentStep={currentStep} />
      </div>
      <div className="ml-2 py-5 pr-10 ">
        <h2 className="font-bold text-3xl  text-marineblue">Pick add-ons</h2>
        <p className="text-sm mt-2 text-lightgray">
          Add-ons help enhance your gaming experience
        </p>

        {["Online Service", "Larger Storage", "Customizable Theme"].map(
          (addon) => (
            <div
              key={addon}
              className="bg-white shadow rounded  mt-5 p-2 pt-5 pl-4 w-[360px] border-gray-300 border hover:border-marineblue "
            >
              <input

                type="checkbox"
                onChange={() => handleSelectAddon(addon)}
                checked={selectedAddons.includes(addon)}
              />
              <div className=" ml-8 relative bottom-8 h-4">
                <p className="font-semibold text-sm text-marineblue">{addon}</p>
                <p className="text-xs block">
                  {addon === "Online Service"
                    ? "Access to multiplayer games"
                    : addon === "Larger Storage"
                    ? "Extra 1TB of cloud save"
                    : "Custom theme on your profile"}
                </p>
                <p className="text-xs relative left-60 bottom-7 pt-1 text-purpleblue font-semibold ">
                  {billingType === "yearly"
                    ? `+${addon === "Online Service" ? "$10" : "$20"}/yr`
                    : `+${addon === "Online Service" ? "$1" : "$2"}/mo`}
                </p>
              </div>
            </div>
          )
        )}

        <div className="inline-flex">
          <Button className="mt-14 bg-marineblue" onClick={() => navigate(-1)}>
            Back
          </Button>
          <Button
            className="mt-14 ml-60 bg-marineblue"
            onClick={() => handleClick()}
          >
            Next Step
          </Button>
        </div>
        {/* ${totalamount} */}
      </div>
    </div>
  );
};

export default PickAddOns;
