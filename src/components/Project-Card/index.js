import React from 'react'
import './style.css'


function ProjectCard(props){
    return (
        <div className='project-card'>
            <div className='img-container'>
            <img alt={props.title} src={props.image} />
            </div>
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