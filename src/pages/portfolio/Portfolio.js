import React from "react";
import ProjectItem from "../../components/ProjectItem";
import { Grid } from '@mui/material'
// import ProjectCard from "../../components/Project-Card/index";
// import ProjectData from '../../project-data.json'
// import './portfolio.css'


function Portfolio() {
  const projects = [
    {
      title: 'The Golf Group',
      description: 'App that tracks golf progress between friends',
      image: 'theGolfGroup.png'
    },
    {
      title: 'PG Paints',
      description: 'E-commerce platform selling the art of upcoming artist Phil Green',
      image: 'pgPaint.png'
    }, 
    {
      title: 'Globey', 
      description: 'App to help children learn about different countries', 
      image: 'globey.png'
    }

  ]
  // const [projects, setProject] = useState(ProjectData);

  return (
    <Grid container spacing={2}>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4}>
          <ProjectItem {...project} />
        </Grid>
      ))}
    </Grid>
  );
}

export default Portfolio;
