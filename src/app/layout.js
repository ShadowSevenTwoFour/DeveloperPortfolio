"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation"; // To track route changes
import "./globals.css";

export default function RootLayout({ children }) {
  const [isAtTop, setIsAtTop] = useState(true);
  const pathname = usePathname(); // Get current path

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <html lang="en">
      <body className="bg-background text-foreground">
        {/* Conditionally render the header only if not on the home page */}
        {pathname !== "/" && (
          <header
            className={`fixed top-0 left-0 w-full transition-transform duration-300 bg-black text-white z-20 ${
              isAtTop ? "translate-y-0" : "-translate-y-full"
            }`}
          >
            <nav className="flex justify-between items-center max-w-7xl mx-auto p-4">
              <div className="text-2xl font-bold">Mayank Kumaran</div>
              <ul className="flex space-x-4">
                <li>
                  <a href="/" className="hover:underline">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="hover:underline">
                    About
                  </a>
                </li>
                <li>
                  <a href="/projects" className="hover:underline">
                    Projects
                  </a>
                </li>
              </ul>
            </nav>
          </header>
        )}

        {/* Page-specific content */}
        <main className={pathname !== "/" ? "mt-[64px]" : ""}>
          {children}
        </main>
      </body>
    </html>
  );
}
