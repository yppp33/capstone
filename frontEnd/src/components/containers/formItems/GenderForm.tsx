import React, { useState } from "react";
import SelectOption from "./SelectOption";

interface GenderFormProps {
  // onChange: (data: any) => void;
  // 이거면 에러 나야하는거 아니냐

  onChange: (value: string) => void;
}

const GenderForm = ({ onChange }: GenderFormProps) => {
  const [gender, setGender] = useState<string>("F");

  const handleGenderChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const gender = e.target.value;
    setGender(gender);

    // onChange({ gender: selectedGender });
    // data가 any일때

    onChange(gender);
  };

  return (
    <div className="gender-select">
      <label htmlFor="genderSelect">성별 선택</label>
      <select
        value={gender}
        className="form-select"
        aria-label="Default select example"
        onChange={handleGenderChange}
      >
        <option value="F">여자</option>
        <option value="M">남자</option>
      </select>
    </div>
  );
};

export default GenderForm;
