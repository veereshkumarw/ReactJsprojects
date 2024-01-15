import "./ProjectCard.css";
import React from 'react';
import ProjectCard from "./ProjectCard";
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div className="m-container">
      <h1 className="project-heading">
        Projects
      </h1>
      <div className="project-container">
      {WorkCardData.map((val,ind) => {
        return(
            <ProjectCard
            key={ind}
            imgsrc={val.imgsrc}
            title={val.title}
            text={val.text}
            view={val.view}
            source={val.source}
            />
        );
      })}
      </div>
    </div>
  )
}

export default Work;
