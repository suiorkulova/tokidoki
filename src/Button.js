import React from "react";

const Buttonclick = ({ label}) => {
  const myStyle = {
    width: "270px",
    height: "52px",
    borderRadius: "68px",
    backgroundColor: " #DD392B",
    color: "white",
    border: "none",
    fontSize: "18px",

  };
  return <button style={myStyle}>{label}</button>;
};

export default Buttonclick;