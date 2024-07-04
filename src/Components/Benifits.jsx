import React, { useState } from "react";
import banner from "../Images/banner.jpg";
import BenifitsAccordion from "./BenifitsAccordion";

import Footer from "./Footer";
const Benifits = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="">
        <img src={banner} className="w-full h-full" alt="banner-img" />
      </div>

      {/*----Accordion----*/}
      <div className="container mx-auto p-4">
        <h2 className="text-4xl text-white text-center my-[3%] font-bold underline">
          Zen Employee Benefits
        </h2>
        <BenifitsAccordion title="Medical Insurance">
          <p>
            To take care of employee’s health & to assist emergency medical
            expenses, all regular employees are covered under Zen medical
            insurance policy up to Rs.2,00,000/-
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Personal Accident Insurance">
          <p>
            Zen provides an accidental insurance cover to all its employees
            between Rs. 5,00,000/- to Rs.11,00,000/- depending upon the grade of
            the employee.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Life Insurance">
          <p>
            Zen provides life insurance coverage for all regular employees under
            life insurance policy up to 10,00,000/-
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Provident Fund">
          <p>
            Zen is covered under the Employees' Provident Funds and
            Miscellaneous Provisions Act and contributes a certain amount
            towards each eligible employee.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="ESIC">
          <p>
            Zen is covered under the Employees State Insurance Act and provides
            a comprehensive health insurance scheme to an insured employee and
            his/her dependents. This policy is also designed to ensure
            compliance with the appropriate provisions of the Act.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Gratuity">
          <p>
            Employees who complete 5 years of continuous service in Zen are
            eligible for Gratuity benefit as per Gratuity Act.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Statutory Bonus">
          <p>
            Zen is covered under the Payment of Bonus Act and all employees who
            come under the provisions of the Act will be covered.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Incentives">
          <p>
            Zen has performance / project-based incentives on successful
            completion of projects.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="ESOPs">
          <p>
            All eligible employees have the opportunity to receive ESOPs, as per
            company policy.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Referral Bonus">
          <p>
            Zen encourages existing employees to recommend personnel who are
            well suited to join the Zen family and its work culture. The
            employees are eligible for a referral bonus as per the company’s
            referral policy.
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Holidays">
          <p>
            The Corporate office and Software Development Centre follow a 5-day
            workweek. Manufacturing and Operations maintain a 6-day workweek
          </p>
        </BenifitsAccordion>
        <BenifitsAccordion title="Canteen & Gym">
          <p>
            Canteen facility is available and subsidized lunch is provided to
            all employees and Gym facility is also available at our corporate
            office, where employees can use the facility for their fitness
            needs.
          </p>
        </BenifitsAccordion>
      </div>
     
    </div>
  );
};

export default Benifits;
