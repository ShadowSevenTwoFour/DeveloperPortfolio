"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation"; // For routing
import Link from "next/link"; // Import Link component for client-side navigation
import "./globals.css";

export default function RootLayout({ children }) {
  const [isFadingOut, setIsFadingOut] = useState(false); // State for managing fade-out animation
  const [isAtTop, setIsAtTop] = useState(true); // State for managing scroll position
  const pathname = usePathname(); // Get the current path
  const router = useRouter(); // Next.js router to handle programmatic navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // Update the header visibility based on scroll position
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Reset fade-out state on route change completion
  useEffect(() => {
    setIsFadingOut(false); // Ensure the fade-out state is reset after the new page loads
  }, [pathname]);

  // Function to handle navigation with fade-out effect
  const handleNavigation = (url) => {
    if (url === pathname) {
      return; // If the user clicks the same link, do nothing
    }

    setIsFadingOut(true); // Trigger the fade-out effect for the content
    setTimeout(() => {
      router.push(url); // Perform the navigation after the fade-out effect
    }, 500); // Match this with your CSS transition duration
  };

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Conditionally render the header if not on the home page */}
        {pathname !== "/" && (
          <header
            className={`fixed top-0 left-0 w-full transition-transform duration-300 ease-in-out bg-black text-white z-20 ${
              isAtTop ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
              <div className="text-2xl font-bold">Mayank Kumaran</div>
              <ul className="flex space-x-4">
                <li>
                  <button
                    onClick={() => handleNavigation("/")}
                    className="hover:underline"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/about")}
                    className="hover:underline"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigation("/projects")}
                    className="hover:underline"
                  >
                    Projects
                  </button>
                </li>
              </ul>
            </nav>
          </header>
        )}

        {/* Page-specific content with fade-out effect */}
        <main
          className={`transition-opacity duration-500 ease-in-out ${
            isFadingOut ? "opacity-0" : "opacity-100"
          } ${pathname !== "/" ? "mt-[64px]" : ""}`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
