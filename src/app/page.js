"use client";

import { useRouter } from "next/navigation"; // Import useRouter for route control
import { useState } from "react";
import ThreeBackground from './ThreeBackground';
import './home.css'; // Import the home.css stylesheet

export default function Home() {
  const [isFadingOut, setIsFadingOut] = useState(false); // State to manage fade-out
  const router = useRouter(); // Get the Next.js router

  // Handle navigation with fade-out effect and delay
  const handleNavigation = (url) => {
    setIsFadingOut(true); // Trigger fade-out animation
    setTimeout(() => {
      router.push(url); // Navigate to the new route after the fade-out completes
    }, 500); // Match this delay with your CSS transition duration (500ms in this case)
  };

  return (
    <main className={`relative min-h-screen flex flex-col items-center justify-center overflow-hidden 
      ${isFadingOut ? "fade-out" : "fade-in"}`}>
      {/* Three.js Background */}
      {<ThreeBackground />}
      
      {/* Foreground Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-6xl font-bold mb-4 custom-text-color">Mayank Kumaran</h1>
        <p className="text-lg mb-6 custom-text-color">Software Developer</p>
        
        {/* Buttons with custom class names */}
        <button className="custom-button" onClick={() => handleNavigation("/about")}>
          About Me
        </button>

        <button className="custom-button" onClick={() => handleNavigation("/projects")}>
          Projects
        </button>
      </div>
    </main>
  );
}
