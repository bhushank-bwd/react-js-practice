import React from "react";

const ProjectSideBar = ({ projectList, addProject, selectProject }) => {
  return (
    <div className="w-1/4 text-white bg-black p-2 h-full">
      <aside>
        <h2 className="m-2">Projects</h2>
        <div className=" m-2">
          <button
            onClick={addProject}
            className="w-full  p-2 bg-amber-200 text-black rounded-sm"
          >
            + Add Project
          </button>
        </div>
        <menu>
          {projectList?.map((project) => {
            return (
              <li onClick={() => selectProject(project.id)} key={project.id}>
                {project.title}
              </li>
            );
          })}
        </menu>
      </aside>
    </div>
  );
};

export default ProjectSideBar;
