import React from "react";

const ComponentBasics1 = ({ UlElement, children, buttonElement }) => {
  return (
    <>
      {buttonElement}
      <UlElement>{children}</UlElement>
    </>
  );
};

export default ComponentBasics1;
