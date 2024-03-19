"use client"
import Navbar from "./components/Navbar"
import Footer from './components/Footer'
import ContentSection from "./components/ContentSection"
import React, { useState, useRef } from 'react';

export default function Home() {
  const [currentSection, setCurrentSection] = React.useState("HeroSection")

  return (
    <main className="flex min-h-screen flex-col bg-[#121212] overflow-hidden">
      <Navbar setCurrentSection={setCurrentSection} />
      <ContentSection section={currentSection} />
      {/* <Footer /> */}
    </main>
  )
}