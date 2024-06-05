import React, { useState } from "react";
import ProjectSideBar from "./ProjectSideBar";
import AddProject from "./AddProject";
import NoProjectSelected from "./NoProjectSelected";

const ProjectHome = () => {
  const [projectState, setProjectState] = useState({
    selectedProject: undefined,
    projects: [],
  });
  const handleAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: null,
      };
    });
  };
  const addNewproject = (projectData) => {
    const projectId = Math.random();
    const tempProjectData = {
      ...projectData,
      id: projectId,
    };
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProject: undefined,
        projects: [...prev.projects, tempProjectData],
      };
    });
  };
  let content;
  if (projectState.selectedProject === null) {
    content = <AddProject addNewproject={addNewproject} />;
  } else if (projectState.selectedProject === undefined) {
    content = <NoProjectSelected addProject={handleAddProject} />;
  }
  return (
    <main>
      <div className="flex">
        <ProjectSideBar
          projectList={projectState.projects}
          addProject={handleAddProject}
        />
        {content}
      </div>
    </main>
  );
};

export default ProjectHome;
