import React from 'react';

import { getCountryCode } from "@/data/country-code";

const PhoneNumberSelect = ({ className }: {
    className: string
}) => {
  const countryCodes = getCountryCode();

  return (
    <div className={className}>
      <label htmlFor="country_code" className="absolute left-1 md:left-4 lg:left-1 xl:left-4 -top-2 px-2 text-xs bg-white text-nowrap">Country Code</label>
      <select
        id="country_code"
        name="country_code"
        className="input w-full h-full"
      >
        {countryCodes.map((country) => (
          <option key={country.code} value={country.code}>
            {country.code}
          </option>
        ))}
      </select>
    </div>
  );
};

export default PhoneNumberSelect;