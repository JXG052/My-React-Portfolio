import React, {useState} from "react";
import ProjectCard from "../../components/Project-Card/index";
import ProjectData from '../../project-data.json'

function Portfolio() {
  
  const [projects, setProject] = useState(ProjectData);
  console.log(projects[0].title)
  return (
    <div>
        <ProjectCard
            title = {projects[0].title}
            deployed = {projects[0].deployed}
            repo = {projects[0].repo}
            image = {projects[0].image}
            tech = {projects[0].tech}
          />
    </div>);
}

export default Portfolio;
