import React, { useState } from "react";
import "./index.css";

// The code below contains a constant map that contains the images in the dropdown in the webpage
const options = [
  { value: "Immune", image: "./cell_0.png" },
  { value: "VSMC1", image: "/cell_1.png" },
  { value: "Endothelial 1", image: "/cell_2.png" },
  { value: "Endothelial 2", image: "/cell_3.png" },
  { value: "Neuronal", image: "/cell_4.png" },
  { value: "VSMC 2", image: "/cell_5.png" },
  { value: "Macrophage", image: "/cell_6.png" },
  { value: "Endothelial 3", image: "/cell_7.png" },
  { value: "Fibroblast 1", image: "/cell_8.png" },
  { value: "Fibroblast 2", image: "/cell_9.png" },
];

// The code below contains the functionality of the drop-down box
function CellDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (option) => () => {
    setSelectedOption(option);
    setIsOpen(false);
    console.log(selectedOption);
  };

  const placeholder = (
    <div className="placeholder">Choose a cell type with the dropdown</div>
  );

  return (
    <div className="main">
      <div className="dropdown-container">
        <div className="dropdown-header" onClick={toggling}>
          {selectedOption == null ? "Cell type" : selectedOption.value}
        </div>
        {isOpen && (
          <>
            <ul className="dropdown-list">
              {options.map((option, index) => {
                return (
                  <li
                    className="list-item"
                    onClick={onOptionClicked(option)}
                    key={index}
                  >
                    {option.value}
                  </li>
                );
              })}
            </ul>
          </>
        )}
      </div>
      <div className="image-container">
        {selectedOption == null ? (
          placeholder
        ) : (
          <img className="images" src={selectedOption.image} />
        )}
      </div>
    </div>
  );
}

export default CellDropdown;
