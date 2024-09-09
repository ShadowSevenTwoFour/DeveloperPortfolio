"use client"; // Add this to make the page a Client Component

import Link from 'next/link';
import ThreeBackground from './ThreeBackground';
import './home.css'; // Import the home.css stylesheet

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      {<ThreeBackground />}
      
      {/* Foreground Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-6xl font-bold mb-4 custom-text-color">Mayank Kumaran</h1>
        <p className="text-lg mb-6 custom-text-color">Software Developer</p>
        
        {/* Buttons with custom class names */}
        <Link href="/about">
          <button className="custom-button">
            About Me
          </button>
        </Link>

        <Link href="/projects">
          <button className="custom-button">
            Projects
          </button>
        </Link>
      </div>
    </main>
  );
}
