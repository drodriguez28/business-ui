import React from "react";
import { Dropdown, DropdownItem } from "flowbite-react";

export const DropdownFlowbite = ({ label, options, value, onChange }) => {
  return (
     <Dropdown label={value || label}>
      {options.map((option) => (
        <DropdownItem key={option} onClick={() => onChange(option)}>
          {option}
        </DropdownItem>
      ))}
    </Dropdown>
  );
};
