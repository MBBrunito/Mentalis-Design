"use client";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumberValidation({
   phoneNumberValue,
   onPhoneNumberChange,
   error,
}) {
   let errors = error;
   const [isValid, setIsValid] = useState(true);

   const handleChange = (value) => {
      onPhoneNumberChange(value);
      setIsValid(validatePhoneNumber(value));
      if (!isValid) {
         errors = "Nro. incorrecto";
      }
   };

   const validatePhoneNumber = (phoneNumber) => {
      const phoneNumberPattern = /^\d{10,12}$/;
      return phoneNumberPattern.test(phoneNumber);
   };

   return (
      <div className="phoneNumber">
         <PhoneInput
            country="mx"
            type="text"
            value={phoneNumberValue}
            onChange={handleChange}
            inputProps={{ required: true }}
            containerClass="custom-container-class"
            inputClass="custom-input-class"
         />
         {/* {!isValid && <p className="formErrors"></p>} */}
      </div>
   );
}
