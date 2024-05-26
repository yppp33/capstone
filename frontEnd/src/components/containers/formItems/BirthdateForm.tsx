import { useState } from "react";

interface BirthdateFormProps {
  onChange: (value: number) => void;
}

const makeBirthToNumber = (birthDateString: string) => {
  // '-'를 기준으로 문자열을 분리하여 배열로 변환
  let parts = birthDateString.split("-");

  // 배열을 다시 합쳐서 원하는 형식으로 변환
  let formattedDate = parts.join("");

  console.log(formattedDate); // 출력: 20051228

  return Number(formattedDate);
};

const BirthdateForm = ({ onChange }: BirthdateFormProps) => {
  const [birthdate, setBirthdate] = useState<string>("");
  const minDate = "1950-01-01";
  const maxDate = "2005-12-31";

  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value >= minDate && value <= maxDate) {
      setBirthdate(value);

      const numberBirthDate = makeBirthToNumber(value);

      onChange(numberBirthDate);
    } else {
      alert(`생년월일을 다시 확인해주세요!`);
    }
  };

  return (
    <div>
      <div className="form-floating">
        <input
          type="date"
          value={birthdate}
          onChange={handleBirthdateChange}
          placeholder="생년월일을 입력하세요"
          max={maxDate}
          min={minDate}
          id="floatingInput"
          className="form-control"
        />
        <label htmlFor="floatingInput">생년월일을 입력하세요</label>
      </div>
    </div>
  );
};

export default BirthdateForm;
