import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeScene = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const objectsRef = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true 
    });
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 2);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00ffff, 2, 100);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xcc00ff, 2, 100);
    pointLight2.position.set(-5, -5, 5);
    scene.add(pointLight2);

    // Create geometric shapes
    const objects: THREE.Mesh[] = [];

    // Torus
    const torusGeometry = new THREE.TorusGeometry(1.2, 0.4, 16, 100);
    const torusMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.2,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.position.set(-2, 1, 0);
    scene.add(torus);
    objects.push(torus);

    // Cube
    const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
    const boxMaterial = new THREE.MeshPhongMaterial({
      color: 0xcc00ff,
      emissive: 0xcc00ff,
      emissiveIntensity: 0.2,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });
    const cube = new THREE.Mesh(boxGeometry, boxMaterial);
    cube.position.set(2, -1, 0);
    scene.add(cube);
    objects.push(cube);

    // Octahedron
    const octaGeometry = new THREE.OctahedronGeometry(0.8);
    const octaMaterial = new THREE.MeshPhongMaterial({
      color: 0x00ffff,
      emissive: 0x00ffff,
      emissiveIntensity: 0.2,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });
    const octahedron = new THREE.Mesh(octaGeometry, octaMaterial);
    octahedron.position.set(0, 1.5, -1);
    scene.add(octahedron);
    objects.push(octahedron);

    // Icosahedron
    const icosaGeometry = new THREE.IcosahedronGeometry(0.7);
    const icosaMaterial = new THREE.MeshPhongMaterial({
      color: 0xcc00ff,
      emissive: 0xcc00ff,
      emissiveIntensity: 0.2,
      shininess: 100,
      transparent: true,
      opacity: 0.8,
    });
    const icosahedron = new THREE.Mesh(icosaGeometry, icosaMaterial);
    icosahedron.position.set(-1.5, -1.5, -0.5);
    scene.add(icosahedron);
    objects.push(icosahedron);

    objectsRef.current = objects;

    // Particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1000;
    const posArray = new Float32Array(particlesCount * 3);

    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 10;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      color: 0x00ffff,
      transparent: true,
      opacity: 0.6,
    });
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);

    // Mouse move event
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current || !cameraRef.current || !rendererRef.current) return;
      
      const width = containerRef.current.clientWidth;
      const height = containerRef.current.clientHeight;

      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      const time = Date.now() * 0.001;

      // Animate objects
      objectsRef.current.forEach((obj, index) => {
        obj.rotation.x += 0.005 * (index + 1);
        obj.rotation.y += 0.005 * (index + 1);
        obj.position.y += Math.sin(time + index) * 0.002;
      });

      // Animate particles
      if (particlesMesh) {
        particlesMesh.rotation.y += 0.0005;
      }

      // Camera movement based on mouse
      if (cameraRef.current) {
        cameraRef.current.position.x += (mouseRef.current.x * 0.5 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (mouseRef.current.y * 0.5 - cameraRef.current.position.y) * 0.05;
        cameraRef.current.lookAt(scene.position);
      }

      if (rendererRef.current && sceneRef.current && cameraRef.current) {
        rendererRef.current.render(sceneRef.current, cameraRef.current);
      }
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      
      if (containerRef.current && rendererRef.current) {
        containerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      objectsRef.current.forEach(obj => {
        obj.geometry.dispose();
        if (Array.isArray(obj.material)) {
          obj.material.forEach(mat => mat.dispose());
        } else {
          obj.material.dispose();
        }
      });
      
      rendererRef.current?.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};
