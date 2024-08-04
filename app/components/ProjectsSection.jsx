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
        tag: ["All", "Others"],
        gitUrl: "https://github.com/JohnRicMerque/chat-bot-response-system",
        previewUrl: "https://www.youtube.com/watch?v=Wn4Hp2Q-8js",
        techStack: ["Python"],
    },
    {
        id: 4,
        title: "H2gether",
        description: "Weather-based water consumption tracking Android application.",
        imgUrl: "/images/projects/h2gether.png",
        tag: ["All", "Mobile"],
        gitUrl: "https://github.com/irishmicoletcando/h2gether-mobile-app",
        previewUrl: "https://github.com/irishmicoletcando/h2gether-mobile-app/blob/main/H2gether%20User%20Manual.pdf",
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
    {
      id: 7,
      title: "Portfolio",
      description: "My personal portfolio website.",
      imgUrl: "/images/projects/portfolio.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/JohnRicMerque/personal_portfolio",
      previewUrl: "./",
      techStack: ["NextJs", "TailwindCSS", "TypeScript"],
    },
    {
      id: 8,
      title: "WHO Suicide Data Analysis",
      description: "Exploratory data analysis of Philippine suicide data.",
      imgUrl: "/images/projects/whosuicide.jpg",
      tag: ["All", "Data"],
      gitUrl: "https://github.com/JohnRicMerque/WHO-suicide-statistics-analysis",
      previewUrl: "https://github.com/JohnRicMerque/WHO-suicide-statistics-analysis/blob/main/exploratory_data_analysis.pdf",
      techStack: ["PySpark", "Tableau", "PostgreSQL"],
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
    <section id='projects' className='lg:px-14 px-4 min-h-screen'>

      <div className='text-white flex flex-row justify-center items-center mt-10 py-6 gap-2'>
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
        <ProjectTag 
            onClick={handleTagChange} 
            name="Others" 
            isSelected={tag === "Others"} 
        />
      </div>
      <ul ref={ref} className='grid grid-cols-2 lg:grid-cols-4'>
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
