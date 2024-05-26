"use client";

import { useState } from "react";
import { initYear } from "@data/const";

interface itemProps {
  onChange: (value: number) => void;
}

// 1. 년도 드롭다운 ~ 1950 ~ 2005까지  55년치
// 년도 배열 string 배열로 해서 부모 컴포넌트에서 전달할때 number로 바꾸자
// input 태그 처음 눌렀을시 처음은 모든 항목을 보여준다.
// 그냥 키보드로 쳤을시 배열에 있는 항목과 같음을 체크한다

// 배열에 없는 값을 입력하면 에러 처리한다.
// 빈 값이라면 에러 처리를 한다.

export const startYear = 1950;
export const endYear = 2005;
const yearsArray = Array.from({ length: endYear - startYear + 1 }, (_, index) =>
  (startYear + index).toString()
);

export default function ExtendedDropdown({ onChange }: itemProps) {
  const [inputValue, setInputValue] = useState<string>(initYear);
  const [matchedItems, setMatchedItems] = useState<string[]>([]);
  const [check, setCheck] = useState<boolean>(false);
  const [alertSetence, setAlertSentence] = useState("");

  // 맞는 조건일때 afterEnter 사용
  const afterEnter = (selecteditem: string) => {
    setInputValue(selecteditem);
    setMatchedItems([]);

    const yearItem = parseInt(selecteditem);
    onChange(yearItem);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);

    const nowYearsArray = yearsArray.filter((year) => year.includes(value));
    setMatchedItems(nowYearsArray);

    // 자동완성 눌렀을시  항목 안에 존재한다면
    if (matchedItems.includes(value)) {
      afterEnter(value);
      setCheck(true);
      return;
    }

    // 항목 안에 존재하지 않는다면
    // if (!yearsArray.includes(inputValue)) {
    //   setAlertSentence("연도를 다시 확인해주세요");
    // }
    setCheck(false);
  };

  /** 클릭했을때 일어나는 이벤트이다. */
  const handleitemClick = (item: string) => {
    afterEnter(item);
  };

  /**폼 제출시, 엔터시 실행되는 함수이다. */
  const autoCompletion = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // if (matchedItems.length == 1) {
    //   let item = matchedItems[0];
    //   setCheck(true);
    //   afterEnter(item);
    //   return;
    // }
    if (yearsArray.includes(inputValue)) {
      setCheck(true);
      afterEnter(inputValue);
    }

    /**
     * 배열에 없는 연도를 작성했을시
     */
    if (!yearsArray.includes(inputValue)) {
      setAlertSentence("연도를 다시 확인해주세요");
    }
  };

  return (
    <div className="item-component">
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => autoCompletion(e)}
        className="form-floating"
      >
        <input
          type="text"
          className="form-control"
          id="floatingInputValue"
          value={inputValue}
          onChange={handleInputChange}
        />
        <label htmlFor="floatingInputValue">출생연도를 입력해주세요</label>

        {/* 예시항목  list-group-container */}
        <div className={`list-group-container`}>
          <ul className="list-group">
            {matchedItems.map((item, index) => (
              <li
                key={index}
                className={`list-group-item`}
                onClick={() => handleitemClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </form>

      {check ? "" : alertSetence}

      {/* {<div>{alert ? ""}을 다시 확인해주세요 </div>} */}
    </div>
  );
}
