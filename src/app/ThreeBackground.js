"use client";

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
  const mountRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000);
    mountRef.current.appendChild(renderer.domElement);

    const pointsGeometry = new THREE.BufferGeometry();
    const positions = [];
    const colors = [];
    const velocities = [];
    const numPoints = 300;

    const cursorPosition = new THREE.Vector3();
    const raycaster = new THREE.Raycaster();

    const lightUpRadius = 30;
    let needsColorUpdate = false;

    function createColor(isLit) {
      const color = new THREE.Color();
      if (isLit) {
        color.set(0xc95eff);
      } else {
        color.set(0x5a2873);
      }
      return color;
    }

    for (let i = 0; i < numPoints; i++) {
      const x = Math.random() * 200 - 100;
      const y = Math.random() * 100 - 50;
      const z = Math.random() * 100 - 50;
      positions.push(x, y, z);

      const color = createColor(false);
      colors.push(color.r, color.g, color.b);

      const velocity = {
        x: (Math.random() - 0.5) * 0.1,
        y: (Math.random() - 0.5) * 0.1,
        z: (Math.random() - 0.5) * 0.1,
      };
      velocities.push(velocity);
    }

    pointsGeometry.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3));
    pointsGeometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

    const pointMaterial = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
    });
    const points = new THREE.Points(pointsGeometry, pointMaterial);
    scene.add(points);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x9e47c9,
      transparent: true,
      opacity: 0.3,
    });
    const lineSegments = new THREE.LineSegments(pointsGeometry, lineMaterial);
    scene.add(lineSegments);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const mouse = new THREE.Vector2();

    window.addEventListener('mousemove', (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(points);
      if (intersects.length > 0) {
        cursorPosition.copy(intersects[0].point);
        needsColorUpdate = true;
      } else {
        raycaster.ray.at(50, cursorPosition);
        needsColorUpdate = true;
      }
    });

    // Window resize handling
    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize);

    camera.position.z = 100;
    camera.position.x = 0;

    const animate = function () {
      requestAnimationFrame(animate);

      const positionsArray = pointsGeometry.attributes.position.array;
      const colorsArray = pointsGeometry.attributes.color.array;

      for (let i = 0; i < numPoints; i++) {
        positionsArray[i * 3] += velocities[i].x;
        positionsArray[i * 3 + 1] += velocities[i].y;
        positionsArray[i * 3 + 2] += velocities[i].z;

        if (positionsArray[i * 3] > 100 || positionsArray[i * 3] < -100) velocities[i].x *= -1;
        if (positionsArray[i * 3 + 1] > 50 || positionsArray[i * 3 + 1] < -50) velocities[i].y *= -1;
        if (positionsArray[i * 3 + 2] > 50 || positionsArray[i * 3 + 2] < -50) velocities[i].z *= -1;
      }

      if (needsColorUpdate) {
        for (let i = 0; i < numPoints; i++) {
          const distance = Math.sqrt(
            Math.pow(cursorPosition.x - positionsArray[i * 3], 2) +
            Math.pow(cursorPosition.y - positionsArray[i * 3 + 1], 2)
          );

          const isLit = distance < lightUpRadius;
          const color = createColor(isLit);

          colorsArray[i * 3] = color.r;
          colorsArray[i * 3 + 1] = color.g;
          colorsArray[i * 3 + 2] = color.b;
        }

        pointsGeometry.attributes.color.needsUpdate = true;
        needsColorUpdate = false;
      }

      pointsGeometry.attributes.position.needsUpdate = true;
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('resize', onWindowResize); // Clean up event listener
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
    />
  );
}
