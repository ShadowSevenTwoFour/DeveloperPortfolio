"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'; // Import the Image component
import { useRouter } from "next/navigation"; // For navigation
import './about.css';  // Import your custom CSS file

export default function About() {
  const [isFadingIn, setIsFadingIn] = useState(true); // State to manage fade-in
  const router = useRouter(); // Get Next.js router

  // Trigger fade-in when component mounts
  useEffect(() => {
    setIsFadingIn(false); // Remove fade-in when the component mounts
  }, []);

  return (
    <main className={`main-container ${isFadingIn ? 'fade-out' : 'fade-in'}`}>
      {/* About Section */}
      <section className="about-section">
        <h1>About Me</h1>
        <p>
          I&rsquo;m Mayank Kumaran, an Electrical and Computer Engineering student passionate about AI, embedded systems, and high-frequency trading technology.
        </p>
        <p>
          My experience spans machine learning, embedded systems, and web development, including projects like creating an open-source Active Learning package, developing an MQTT client for electric vehicles, and leading the development of a 2D fighter game. I enjoy tackling complex challenges, collaborating on creative solutions, and continuously learning new technologies. When I&apos;m not coding, I enjoy working on game development, mentoring, and exploring the latest in AI and tech.
        </p>
      </section>
    </main>
  );
}
