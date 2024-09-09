"use client"; // Add this to make the page a Client Component

import ThreeBackground from './ThreeBackground';


export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Three.js Background */}
      <ThreeBackground />
      
      {/* Foreground Content */}
      <div className="relative z-20 text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Mayank Kumaran</h1>
        <p className="text-lg text-gray-200 mb-6">Software Engineer & AI Enthusiast</p>
        <a href="/about" className="text-blue-400">
          Learn more about me
        </a>
      </div>
    </main>
  );
}
