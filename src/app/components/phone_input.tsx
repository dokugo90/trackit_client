import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';

const PhoneInputField = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
  
    const handlePhoneChange = (value: any) => {
      setPhoneNumber(value);
    };
  
    return (
      <div className="flex items-center w-full">
        <PhoneInput
          placeholder='Enter Phone number'
          country={'us'}
          value={phoneNumber}
          onChange={handlePhoneChange}
          inputClass="border rounded px-3 py-2 w-full"
          containerStyle={{ width: "100%"}}
        />
      </div>
    );
  };
  
  export default PhoneInputField;