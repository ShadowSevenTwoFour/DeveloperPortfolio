"use client";

import { useState, useEffect } from "react";
import Image from 'next/image';
import './projects.css';  // Import your custom CSS file

export default function Projects() {
  const [isFadingIn, setIsFadingIn] = useState(true); // State to manage fade-in

  // Trigger the fade-in animation when the component mounts
  useEffect(() => {
    setIsFadingIn(false); // After the component mounts, apply fade-in
  }, []);

  // Sample project data for rendering
  const projects = [
    {
      title: "Mammoth Melee",
      description: "A retro-style 2D fighter game that consists of players using 'mammoth' sized weapons to fight each other.",
      imageSrc: "/mammoth-melee-home.png",
      link: "https://github.com/ShadowSevenTwoFour/Mammoth-Melee"
    },
    {
      title: "RFID Scanner",
      description: "Developed an RFID scanner using Arduino and ESP32 to scan NFC tags and securely log data to a SQL database.",
      imageSrc: "/rfid-nfc-scanner.png",
      link: "https://github.com/ShadowSevenTwoFour/RFID-NFC-Scanner"
    },
    {
      title: "FPGA-Based Super Mario Bros NES",
      description: "Recreated Super Mario Bros for the NES (with some fun course-specific tweaks) on an FPGA using VHDL and a VGA display.",
      imageSrc: "/fpga-mario.png",
      link: "https://github.com/ShadowSevenTwoFour/Super-Mario-Bros-L1"
    },
    {
      title: "RC Car",
      description: "Made an RC car in a team of 4 using an Arduino Uno, a bluetooth controller, and Fusion360 for CAD.",
      imageSrc: "/rc-car.png",
      link: "https://github.com/ShadowSevenTwoFour/RC-Car"
    }
  ];

  return (
    <main className={`min-h-screen flex flex-col items-center p-8 ${isFadingIn ? 'fade-out' : 'fade-in'}`}>
      {/* Anchor the title at the top of the page */}
      <h1 className="text-3xl font-bold mb-8 top-0 bg-gray w-full text-center p-4 z-10">
        Projects
      </h1>

      {/* Vertical Scroll Projects Column */}
      <div className="flex flex-col w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-container ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
          >
            <div className="w-1/2">
              <Image
                src={project.imageSrc}
                alt={project.title}
                width={500}
                height={192}
                className="project-image w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col justify-center project-text p-4 w-1/2">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-600 dark:text-gray-400 mt-2">{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Image
                  src="/github-logo.png" // Path to your GitHub logo image
                  alt="GitHub Link"
                  width={64} // Adjust width as needed
                  height={64} // Adjust height as needed
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}

