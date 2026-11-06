import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { RotateCw, Sparkles } from 'lucide-react';

export default function HeroThreeScene({ theme = 'dark' }) {
  const mountRef = useRef(null);
  const containerRef = useRef(null);
  const [hasError, setHasError] = useState(false);
  const [reloadKey, setReloadKey] = useState(0);

  const initScene = useCallback(() => {
    const container = mountRef.current;
    if (!container) return;

    // Clear previous canvas if any
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    let scene, camera, renderer, animationFrameId;
    let isRenderingPaused = false;
    let isContextLost = false;

    // Track disposables
    const geometries = [];
    const materials = [];
    const textures = [];

    const trackGeom = (g) => { geometries.push(g); return g; };
    const trackMat = (m) => { materials.push(m); return m; };
    const trackTex = (t) => { textures.push(t); return t; };

    try {
      // Scene
      scene = new THREE.Scene();

      // Camera
      camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
      camera.position.set(0, 0, width < 768 ? 9.2 : 7.5);

      // Renderer with transparent clear color (inherits --bg-page seamlessly)
      renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance'
      });
      renderer.setClearColor(0x000000, 0); // Transparent over themed container
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.25;
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;

      const canvas = renderer.domElement;
      canvas.style.display = 'block';
      canvas.style.width = '100%';
      canvas.style.height = '100%';
      canvas.style.backgroundColor = 'transparent';
      container.appendChild(canvas);

      // ---------------------------------------------------------------------
      // 1. WebGL Context Loss & Restoration Event Handlers
      // ---------------------------------------------------------------------
      const handleContextLost = (event) => {
        event.preventDefault(); // CRUCIAL: tells browser not to crash the canvas
        isContextLost = true;
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId);
        }
        console.warn('AVENOR: WebGL Context Lost. Pausing render loop and awaiting restoration...');
      };

      const handleContextRestored = () => {
        console.info('AVENOR: WebGL Context Restored. Rebuilding scene...');
        isContextLost = false;
        setReloadKey((prev) => prev + 1);
      };

      canvas.addEventListener('webglcontextlost', handleContextLost, false);
      canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

      // ---------------------------------------------------------------------
      // 2. Tab Visibility & Intersection Observer (Pause when off-screen)
      // ---------------------------------------------------------------------
      const handleVisibilityChange = () => {
        if (document.hidden) {
          isRenderingPaused = true;
        } else if (!isContextLost) {
          isRenderingPaused = false;
          lastTime = clock.getElapsedTime();
        }
      };
      document.addEventListener('visibilitychange', handleVisibilityChange);

      // ---------------------------------------------------------------------
      // Lighting with Dynamic Dual-Theme Support (Day / Dark)
      // ---------------------------------------------------------------------
      const isDayInitial = document.documentElement.getAttribute('data-theme') === 'day';

      const ambientLight = new THREE.AmbientLight(
        isDayInitial ? 0xf7f2e9 : 0x382229,
        isDayInitial ? 2.1 : 1.4
      );
      scene.add(ambientLight);

      const keyLight = new THREE.DirectionalLight(
        isDayInitial ? 0xfff8ee : 0xffeed1,
        isDayInitial ? 2.1 : 2.6
      );
      keyLight.position.set(4.5, 5, 5);
      scene.add(keyLight);

      const rimLight = new THREE.DirectionalLight(
        isDayInitial ? 0xe8d7bc : 0xdce7ff,
        isDayInitial ? 1.4 : 1.8
      );
      rimLight.position.set(-5, 3.5, -2);
      scene.add(rimLight);

      const badgeSpotLight = new THREE.SpotLight(0xfff6e3, isDayInitial ? 2.7 : 3.8);
      badgeSpotLight.position.set(0, 0, 5.2);
      badgeSpotLight.angle = Math.PI / 5.5;
      badgeSpotLight.penumbra = 0.65;
      badgeSpotLight.decay = 1.5;
      badgeSpotLight.distance = 12;
      scene.add(badgeSpotLight);

      const badgePointLight = new THREE.PointLight(0xf5d98a, isDayInitial ? 1.7 : 2.2, 8);
      badgePointLight.position.set(0, 0.6, 3.2);
      scene.add(badgePointLight);

      // Theme mutation observer to update lights dynamically
      const themeObserver = new MutationObserver(() => {
        const isDayNow = document.documentElement.getAttribute('data-theme') === 'day';
        ambientLight.color.setHex(isDayNow ? 0xf7f2e9 : 0x382229);
        ambientLight.intensity = isDayNow ? 2.1 : 1.4;
        keyLight.color.setHex(isDayNow ? 0xfff8ee : 0xffeed1);
        keyLight.intensity = isDayNow ? 2.1 : 2.6;
        rimLight.color.setHex(isDayNow ? 0xe8d7bc : 0xdce7ff);
        rimLight.intensity = isDayNow ? 1.4 : 1.8;
        badgeSpotLight.intensity = isDayNow ? 2.7 : 3.8;
        badgePointLight.intensity = isDayNow ? 1.7 : 2.2;
      });
      themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });

      const sceneGroup = new THREE.Group();
      scene.add(sceneGroup);
      badgeSpotLight.target = sceneGroup;

      // ---------------------------------------------------------------------
      // Materials
      // ---------------------------------------------------------------------
      const goldMaterial = trackMat(new THREE.MeshStandardMaterial({
        color: 0xf0cf7a,
        emissive: new THREE.Color(0xb58a28),
        emissiveIntensity: 0.35,
        metalness: 0.92,
        roughness: 0.18
      }));

      const innerRingMaterial = trackMat(new THREE.MeshStandardMaterial({
        color: 0xffe6a3,
        emissive: new THREE.Color(0xf5d98a),
        emissiveIntensity: 0.7,
        metalness: 0.95,
        roughness: 0.12
      }));

      const deepWineVelvetMaterial = trackMat(new THREE.MeshStandardMaterial({
        color: 0x220509,
        roughness: 0.92,
        metalness: 0.15
      }));

      const brushedChromeMaterial = trackMat(new THREE.MeshStandardMaterial({
        color: 0xf5f5f7,
        metalness: 0.95,
        roughness: 0.14
      }));

      const darkHornMaterial = trackMat(new THREE.MeshStandardMaterial({
        color: 0x181412,
        metalness: 0.15,
        roughness: 0.35
      }));

      const amberGlassMaterial = trackMat(new THREE.MeshPhysicalMaterial({
        color: 0x9e5318,
        metalness: 0.1,
        roughness: 0.14,
        transmission: 0.75,
        thickness: 1.2,
        transparent: true,
        opacity: 0.94
      }));

      // ---------------------------------------------------------------------
      // 1. Central Medallion Plaque
      // ---------------------------------------------------------------------
      const logoGroup = new THREE.Group();

      const plaqueMesh = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(1.68, 1.76, 0.14, 64)), goldMaterial);
      plaqueMesh.rotation.x = Math.PI / 2;
      logoGroup.add(plaqueMesh);

      const rimMesh = new THREE.Mesh(trackGeom(new THREE.TorusGeometry(1.74, 0.045, 20, 64)), goldMaterial);
      logoGroup.add(rimMesh);

      const innerDisc = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(1.58, 1.58, 0.15, 64)), deepWineVelvetMaterial);
      innerDisc.rotation.x = Math.PI / 2;
      logoGroup.add(innerDisc);

      const innerGoldRing = new THREE.Mesh(trackGeom(new THREE.TorusGeometry(1.48, 0.018, 16, 64)), innerRingMaterial);
      innerGoldRing.position.z = 0.076;
      logoGroup.add(innerGoldRing);

      // Logo Texture Decal with Error Fallback
      const textureLoader = new THREE.TextureLoader();
      textureLoader.load(
        '/assets/logo/avenor-logo-gold-cropped.png',
        (texture) => {
          trackTex(texture);
          texture.anisotropy = Math.min(renderer.capabilities.getMaxAnisotropy(), 8);
          texture.generateMipmaps = true;
          texture.minFilter = THREE.LinearMipmapLinearFilter;
          texture.magFilter = THREE.LinearFilter;
          texture.colorSpace = THREE.SRGBColorSpace;
          texture.needsUpdate = true;

          const planeWidth = 2.42;
          const planeHeight = planeWidth / (2048 / 996);

          const logoPlaneMat = trackMat(new THREE.MeshStandardMaterial({
            map: texture,
            transparent: true,
            alphaTest: 0.04,
            depthWrite: false,
            color: new THREE.Color(0xffffff),
            emissive: new THREE.Color(0xf5d98a),
            emissiveIntensity: 0.85,
            emissiveMap: texture,
            metalness: 0.88,
            roughness: 0.2,
            polygonOffset: true,
            polygonOffsetFactor: -1
          }));

          const logoPlane = new THREE.Mesh(trackGeom(new THREE.PlaneGeometry(planeWidth, planeHeight)), logoPlaneMat);
          logoPlane.position.set(0, 0, 0.088);
          logoGroup.add(logoPlane);
        },
        undefined,
        (err) => {
          console.error('Failed to load logo texture, keeping fallback emblem:', err);
        }
      );

      logoGroup.position.set(0, 0, 0);
      sceneGroup.add(logoGroup);

      // ---------------------------------------------------------------------
      // 2. Surrounding Barber Artifacts
      // ---------------------------------------------------------------------
      // Scissors
      const scissorsGroup = new THREE.Group();
      const blade1Geo = trackGeom(new THREE.BoxGeometry(0.12, 1.8, 0.02));
      const blade1 = new THREE.Mesh(blade1Geo, brushedChromeMaterial);
      blade1.position.y = 0.6;
      blade1.rotation.z = 0.12;
      scissorsGroup.add(blade1);

      const blade2 = new THREE.Mesh(blade1Geo, brushedChromeMaterial);
      blade2.position.y = 0.6;
      blade2.rotation.z = -0.12;
      scissorsGroup.add(blade2);

      const pivot = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(0.08, 0.08, 0.06, 16)), goldMaterial);
      pivot.rotation.x = Math.PI / 2;
      scissorsGroup.add(pivot);

      const loopGeo = trackGeom(new THREE.TorusGeometry(0.24, 0.04, 16, 32));
      const loop1 = new THREE.Mesh(loopGeo, brushedChromeMaterial);
      loop1.position.set(-0.3, -0.7, 0);
      scissorsGroup.add(loop1);

      const loop2 = new THREE.Mesh(loopGeo, brushedChromeMaterial);
      loop2.position.set(0.3, -0.7, 0);
      scissorsGroup.add(loop2);

      scissorsGroup.scale.set(0.9, 0.9, 0.9);
      scissorsGroup.position.set(-2.8, 1.2, 0.4);
      scissorsGroup.rotation.set(0.2, 0.4, 0.3);
      sceneGroup.add(scissorsGroup);

      // Razor
      const razorGroup = new THREE.Group();
      const handle = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(0.09, 0.1, 1.5, 32)), goldMaterial);
      razorGroup.add(handle);

      const headBar = new THREE.Mesh(trackGeom(new THREE.BoxGeometry(0.7, 0.15, 0.28)), brushedChromeMaterial);
      headBar.position.y = 0.8;
      razorGroup.add(headBar);

      const cap = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(0.14, 0.14, 0.7, 16)), goldMaterial);
      cap.rotation.z = Math.PI / 2;
      cap.position.y = 0.88;
      razorGroup.add(cap);

      razorGroup.scale.set(0.95, 0.95, 0.95);
      razorGroup.position.set(2.7, 1.1, 0.4);
      razorGroup.rotation.set(-0.3, -0.5, -0.2);
      sceneGroup.add(razorGroup);

      // Beard Oil Bottle
      const bottleGroup = new THREE.Group();
      const bottleBody = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(0.38, 0.38, 1.2, 32)), amberGlassMaterial);
      bottleGroup.add(bottleBody);

      const neck = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(0.15, 0.28, 0.35, 32)), amberGlassMaterial);
      neck.position.y = 0.75;
      bottleGroup.add(neck);

      const collar = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(0.2, 0.2, 0.18, 32)), goldMaterial);
      collar.position.y = 0.98;
      bottleGroup.add(collar);

      const capDropper = new THREE.Mesh(trackGeom(new THREE.CylinderGeometry(0.14, 0.16, 0.3, 16)), darkHornMaterial);
      capDropper.position.y = 1.18;
      bottleGroup.add(capDropper);

      bottleGroup.scale.set(0.9, 0.9, 0.9);
      bottleGroup.position.set(-2.5, -1.5, 0.7);
      bottleGroup.rotation.set(0.4, 0.3, -0.2);
      sceneGroup.add(bottleGroup);

      // Comb
      const combGroup = new THREE.Group();
      const combSpine = new THREE.Mesh(trackGeom(new THREE.BoxGeometry(2.0, 0.22, 0.05)), darkHornMaterial);
      combGroup.add(combSpine);

      const toothGeo = trackGeom(new THREE.BoxGeometry(0.03, 0.55, 0.04));
      for (let i = -0.9; i <= 0.9; i += 0.09) {
        const tooth = new THREE.Mesh(toothGeo, darkHornMaterial);
        tooth.position.set(i, -0.32, 0);
        combGroup.add(tooth);
      }
      const goldInlay = new THREE.Mesh(trackGeom(new THREE.BoxGeometry(1.6, 0.03, 0.06)), goldMaterial);
      goldInlay.position.y = 0.05;
      combGroup.add(goldInlay);

      combGroup.scale.set(0.95, 0.95, 0.95);
      combGroup.position.set(2.6, -1.4, 0.5);
      combGroup.rotation.set(-0.2, -0.4, 0.35);
      sceneGroup.add(combGroup);

      // Gold Particles
      const particleCount = 50;
      const particleGeometry = trackGeom(new THREE.BufferGeometry());
      const positions = new Float32Array(particleCount * 3);
      const particleSpeeds = [];

      for (let i = 0; i < particleCount; i++) {
        positions[i * 3] = (Math.random() - 0.5) * 12;
        positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
        particleSpeeds.push({
          y: 0.002 + Math.random() * 0.004,
          x: (Math.random() - 0.5) * 0.002,
          phase: Math.random() * Math.PI * 2
        });
      }

      particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
      const particleMaterial = trackMat(new THREE.PointsMaterial({
        color: 0xf5d98a,
        size: 0.055,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
      }));
      const particleSystem = new THREE.Points(particleGeometry, particleMaterial);
      scene.add(particleSystem);

      // Mouse tracking
      let targetX = 0;
      let targetY = 0;
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (e) => {
        const { innerWidth, innerHeight } = window;
        mouseX = (e.clientX / innerWidth - 0.5) * 2;
        mouseY = -(e.clientY / innerHeight - 0.5) * 2;
      };

      const handleOrientation = (e) => {
        if (e.gamma !== null && e.beta !== null) {
          mouseX = Math.min(Math.max(e.gamma / 30, -1), 1);
          mouseY = Math.min(Math.max((e.beta - 45) / 30, -1), 1);
        }
      };

      window.addEventListener('mousemove', handleMouseMove, { passive: true });
      window.addEventListener('deviceorientation', handleOrientation, { passive: true });

      const handleResize = () => {
        if (!container) return;
        width = container.clientWidth;
        height = container.clientHeight;
        camera.aspect = width / height;
        camera.position.z = width < 768 ? 9.2 : 7.5;
        camera.updateProjectionMatrix();
        renderer.setSize(width, height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      };
      window.addEventListener('resize', handleResize);

      // Intersection Observer on hero container
      const observer = new IntersectionObserver(([entry]) => {
        isRenderingPaused = !entry.isIntersecting;
      }, { threshold: 0.05 });

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      // Animation Loop
      let clock = new THREE.Clock();
      let lastTime = clock.getElapsedTime();

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);

        // Don't render when tab is backgrounded, offscreen, or context is lost
        if (isRenderingPaused || isContextLost) return;

        const elapsedTime = clock.getElapsedTime();

        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        sceneGroup.rotation.y = targetX * 0.32;
        sceneGroup.rotation.x = -targetY * 0.22;

        badgeSpotLight.position.x = Math.sin(elapsedTime * 0.6) * 1.6;
        badgeSpotLight.position.y = Math.cos(elapsedTime * 0.5) * 0.9;
        badgePointLight.position.x = Math.cos(elapsedTime * 0.7) * 1.2;

        logoGroup.position.y = Math.sin(elapsedTime * 1.1) * 0.1;
        logoGroup.rotation.y = Math.sin(elapsedTime * 0.5) * 0.18 + targetX * 0.15;
        logoGroup.rotation.z = Math.cos(elapsedTime * 0.7) * 0.03;

        scissorsGroup.position.y = 1.2 + Math.sin(elapsedTime * 1.3 + 1.0) * 0.14;
        scissorsGroup.rotation.z = 0.3 + Math.sin(elapsedTime * 0.8) * 0.07;
        scissorsGroup.rotation.y = 0.4 + targetX * 0.25;

        razorGroup.position.y = 1.1 + Math.sin(elapsedTime * 1.2 + 2.0) * 0.15;
        razorGroup.rotation.x = -0.3 + Math.cos(elapsedTime * 0.7) * 0.08;
        razorGroup.rotation.y = -0.5 + targetX * 0.22;

        bottleGroup.position.y = -1.5 + Math.sin(elapsedTime * 1.0 + 3.0) * 0.13;
        bottleGroup.rotation.y = 0.3 + elapsedTime * 0.15;

        combGroup.position.y = -1.4 + Math.sin(elapsedTime * 1.4 + 4.0) * 0.14;
        combGroup.rotation.z = 0.35 + Math.sin(elapsedTime * 0.7) * 0.08;

        const posArray = particleGeometry.attributes.position.array;
        for (let i = 0; i < particleCount; i++) {
          posArray[i * 3 + 1] += particleSpeeds[i].y;
          posArray[i * 3] += Math.sin(elapsedTime + particleSpeeds[i].phase) * 0.0025;
          if (posArray[i * 3 + 1] > 4.5) {
            posArray[i * 3 + 1] = -4.5;
          }
        }
        particleGeometry.attributes.position.needsUpdate = true;

        renderer.render(scene, camera);
      };

      animate();

      // Return cleanup function
      return () => {
        cancelAnimationFrame(animationFrameId);
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('deviceorientation', handleOrientation);
        window.removeEventListener('resize', handleResize);
        document.removeEventListener('visibilitychange', handleVisibilityChange);
        observer.disconnect();

        if (canvas) {
          canvas.removeEventListener('webglcontextlost', handleContextLost);
          canvas.removeEventListener('webglcontextrestored', handleContextRestored);
        }

        // Dispose textures, materials, and geometries
        textures.forEach((t) => t && t.dispose && t.dispose());
        materials.forEach((m) => m && m.dispose && m.dispose());
        geometries.forEach((g) => g && g.dispose && g.dispose());

        if (renderer) {
          renderer.dispose();
          renderer.forceContextLoss();
        }

        if (container && canvas && container.contains(canvas)) {
          container.removeChild(canvas);
        }
      };
    } catch (err) {
      console.error('AVENOR: Error initializing 3D Hero Scene:', err);
      setHasError(true);
    }
  }, []);

  useEffect(() => {
    const cleanup = initScene();
    return () => {
      cleanup && cleanup();
    };
  }, [initScene, reloadKey]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[540px] md:h-[680px] lg:h-[760px] flex items-center justify-center bg-[var(--bg-page)] overflow-hidden transition-colors duration-300"
    >
      {/* Three.js Canvas Mount */}
      <div
        ref={mountRef}
        className="absolute inset-0 z-0 pointer-events-auto cursor-grab active:cursor-grabbing bg-[var(--bg-page)]"
      />

      {/* Styled Fallback (shown if WebGL fails or user reloads) */}
      {hasError && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[var(--bg-page)] p-6 text-center">
          <div className="p-6 rounded-full bg-[#1e0509] border-2 border-[#f5d98a]/50 shadow-[0_0_50px_rgba(245,217,138,0.3)] mb-5">
            <img
              src="/assets/logo/avenor-logo-gold.png"
              alt="AVENOR"
              className="w-48 h-auto object-contain filter drop-shadow-[0_0_15px_rgba(245,217,138,0.6)]"
            />
          </div>
          <p className="font-serif text-sm text-[var(--gold-deep)] tracking-widest uppercase mb-4">
            Atelier 3D Viewport
          </p>
          <button
            onClick={() => {
              setHasError(false);
              setReloadKey((prev) => prev + 1);
            }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--gold-gradient)] text-white font-bold text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
          >
            <RotateCw className="w-4 h-4" />
            <span>Reload 3D Atelier</span>
          </button>
        </div>
      )}

      {/* Edge vignette gradients (never cover the center) */}
      <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-[var(--bg-page)] to-transparent pointer-events-none" />
      <div className="absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-[var(--bg-page)] to-transparent pointer-events-none" />

      {/* Interactive 3D Indicator Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--bg-card)]/85 backdrop-blur-md border border-[var(--line-strong)] text-[10px] tracking-widest uppercase text-[var(--gold-deep)] shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse"></span>
        Interactive 3D Atelier • Rotate via cursor or tilt
      </div>
    </div>
  );
}
