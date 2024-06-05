import React from "react";

const NoProjectSelected = ({ addProject }) => {
  return (
    <div>
      No Project Selected
      <button
        onClick={addProject}
        className="w-full  p-2 bg-amber-200 text-black rounded-sm"
      >
        + Add Project
      </button>
    </div>
  );
};

export default NoProjectSelected;
