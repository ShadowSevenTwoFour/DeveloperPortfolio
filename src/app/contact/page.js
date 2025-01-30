"use client";

import { useState, useEffect } from "react";
import Image from 'next/image'; // Import the Image component
import { useRouter } from "next/navigation"; // For navigation
import './contact.css';  // Import your custom CSS file

export default function Contact() {
  const [isFadingIn, setIsFadingIn] = useState(true); // State to manage fade-in
  const router = useRouter(); // Get Next.js router

  // Trigger fade-in when component mounts
  useEffect(() => {
    setIsFadingIn(false); // Remove fade-in when the component mounts
  }, []);

  return (
    <main className={`main-container ${isFadingIn ? 'fade-out' : 'fade-in'}`}>
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-left">
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
        </div>

        <div className="contact-right">
          {/* Resume Button */}
          <button 
            className="resume-button" 
            onClick={() => window.open('/Mayank_Kumaran_SP25_Resume.pdf', '_blank')}
          >
            Download My Resume
          </button>
        </div>
      </section>
    </main>
  );
}
