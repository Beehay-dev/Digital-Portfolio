import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Hero3DCanvas() {
  const mountRef = useRef(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();

    // Camera setup - positioned for a refined, compact presentation
    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.z = 7;

    // WebGL Renderer with alpha transparency
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Group for objects
    const group = new THREE.Group();
    scene.add(group);

    // Geometry: Compact, elegant modern multifaceted gem (radius reduced from 2.1 to 1.1)
    const gemGeometry = new THREE.OctahedronGeometry(1.05, 0);
    
    // Wireframe Outer Mesh: Delicate fine line in vibrant cobalt blue
    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0x2563eb,
      wireframe: true,
      roughness: 0.1,
      metalness: 0.9,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.4
    });
    const wireframeMesh = new THREE.Mesh(gemGeometry, wireframeMaterial);
    group.add(wireframeMesh);

    // Inner Solid Faceted Mesh: Modern Frosted Glass / Ceramic White
    const innerGeometry = new THREE.OctahedronGeometry(0.85, 1);
    const innerMaterial = new THREE.MeshPhysicalMaterial({
      color: 0xffffff,
      roughness: 0.08,
      metalness: 0.2,
      transmission: 0.7,
      ior: 1.55,
      reflectivity: 0.95,
      clearcoat: 1.0,
      clearcoatRoughness: 0.05
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // Sleek, delicate kinetic orbital rings (thin fine geometry)
    const ring1Geometry = new THREE.TorusGeometry(1.45, 0.015, 16, 120);
    const ring1Material = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      emissive: 0xdc2626,
      emissiveIntensity: 0.5,
      metalness: 0.95,
      roughness: 0.1
    });
    const ring1 = new THREE.Mesh(ring1Geometry, ring1Material);
    ring1.rotation.x = Math.PI / 3.5;
    group.add(ring1);

    const ring2Geometry = new THREE.TorusGeometry(1.7, 0.012, 16, 120);
    const ring2Material = new THREE.MeshStandardMaterial({
      color: 0x3b82f6,
      emissive: 0x1d4ed8,
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.1
    });
    const ring2 = new THREE.Mesh(ring2Geometry, ring2Material);
    ring2.rotation.y = Math.PI / 4;
    group.add(ring2);

    // Microscopic artistic stardust particles
    const particlesCount = 120;
    const particlePositions = new Float32Array(particlesCount * 3);
    const particleColors = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 8;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 5;

      if (Math.random() > 0.5) {
        particleColors[i] = 0.93; // Red
        particleColors[i + 1] = 0.25;
        particleColors[i + 2] = 0.25;
      } else {
        particleColors[i] = 0.15; // Blue
        particleColors[i + 1] = 0.40;
        particleColors[i + 2] = 0.92;
      }
    }

    const particlesGeometry = new THREE.BufferGeometry();
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.035,
      vertexColors: true,
      transparent: true,
      opacity: 0.75
    });
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);

    // Refined Artistic Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const redLight = new THREE.PointLight(0xef4444, 5, 15);
    redLight.position.set(3, 2, 2);
    scene.add(redLight);

    const blueLight = new THREE.PointLight(0x2563eb, 5, 15);
    blueLight.position.set(-3, -2, 2);
    scene.add(blueLight);

    // Mouse interactivity
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (event.clientX / innerWidth - 0.5) * 2;
      mouseY = (event.clientY / innerHeight - 0.5) * 2;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Responsive resize
    const handleResize = () => {
      if (!currentMount) return;
      const newWidth = currentMount.clientWidth;
      const newHeight = currentMount.clientHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop with smooth kinetic rotations
    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse follow
      targetX += (mouseX - targetX) * 0.04;
      targetY += (mouseY - targetY) * 0.04;

      group.rotation.x = elapsedTime * 0.15 + targetY * 0.5;
      group.rotation.y = elapsedTime * 0.2 + targetX * 0.5;
      
      innerMesh.rotation.x = -elapsedTime * 0.1;
      innerMesh.rotation.y = -elapsedTime * 0.12;

      ring1.rotation.z = elapsedTime * 0.22;
      ring2.rotation.x = -elapsedTime * 0.18;

      particles.rotation.y = elapsedTime * 0.025;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      gemGeometry.dispose();
      innerGeometry.dispose();
      ring1Geometry.dispose();
      ring2Geometry.dispose();
      wireframeMaterial.dispose();
      innerMaterial.dispose();
      ring1Material.dispose();
      ring2Material.dispose();
      particlesGeometry.dispose();
      particlesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 pointer-events-none opacity-80 overflow-hidden z-0"
      aria-hidden="true"
    />
  );
}
