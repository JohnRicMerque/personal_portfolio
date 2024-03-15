"use client";
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion"


const projectData = [
    {
        id: 1,
        title: "Covid Rush",
        description: "COVID-19 sidescrolling runner evasion game.",
        imgUrl: "/images/projects/covidrush.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/covidRush",
        previewUrl: "https://covid-rush-gamma.vercel.app/",
        techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 2,
        title: "Space Shooter",
        description: "Space-themed game where you shoot aliens.",
        imgUrl: "/images/projects/burgeralienshooter.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/space-shooter-game",
        previewUrl: "https://space-shooter-game-kappa.vercel.app/",
        techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 3,
        title: "Johnny Discord Bot",
        description: "Discord chatbot tells jokes, trivias, quotes,and weather.",
        imgUrl: "/images/projects/johnny.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/JohnRicMerque/chat-bot-response-system",
        previewUrl: "https://www.youtube.com/watch?v=Wn4Hp2Q-8js",
        techStack: ["Python"],
    },
    {
        id: 4,
        title: "H2gether",
        description: "Android application designed to promote healthy water consumption habits.",
        imgUrl: "/images/projects/h2gether.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/irishmicoletcando/h2gether-mobile-app",
        previewUrl: "https://github.com/irishmicoletcando/h2gether-mobile-app",
        techStack: ["Kotlin", "Firebase"],
    },
    {
        id: 5,
        title: "PUP Interactive Map",
        description: "Interactive map of PUP Main Campus.",
        imgUrl: "/images/projects/pupmap.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/pup-interactive-map",
        previewUrl: "https://pup-interactive-map.vercel.app/",
        techStack: ["HTML", "CSS", "JavaScript"],
    },
    {
        id: 6,
        title: "Calculator",
        description: "Calculator built using HTML, CSS, JavaScript.",
        imgUrl: "/images/projects/calculator.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/JohnRicMerque/simple-calculator",
        previewUrl: "https://simple-calculator-omega.vercel.app/",
        techStack: ["HTML", "CSS", "JavaScript"],
    },
    
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); 

  const handleTagChange = (newTag) => {
    setTag(newTag)
    };

  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0},
    animate: { y: 0, opacity: 1 },
  }
  
  return (
    <section id='projects'>
      <h2 className='text-center text-white text-2xl font-bold my-1'>
        My Projects
      </h2>
      <div className='text-white flex flex-row justify-center items-center py-6 gap-2'>
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
      <ul ref={ref} className='grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10'>
        {filteredProjects.map((project, index) => (
            <motion.li
              key={index} 
              variants={cardVariants} 
              initial="initial" 
              animate={isInView ? "animate" : "initial"}
              transition={{duration: 0.3, delay: (index + 1) * 0.3}}
            >
              <ProjectCard 
                key={project.id} 
                title={project.title} 
                description={project.description} 
                imgUrl={project.imgUrl}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                techStack={project.techStack}
              />
            </motion.li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectsSection
