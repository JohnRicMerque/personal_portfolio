"use client";
import React, { useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectData = [
    {
        id: 1,
        title: "Covid Rush",
        description: "COVID-19 sidescrolling runner evasion game.",
        imgUrl: "/images/projects/covidrush.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/covidRush",
        previewUrl: "https://covid-rush-gamma.vercel.app/",
    },
    {
        id: 2,
        title: "Space Shooter",
        description: "Space-themed game where you shoot aliens.",
        imgUrl: "/images/projects/burgeralienshooter.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/space-shooter-game",
        previewUrl: "https://space-shooter-game-kappa.vercel.app/",
    },
    {
        id: 3,
        title: "Johnny Discord Bot",
        description: "Discord chatbot that can tell jokes, trivias quotes, personal details, and weather.",
        imgUrl: "/images/projects/johnny.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/JohnRicMerque/chat-bot-response-system",
        previewUrl: "https://www.youtube.com/watch?v=Wn4Hp2Q-8js",
    },
    {
        id: 4,
        title: "H2gether",
        description: "Android application designed to promote healthy water consumption habits.",
        imgUrl: "/images/projects/h2gether.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/irishmicoletcando/h2gether-mobile-app",
        previewUrl: "https://github.com/irishmicoletcando/h2gether-mobile-app",
    },
    {
        id: 5,
        title: "PUP Interactive Map",
        description: "Interactive map of Polytechnic University of the Philippines Main Campus.",
        imgUrl: "/images/projects/pupmap.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/pup-interactive-map",
        previewUrl: "https://pup-interactive-map.vercel.app/",
    },
    {
        id: 6,
        title: "Calculator",
        description: "Calculator built using HTML, CSS, JavaScript.",
        imgUrl: "/images/projects/calculator.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/simple-calculator",
        previewUrl: "https://simple-calculator-omega.vercel.app/",
    },
    
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const handleTagChange = (newTag) => {
    setTag(newTag)
    };

  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );
  
  return (
    <>
      <h2 className='text-center text-white text-4xl font-bold mt-4 mb-4'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
        <ProjectTag 
            onClick={handleTagChange} 
            name="All" 
            isSelected={tag === "All"} 
        />
        <ProjectTag 
            onClick={handleTagChange} 
            name="Web" 
            isSelected={tag === "Web"} 
        />
        <ProjectTag 
            onClick={handleTagChange} 
            name="Mobile" 
            isSelected={tag === "Mobile"} 
        />
        <ProjectTag 
            onClick={handleTagChange} 
            name="Data" 
            isSelected={tag === "Data"} 
        />
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => (
            <ProjectCard 
              key={project.id} 
              title={project.title} 
              description={project.description} 
              imgUrl={project.imgUrl}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
        ))}
      </div>
    </>
  )
}

export default ProjectsSection
