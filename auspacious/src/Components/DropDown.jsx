import React from "react";

const DropdownContent = ({ isOpen }) => {
  const dropdownStyle = {
    position: "absolute",
    width:"183px",
    top: "50px", 
    left: "0",
    textAlign:"center",
    fontSize:"20px",
    backgroundColor: "#d1ced5",
    border: "1px solid #ccc",
    padding: "10px",
    display: isOpen ? "block" : "none",
    zIndex: 1,
  };

  return (
    <div style={dropdownStyle}>
      <p>Orders</p>
      <p>SKU's</p>
    </div>
  );
};

export default DropdownContent;
