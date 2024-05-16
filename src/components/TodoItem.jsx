import React from "react";

const TodoItem = ({ id, title, description }) => {
  return (
    <div className="h-48 rounded-sm m-1 p-2 bg-gray-100 w-96 hover:bg-gray-200 overflow-x-auto">
      <div className="mb-1 flex">
        <b className="pr-2">Title:</b>
        <span>{title}</span>
      </div>
      <div className="mb-1 flex">
        <b className="pr-2">Details:</b>
        {description}
      </div>
    </div>
  );
};
export const TodoItemShimmer = () => {
  return (
    <div className="h-48 rounded-sm m-1 p-2 bg-gray-100 w-96 animate-pulse">
      <div className="flex">
        <div className="mr-1 mb-1 h-8 w-1/4  bg-gray-300 rounded-sm"></div>

        <div className="mr-1 mb-1 h-8 w-3/4 bg-gray-300 rounded-sm"></div>
      </div>
      <div className="flex">
        <span className="mr-1 mb-1  h-8 w-2/5  bg-gray-300 rounded-sm"></span>
        <span className="mr-1 mb-1  h-32 w-3/5 bg-gray-300 rounded-sm"></span>
      </div>
    </div>
  );
};
export default TodoItem;
