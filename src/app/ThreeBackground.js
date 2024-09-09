"use client"; // Ensure this is treated as a Client Component

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene, Camera, and Renderer Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    // Geometry for points and lines
    const pointsGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = []; // Array to store color data for each point
    const velocities = []; // To store velocity for each point
    const numPoints = 300; // Number of points

    // Cursor position in 2D screen space (we will convert this to world space)
    const cursorPosition = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();

    // Radius within which nodes will light up
    const lightUpRadius = 30;

    // Helper function to create colors (lit-up or not)
    function createColor(isLit) {
      const color = new THREE.Color();
      if (isLit) {
        color.set(0x30e6ff); // Bright yellow for "lit-up" points
      } else {
        color.set(0x197885); // Light blue for normal points
      }
      return color;
    }

    // Randomly generate positions for points and set small random velocities
    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 100 - 50;
      const z = Math.random() * 100 - 50;
      positions.push(x, y, z);

      // Initially, all points are unlit (blue)
      const color = createColor(false);
      colors.push(color.r, color.g, color.b);

      // Assign small random velocities for each axis
      const velocity = {
        x: (Math.random() - 0.5) * 0.1, // Small random velocity
        y: (Math.random() - 0.5) * 0.1,
        z: (Math.random() - 0.5) * 0.1,
      };
      velocities.push(velocity);
    }

    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3)); // Add color attribute

    // Create points material that uses vertex colors
    const pointMaterial = new THREE.PointsMaterial({
      size: 1.5, // Size of the points
      vertexColors: true, // Enable per-point colors
      transparent: true,
      opacity: 0.8,
    });
    const points = new THREE.Points(pointsGeometry, pointMaterial);
    scene.add(points);

    // Use the same geometry for lines to ensure lines move with points
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x00ffff, // Light blue color
      transparent: true,
      opacity: 0.3,
    });
    const lineSegments = new THREE.LineSegments(pointsGeometry, lineMaterial);
    scene.add(lineSegments);

    // Smaller ambient light
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5); // Lower intensity
    scene.add(ambientLight);

    // Update the light position based on mouse movement
    const mouse = new THREE.Vector2();

    window.addEventListener('mousemove', (event) => {
      // Normalize mouse coordinates (-1 to 1 range)
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // Raycast to find the mouse position in 3D world space at Z=0 (assuming flat XY plane)
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(points);
      if (intersects.length > 0) {
        // Get the 3D world position of the cursor on the plane
        cursorPosition.copy(intersects[0].point);
      }
    });

    // Camera position
    camera.position.z = 150;
    camera.position.x = 0;

    // Animation loop for moving points and rendering the scene
    const animate = function () {
      requestAnimationFrame(animate);

      const positionsArray = pointsGeometry.attributes.position.array;
      const colorsArray = pointsGeometry.attributes.color.array;

      // Move points randomly within a small range
      for (let i = 0; i < numPoints; i++) {
        // Move points
        positionsArray[i * 3] += velocities[i].x;
        positionsArray[i * 3 + 1] += velocities[i].y;
        positionsArray[i * 3 + 2] += velocities[i].z;

        // Reverse direction if point exceeds boundaries
        if (positionsArray[i * 3] > 100 || positionsArray[i * 3] < -100) velocities[i].x *= -1;
        if (positionsArray[i * 3 + 1] > 50 || positionsArray[i * 3 + 1] < -50) velocities[i].y *= -1;
        if (positionsArray[i * 3 + 2] > 50 || positionsArray[i * 3 + 2] < -50) velocities[i].z *= -1;

        // Calculate the 2D distance between the cursor and the current point (ignore Z)
        const distance = Math.sqrt(
          Math.pow(cursorPosition.x - positionsArray[i * 3], 2) +
          Math.pow(cursorPosition.y - positionsArray[i * 3 + 1], 2)
        );

        // Light up points within the lightUpRadius distance
        const isLit = distance < lightUpRadius;
        const color = createColor(isLit);

        // Update the color of the current point
        colorsArray[i * 3] = color.r;
        colorsArray[i * 3 + 1] = color.g;
        colorsArray[i * 3 + 2] = color.b;
      }

      // Inform Three.js that the positions and colors of the points have changed
      pointsGeometry.attributes.position.needsUpdate = true;
      pointsGeometry.attributes.color.needsUpdate = true;

      renderer.render(scene, camera);
    };
    animate();

    // Clean up on component unmount
    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
}
