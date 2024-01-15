import "./ProjectCard.css";
import React from 'react';
import { NavLink } from "react-router-dom";

const ProjectCard = (props) => {
  return (
    <div className="project-card">
      
      {/* <video autoPlay muted width={500} height={400}>
       <source src={props.imgsrc} />;
       </video> */}
           <img src={props.imgsrc} alt="project-img"/>
           <h2 className="project-title">{props.title}</h2>
           <div className="project-details">
            <p>{props.text}</p>
            <div className="pro-btns">
                <NavLink to={props.view} className="btn">View</NavLink>
                <NavLink to={props.source} className="btn">Source</NavLink>
            </div>
           </div>
        </div>
  )
}

export default ProjectCard;
