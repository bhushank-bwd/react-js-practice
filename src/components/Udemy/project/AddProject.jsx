import React, { useRef } from "react";

const AddProject = ({ addNewproject }) => {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dateRef = useRef();
  const addNewprojectHandle = () => {
    const title = titleRef.current.value;
    const desc = descriptionRef.current.value;
    const date = dateRef.current.value;
    addNewproject({
      title: title,
      description: desc,
      date: date,
    });
  };
  return (
    <div className="m-5">
      <div className="mb-5">
        <label className="w-1/5">Name</label>
        <input
          ref={titleRef}
          name="title"
          className="w-4/5 rounded-md text-black p-2 ms-1 outline-1 border border-gray-500"
        />
      </div>
      <div className="mb-2">
        <label className="w-1/5">Description</label>
        <input
          ref={descriptionRef}
          name="description"
          className="w-4/5 rounded-md text-black p-2 ms-1 outline-1 border border-gray-500"
        />
      </div>
      <div className="mb-2">
        <label className="w-1/5">date</label>
        <input
          ref={dateRef}
          type="date"
          name="date"
          className="w-4/5 rounded-md text-black p-2 ms-1 outline-1 border border-gray-500"
        />
      </div>
      <div>
        <button
          onClick={addNewprojectHandle}
          className="w-1/3  rounded-sm m-1 p-2 bg-amber-200 text-black"
        >
          Save
        </button>
        <button className="w-1/3   rounded-sm m-1 p-2 bg-amber-200 text-black">
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddProject;
