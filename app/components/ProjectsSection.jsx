import React from 'react'
import ProjectCard from './ProjectCard'

const projectData = [
    {
        id: 1,
        title: "Covid Rush",
        description: "A COVID-19 sidescrolling runner evasion game.",
        imgUrl: "/images/projects/covidrush.png",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Space Shooter",
        description: "A space-themed game where you shoot aliens.",
        imgUrl: "/images/projects/burgeralienshooter.png",
        tag: ["All", "Web"]
    },
    {
        id: 3,
        title: "Johnny Discord Bot",
        description: "A discord chatbot that can tell jokes, trivias quotes, weather and answer personal questions.",
        imgUrl: "/images/projects/johnny.png",
        tag: ["All", "Web"]
    },
    
]

const ProjectsSection = () => {
  return (
    <>
      <h2 className='text-center text-white text-4xl font-bold mt-4 mb-4'>
        My Projects
      </h2>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {projectData.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              imgUrl={project.imgUrl}
            />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection
