import React from "react";
import ComponentBasics1 from "./ComponentBasics1";

const ComponentBasics2 = () => {
  return (
    <>
      <ComponentBasics1
        UlElement="ul"
        buttonElement={
          <button className="border-2 text-white border-red-700 p-2 w-32 m-2 bg-red-500 rounded-sm">
            See UL List
          </button>
        }
      >
        {/* UlElement => pass string as tag name  */}
        {/* buttonElement => pass jsx as props */}
        <li className="p-2">First Element</li>
        <li className="p-2">Second Element</li>
        {/* pass li as childern which is jsx */}
      </ComponentBasics1>
    </>
  );
};

export default ComponentBasics2;
