import React from 'react'
import './style.css'



function ProjectCard(props){
    console.log(props);
    return (
        <div className='project-card'>
            
            <img src={props.image} alt={props.title}></img>
           
            <div className="content">
                <ul>
                <li>
                    <strong>Project Title:</strong> {props.title}
                </li>
                <li>
                    <strong>Link to Repo:</strong> {props.repo}
                </li>
                <li>
                    <strong>Link to Deployed site:</strong> {props.deployed}
                </li>
                <li>
                    <strong>Tech Used:</strong> {props.tech}
                </li>
                </ul>
            </div>
        </div>
    )
}

export default ProjectCard