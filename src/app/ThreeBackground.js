"use client"; // Ensure this is treated as a Client Component

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'; // Correct import path

export default function ThreeBackground() {
  const mountRef = useRef(null); // Removed TypeScript-specific type annotations

  useEffect(() => {
    // Ensure mountRef.current is not null
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xFFFFFF);
    mountRef.current.appendChild(renderer.domElement);

    // Torus knot geometry
    const geometry2 = new THREE.TorusKnotGeometry(50, 32, 32, 20);
    const material2 = new THREE.MeshStandardMaterial({ color: 0x800080, wireframe: true });
    const torusknot = new THREE.Mesh(geometry2, material2);
    scene.add(torusknot);

    // Lights
    const pointLight = new THREE.PointLight(0xffffff, 1.5, 100);
    pointLight.position.set(50, 50, 50);
    scene.add(pointLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    // Orbit Controls
    const controls = new OrbitControls(camera, renderer.domElement);

    // Camera position
    camera.position.z = 100;
    camera.position.x = 0;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);
      torusknot.rotation.y += 0.005;
      torusknot.rotation.x += 0.005;
      renderer.render(scene, camera);
      controls.update();
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }} />;
}
