// EducationSelector.tsx
import React from "react";
import SelectOption from "./SelectOption";
import { useState } from "react";

interface PatronSelectorProps {
  onChange: (value: number) => void;
}

const PatronTypeSelector = ({ onChange }: PatronSelectorProps) => {
  const patronTypeOptions = [
    { value: "1", label: "학부" },
    { value: "2", label: "대학원" },
  ];

  // const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  //   const selectedGender = e.target.value;
  //   setGender(selectedGender);
  //   onChange({ gender: selectedGender }); // 데이터를 상위 컴포넌트로 전달
  // };

  const [patronType, setPatronType] = useState<number>(1);

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const patronType = parseInt(e.target.value);
    // 지역변수니까 상관없다
    setPatronType(patronType);
    onChange(patronType); // 데이터를 상위 컴포넌트로 전달
  };

  return (
    <div className="gender-select">
      <label htmlFor="genderSelect">학부/대학원 소속 선택</label>
      <select
        value={patronType}
        className="form-select"
        aria-label="Default select example"
        onChange={handleGenderChange}
      >
        <option value="1">학부생</option>
        <option value="2">대학원생</option>
      </select>
    </div>

    // <SelectOption
    //   options={patronTypeOptions}
    //   serverValueMap={{ "1": "학부", "2": "대학원" }}
    //   serverCallback={handleChange}
    // />
  );
};

export default PatronTypeSelector;
