import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";
import Panel from "./Panel";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionClick = (option) => {
        // CLOSE DROPDOWN
        setIsOpen(false);
        // WHAT OPTION DID THE USER CLICK ON???
        onChange(option);
    };

    const renderedOptions = options.map((option) => {
        return <div className="hover:bg-sky-100 rounded cursor-pointer p-1" onClick={() => handleOptionClick(option)} key={option.value}>
            {option.label}
        </div>
    });

    const icon = 
    <span className="text-lg">
        {isOpen ? <GoChevronDown /> : <GoChevronLeft />}
    </span>

    return (
        <div className="w-48 relative">
            <Panel 
            className="flex justify-between items-center cursor-pointer" onClick={handleClick}
            >
                {value?.label || 'Select...'}
                {/* <GoChevronDown className="text-lg" /> */}
                {icon}
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">
                    {renderedOptions}
                </Panel>
                )}
        </div>
    )
}

export default Dropdown;