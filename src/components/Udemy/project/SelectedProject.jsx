import React from "react";

const SelectedProject = ({ project, deleteProject }) => {
  return (
    <div>
      <h1>
        <b>Title:</b>
        {project.title}
      </h1>
      <p>
        <b>Description:</b>
        {project.description}
      </p>
      <small>
        <b>Date:</b>
        {project.date}
      </small>
      <button
        onClick={deleteProject}
        className="w-fit rounded-sm m-1 p-2 text-white bg-red-600"
      >
        Delete
      </button>
    </div>
  );
};

export default SelectedProject;
