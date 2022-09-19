import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Stepper from "components/Stepper/Stepper";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import BusinessInformation from "./BusinessInformation";
import NextOfKin from "./NextOfKin";

const Business = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    loan_officer: "",
    branch: "",
    bvn: "",
    bank: "",
    account_number: "",
    email: "",
    phone_number: "",
    address: "",
    postal_code: "",
    product_sold: "",
    amount_invested: "",
    name_of_market: "",
    years_in_market: "",
    market_address: "",
    kin_full_name: "",
    kin_phone_number: "",
    kin_relationship: "",
  });
  const [step, setStep] = useState(0);

  const nextStep = (newData, final = false) => {
    setData((prev) => ({ ...prev, ...newData }));

    if (final) {
      makeRequest(newData);
      return;
    }
    setStep((prev) => prev + 1);
  };

  const prevStep = (newData) => {
    setData((prev) => ({ ...prev, ...newData }));
    setStep((prev) => prev - 1);
  };

  const makeRequest = (data) => {
    console.log("form submitted", data);
  };

  const stepsArray = [
    {
      title: "Personal Information",
      sub: "About the client",
    },
    {
      title: "Contact Information",
      sub: "How to reach client",
    },
    {
      title: "Business Information",
      sub: "Details about client’s business",
    },
    {
      title: "Next Of Kin Information",
      sub: "Details about client’s business",
    },
  ];

  const steps = [
    <PersonalInformation next={nextStep} data={data} />,
    <ContactInformation next={nextStep} data={data} prev={prevStep} />,
    <BusinessInformation next={nextStep} data={data} prev={prevStep} />,
    <NextOfKin next={nextStep} data={data} prev={prevStep} />,
  ];

  return (
    <>
      <Box display="flex" mb="48px" justifyContent="center" mt="37px">
        {stepsArray.map((data, index) => (
          <Stepper
            label={data.title}
            sub={data.sub}
            key={index}
            index={index}
            selected={step}
          ></Stepper>
        ))}
      </Box>
      <Box>{steps[step]}</Box>
    </>
  );
};

export default Business;
