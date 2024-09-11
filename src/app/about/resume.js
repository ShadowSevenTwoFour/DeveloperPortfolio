// ThreeJSResume.js
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function ThreeJSResume() {
  const mountRef = useRef(null);

  useEffect(() => {
    // Setup the scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true , alpha: true});
    renderer.setSize(200, 200); // Set renderer size

    // Function to create a texture with the word "Resume"
    const createTextTexture = (text) => {
      const canvas = document.createElement('canvas');
      const context = canvas.getContext('2d');
      canvas.width = 256;
      canvas.height = 256;

      // Set background and text styles
      context.fillStyle = 'white';
      context.font = 'bold 48px Arial';
      context.textAlign = 'center';
      context.textBaseline = 'middle';
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      return new THREE.CanvasTexture(canvas);
    };

    // Create the six materials, one for each cube face
    const materials = [
      new THREE.MeshBasicMaterial({ map: createTextTexture('Resume') }),
      new THREE.MeshBasicMaterial({ map: createTextTexture('Resume') }),
      new THREE.MeshBasicMaterial({ map: createTextTexture('Resume') }),
      new THREE.MeshBasicMaterial({ map: createTextTexture('Resume') }),
      new THREE.MeshBasicMaterial({ map: createTextTexture('Resume') }),
      new THREE.MeshBasicMaterial({ map: createTextTexture('Resume') }),
    ];

    // Add a cube with the text texture on each face
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    // Set the camera position
    camera.position.z = 3;

    // Animation loop
    const animate = function () {
      requestAnimationFrame(animate);

      // Rotate the cube
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;

      renderer.render(scene, camera);
    };
    animate();

    // Append renderer to the DOM
    mountRef.current.appendChild(renderer.domElement);

    // Clean up on component unmount
    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ cursor: 'pointer' }} onClick={() => window.open('/Mayank_Kumaran_FA24_Resume.pdf', '_blank')} />;
}
