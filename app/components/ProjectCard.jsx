import React from 'react'

const ProjectCard = ({imgUrl, title, description}) => {
  return (
    <div>
      <div className='h-52 md:h-72' style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover"}}>
      </div>
      <div className="text-white">
        <h5>{title}</h5>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard
