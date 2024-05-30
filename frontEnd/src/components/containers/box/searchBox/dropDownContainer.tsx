import { useEffect, useState } from "react";
import DropDown from "./dropDown";

/**
 *
 * DropDown Item 눌렀을떄
 * API 호출 내용  변경 생김
 *
 */
export default function DropDownContainer() {
  const firstDropDownItem = "메뉴1";
  const [isDropdownView, setDropdownView] = useState(false);
  const [dropDownItem, changeDropDownItem] = useState(firstDropDownItem);

  const handleClickContainer = () => {
    setDropdownView(!isDropdownView);
  };

  const handleBlurContainer = () => {
    setTimeout(() => {
      setDropdownView(false);
    }, 200);
  };

  const changeSelectedName = (
    event: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    const currentDropDownItem = event.currentTarget.innerText;
    changeDropDownItem(currentDropDownItem);
  };

  return (
    <div className="d-flex  flex-column dropdown" onBlur={handleBlurContainer}>
      <button
        className="btn btn-primary dropdown-toggle"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
        onClick={handleClickContainer}
      >
        {dropDownItem}
      </button>

      {isDropdownView && (
        <DropDown
          firstItem={firstDropDownItem}
          clickEvent={changeSelectedName}
        />
      )}
    </div>
  );
}
