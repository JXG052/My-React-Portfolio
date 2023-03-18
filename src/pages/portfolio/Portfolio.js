import React, {useState} from "react";
import ProjectCard from "../../components/Project-Card/index";
import ProjectData from '../../project-data.json'
import './portfolio.css'


function Portfolio() {
  
  const [projects, setProject] = useState(ProjectData);
  
  return (
    <div className="project-grid">
      {projects.map((project) => (
        <ProjectCard
            key = {project.key}
            title = {project.title}
            deployed = {project.deployed}
            repo = {project.repo}
            image = {project.image}
            tech = {project.tech}
          />
      )
      )}

    </div>);
}

export default Portfolio;
