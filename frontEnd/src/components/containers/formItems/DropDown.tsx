import React, { useState, useRef, useEffect } from "react";

interface DropdownProps {
  options: { value: string; label: string }[];
  selected: string;
  onChange: (value: string) => void;
}

const Dropdown = ({ options, selected, onChange }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => setIsOpen(!isOpen);

  const handleOptionClick = (value: string) => {
    onChange(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" ref={dropdownRef}>
      <div
        className={`select ${isOpen ? "select-clicked" : ""}`}
        onClick={handleToggle}
      >
        <span className="selected">
          {options.find((option) => option.value === selected)?.label}
        </span>
        <div className={`caret ${isOpen ? "caret-rotate" : ""}`}></div>
      </div>
      <ul className={`menu ${isOpen ? "menu-open" : ""}`}>
        {options.map((option) => (
          <li
            key={option.value}
            className={option.value === selected ? "active" : ""}
            onClick={() => handleOptionClick(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
