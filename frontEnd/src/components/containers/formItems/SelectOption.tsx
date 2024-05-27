"use client";

import React, { useState } from "react";

interface SelectOptionProps {
  options: { value: string; label: string }[];
  serverValueMap: { [key: string]: string };
  serverCallback: () => void;
}

const SelectOption = (props: SelectOptionProps) => {
  const { options, serverValueMap, serverCallback } = props;
  const [selectedValue, setSelectedValue] = useState<string>("");


  

  return (
    <div>
      <select
        value={selectedValue}
        className="form-select"
        aria-label="Default select example"
        onChange={serverCallback}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectOption;
