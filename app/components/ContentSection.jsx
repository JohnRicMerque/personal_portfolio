import React from 'react'
import HeroSection from "./HeroSection"
import AboutSection from "./AboutSection"
import ProjectsSection from "./ProjectsSection"
import ContactSection from  './ContactSection'

const ContentSection = ({ section }) => {
    let sectionComponent;
  
    switch (section) {
      case "HeroSection":
        sectionComponent = <HeroSection/>;
        break;
      case "AboutSection":
        sectionComponent = <AboutSection />;
        break;
      case "ProjectsSection":
        sectionComponent = <ProjectsSection />;
        break;
      case "ContactSection":
        sectionComponent = <ContactSection />;
        break;
      default:
        sectionComponent = null;
    }
  
    return sectionComponent;
  };
  
  

export default ContentSection
