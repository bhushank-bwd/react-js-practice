import React, { useState } from "react";
import ProjectSideBar from "./ProjectSideBar";
import AddProject from "./AddProject";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProject";

const ProjectHome = () => {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  const handleAddProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: null,
      };
    });
  };
  const handleDeleteProject = () => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: undefined,
        projects: prev.projects.filter(
          (project) => project.id !== prev.selectedProjectId
        ),
      };
    });
  };
  const handleSelectProject = (id) => {
    setProjectState((prev) => {
      return {
        ...prev,
        selectedProjectId: id,
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
        selectedProjectId: undefined,
        projects: [...prev.projects, tempProjectData],
      };
    });
  };
  const selctedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selctedProject}
      deleteProject={handleDeleteProject}
    />
  );
  if (projectState.selectedProjectId === null) {
    content = <AddProject addNewproject={addNewproject} />;
  } else if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected addProject={handleAddProject} />;
  }
  return (
    <main>
      <div className="flex">
        <ProjectSideBar
          projectList={projectState.projects}
          addProject={handleAddProject}
          selectProject={handleSelectProject}
        />
        {content}
      </div>
    </main>
  );
};

export default ProjectHome;
