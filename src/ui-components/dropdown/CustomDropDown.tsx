import React, { useState } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  CustomDropdownContainer,
  CustomDropdownList,
  CustomDropdownItem,
  CustomSearchInput,
  CustomIconContainer,
  CustomDropdownInput,
} from "./CustomDropDown.styled";

interface CustomDropdownProps {
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
  width: string;
  dropdownWidth:string;
  listWidth: string;
  iconRight: string;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  options,
  placeholder,
  onChange,
  width,
  dropdownWidth,
  listWidth,
  iconRight
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);

  const filteredOptions = options.filter((option) =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleToggleDropdown = () => setIsOpen((prev) => !prev);
  const handleSelectOption = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    onChange(option);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(e.target.value);

  return (
    <CustomDropdownContainer>
      <CustomDropdownInput
        hasIcon={true}
        width={dropdownWidth}
        onClick={handleToggleDropdown}
        readOnly
        value={selectedOption || placeholder}
      />
      <CustomIconContainer onClick={handleToggleDropdown} right={iconRight}>
        <IoMdArrowDropdown
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
          }}
        />
      </CustomIconContainer>
      {isOpen && (
        <>
          <CustomDropdownList width={listWidth}>
            <CustomSearchInput
              type="text"
              placeholder="Search..."
              value={searchTerm}
              width={width}
              onChange={handleSearchChange}
            />
            {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <CustomDropdownItem
                key={index}
                onClick={() => handleSelectOption(option)}
                role="option" // ARIA for accessibility
                aria-selected={selectedOption === option} // ARIA for accessibility
              >
                {option}
              </CustomDropdownItem>
            ))
            ) : (
              <CustomDropdownItem>No options available</CustomDropdownItem>
            )}
          </CustomDropdownList>
        </>
      )}
    </CustomDropdownContainer>
  );
};

export default CustomDropdown;
