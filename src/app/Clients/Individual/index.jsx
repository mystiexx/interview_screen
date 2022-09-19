import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import PersonalInformation from "./PersonalInformation";
import ContactInformation from "./ContactInformation";
import NextOfKin from "./NextOfKin";
import UploadDocuments from "./UploadDocuments";
import EmploymentInformation from "./EmploymentInformation";
import ReferenceInformation from "./ReferenceInformation";
import Stepper from "components/Stepper/Stepper";

const Individual = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    middle_name: "",
    gender: "",
    date_of_birth: "",
    marital_status: "",
    loan_officer: "",
    branch: "",
    bvn: "",
    bank: "",
    account_number: "",
    email: "",
    phone_number: "",
    address: "",
    postal_code: "",
    years_at_address: "",
    ownership: "",
    kin_full_name: "",
    kin_phone_number: "",
    kin_relationship: "",
    employer_name: "",
    work_email:"",
    industry:"",
    job_title:"",
    salary: "",
    work_address:"",
    work_country:"",
    work_state:"",
    date_of_employment:"",
    reference_name:"",
    reference_phone_number:"",
    reference_occupation:"",
    reference_email:"",
    reference_relationship:"",
    reference_address:"",
    reference_country:"",
    reference_state:"",
    years_known:"",
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
      title: "Next Of Kin Information",
      sub: "Details of next of kin",
    },
    {
      title: "Upload Documents",
      sub: "Upload client’s documents",
    },
    {
      title: "Employement Information",
      sub: "Details of client’s employment",
    },
    {
      title: "Reference Information",
      sub: "Client’s reference",
    },
  ];

  const steps = [
    <PersonalInformation next={nextStep} data={data} />,
    <ContactInformation next={nextStep} data={data} prev={prevStep} />,
    <NextOfKin next={nextStep} data={data} prev={prevStep} />,
    <UploadDocuments next={nextStep} data={data} prev={prevStep} />,
    <EmploymentInformation next={nextStep} data={data} prev={prevStep} />,
    <ReferenceInformation next={nextStep} data={data} prev={prevStep} />,
  ];

  return (
    <div>
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
    </div>
  );
};

export default Individual;
