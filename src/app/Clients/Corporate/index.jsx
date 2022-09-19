import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Stepper from "components/Stepper/Stepper";
import ApplicantInformation from "./ApplicantInformation";
import GeneralInformation from "./GeneralInformation";
import BusinessInformation from "./BusinessInformation";

const Corporate = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    bvn: "",
    email: "",
    phone_number: "",
    address: "",
    applicant_state:"",
    organization_name: "",
    contact_person: "",
    organization_phone_nmber: "",
    organization_email: "",
    organization_address: "",
    organization_state:"",
    postal_code: "",
    number_of_staffs: "",
    number_of_fulltime_staff: "",
    number_of_parttime_staff: "",
    business_name: "",
    business_phone_number: "",
    business_type: "",
    tax_id_number: "",
    industry: "",
    incorporation_date: "",
    registration_number: "",
    monthly_turnover: "",
    net_profit_of_previous_year: "",
    director_name: "",
    director_phone_number: "",
    business_bank_name: "",
    business_account_number: "",
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
      title: "Applicant Information",
      sub: "About the applicant",
    },
    {
      title: "General Information",
      sub: "About the corporation",
    },
    {
      title: "Business Information",
      sub: "Details about client’s business",
    },
  ];

  const steps = [
    <ApplicantInformation next={nextStep} data={data} />,
    <GeneralInformation next={nextStep} data={data} prev={prevStep} />,
    <BusinessInformation next={nextStep} data={data} prev={prevStep} />,
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

export default Corporate;
