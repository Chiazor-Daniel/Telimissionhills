import React, { useRef, useEffect } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css'; // Import CSS for react-intl-tel-input

const PhoneInputComponent = () => {
  const inputRef = useRef(null);

  useEffect(() => {
    if (inputRef.current) {
      // Example of handling country change event
      inputRef.current.addEventListener('countrychange', function () {
        console.log('Country changed: ' + inputRef.current.selectedCountryData.iso2);
      });
    }
  }, []);

  return (
    <div className="col-lg-12">
      <div className="form_box mb-20" style={{ width: '100%', borderRadius: '20px' }}>
        <IntlTelInput
          inputClassName=""
          fieldId="mobile_code"
          containerClassName="intl-tel-input"
          autoPlaceholder="aggressive"
          preferredCountries={['in']}
          defaultValue="+91"
          inputRef={inputRef}
        />
      </div>
    </div>
  );
};

export default PhoneInputComponent;
