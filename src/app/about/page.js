"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'; // Import the Image component
import { useRouter } from "next/navigation"; // For navigation
import './about.css';  // Import your custom CSS file

export default function AboutContact() {
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

      {/* Contact Section */}
      <section className="contact-section">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out if you&apos;d like to collaborate on a project, have any questions, or just want to say hi!
        </p>
        <div className="contact-details">
          {/* Email */}
          <a href="mailto:kumaranmayank.work@gmail.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/email-logo.png"  // Path to your email icon
              alt="Email"
              width={64}  // Adjust width as needed
              height={64}  // Adjust height as needed
            />
          </a>
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/mayank-kumaran-b45344236/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/linkedin-logo.png"  // Path to your LinkedIn icon
              alt="LinkedIn"
              width={64}  // Adjust width as needed
              height={64}  // Adjust height as needed
            />
          </a>
          {/* GitHub */}
          <a href="https://github.com/ShadowSevenTwoFour" target="_blank" rel="noopener noreferrer">
            <Image
              src="/github-logo.png"  // Path to your GitHub icon
              alt="GitHub"
              width={64}  // Adjust width as needed
              height={64}  // Adjust height as needed
            />
          </a>
        </div>
      </section>
    </main>
  );
}
