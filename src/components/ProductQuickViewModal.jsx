import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { X, Star, ShoppingBag, Check, ShieldCheck, Sparkles, ArrowRight } from 'lucide-react';

export default function ProductQuickViewModal({ product, isOpen, onClose, onAddToCart }) {
  const mountRef = useRef(null);
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (!isOpen || !product || !mountRef.current) return;

    const container = mountRef.current;
    const width = container.clientWidth || 340;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 50);
    camera.position.set(0, 0, 4.6);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.25;
    
    const canvas = renderer.domElement;
    canvas.style.display = 'block';
    canvas.style.backgroundColor = 'transparent';
    container.appendChild(canvas);

    const handleLost = (e) => {
      e.preventDefault();
      if (animId) cancelAnimationFrame(animId);
    };
    canvas.addEventListener('webglcontextlost', handleLost, false);

    // Lights
    const ambientLight = new THREE.AmbientLight(0x35282a, 1.6);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffeed1, 2.8);
    keyLight.position.set(3.5, 4, 4);
    scene.add(keyLight);

    const rimLight = new THREE.DirectionalLight(0xdce7ff, 1.5);
    rimLight.position.set(-4, -2, -2);
    scene.add(rimLight);

    const goldPoint = new THREE.PointLight(0xe6c068, 2.0, 10);
    goldPoint.position.set(0, 1.5, 3);
    scene.add(goldPoint);

    // Materials
    const goldMat = new THREE.MeshStandardMaterial({
      color: 0xe6c068,
      emissive: new THREE.Color(0xb58a28),
      emissiveIntensity: 0.3,
      metalness: 0.92,
      roughness: 0.18
    });

    const chromeMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f7,
      metalness: 0.96,
      roughness: 0.12
    });

    const amberGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0x8f4614,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.75,
      transparent: true,
      opacity: 0.92
    });

    const obsidianMat = new THREE.MeshStandardMaterial({
      color: 0x141215,
      roughness: 0.35,
      metalness: 0.25
    });

    const modelGroup = new THREE.Group();
    scene.add(modelGroup);

    // Build specific 3D model geometry based on product.modelType
    switch (product.modelType) {
      case 'perfume': {
        const flacon = new THREE.Mesh(new THREE.BoxGeometry(0.9, 1.15, 0.55), amberGlassMat);
        modelGroup.add(flacon);

        const label = new THREE.Mesh(new THREE.BoxGeometry(0.65, 0.6, 0.56), goldMat);
        label.position.set(0, 0, 0.01);
        modelGroup.add(label);

        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.16, 0.22, 16), goldMat);
        neck.position.y = 0.68;
        modelGroup.add(neck);

        const cubeCap = new THREE.Mesh(new THREE.BoxGeometry(0.48, 0.48, 0.48), goldMat);
        cubeCap.position.y = 0.98;
        modelGroup.add(cubeCap);
        break;
      }

      case 'razor': {
        const handle = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.1, 1.6, 32), goldMat);
        modelGroup.add(handle);

        const headBar = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.16, 0.3), chromeMat);
        headBar.position.y = 0.85;
        modelGroup.add(headBar);

        const headCap = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.14, 0.72, 20), goldMat);
        headCap.rotation.z = Math.PI / 2;
        headCap.position.y = 0.94;
        modelGroup.add(headCap);
        break;
      }

      case 'jar': {
        const jarBody = new THREE.Mesh(new THREE.CylinderGeometry(0.7, 0.7, 0.75, 32), obsidianMat);
        modelGroup.add(jarBody);

        const jarLid = new THREE.Mesh(new THREE.CylinderGeometry(0.74, 0.74, 0.25, 32), goldMat);
        jarLid.position.y = 0.48;
        modelGroup.add(jarLid);

        const goldBand = new THREE.Mesh(new THREE.CylinderGeometry(0.705, 0.705, 0.1, 32), goldMat);
        goldBand.position.y = -0.05;
        modelGroup.add(goldBand);
        break;
      }

      case 'tube': {
        const tubeBody = new THREE.Mesh(new THREE.CylinderGeometry(0.4, 0.2, 1.4, 24), obsidianMat);
        tubeBody.position.y = 0.2;
        modelGroup.add(tubeBody);

        const crimp = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.14, 0.08), goldMat);
        crimp.position.y = 0.95;
        modelGroup.add(crimp);

        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.24, 0.24, 0.38, 16), goldMat);
        cap.position.y = -0.65;
        modelGroup.add(cap);
        break;
      }

      case 'dropper': {
        const body = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.1, 24), amberGlassMat);
        modelGroup.add(body);

        const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.16, 0.25, 0.35, 24), amberGlassMat);
        neck.position.y = 0.7;
        modelGroup.add(neck);

        const collar = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.18, 24), goldMat);
        collar.position.y = 0.9;
        modelGroup.add(collar);

        const bulb = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 0.32, 16), obsidianMat);
        bulb.position.y = 1.12;
        modelGroup.add(bulb);
        break;
      }

      case 'giftbox': {
        const box = new THREE.Mesh(new THREE.BoxGeometry(1.0, 1.0, 1.0), obsidianMat);
        modelGroup.add(box);

        const ribbonV = new THREE.Mesh(new THREE.BoxGeometry(0.18, 1.02, 1.02), goldMat);
        modelGroup.add(ribbonV);

        const ribbonH = new THREE.Mesh(new THREE.BoxGeometry(1.02, 0.18, 1.02), goldMat);
        modelGroup.add(ribbonH);

        const bow = new THREE.Mesh(new THREE.TorusGeometry(0.24, 0.06, 16, 24), goldMat);
        bow.position.y = 0.6;
        bow.rotation.x = Math.PI / 2;
        modelGroup.add(bow);
        break;
      }

      default: {
        const bottleBody = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.42, 1.25, 24), obsidianMat);
        modelGroup.add(bottleBody);

        const goldLabel = new THREE.Mesh(new THREE.CylinderGeometry(0.425, 0.425, 0.6, 24), goldMat);
        goldLabel.position.y = 0.05;
        modelGroup.add(goldLabel);

        const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.2, 0.28, 24), goldMat);
        cap.position.y = 0.78;
        modelGroup.add(cap);
        break;
      }
    }

    modelGroup.scale.set(1.3, 1.3, 1.3);

    // Interactive Drag to Rotate
    let isDragging = false;
    let prevX = 0;
    let prevY = 0;
    let autoRotate = true;

    const onMouseDown = (e) => {
      isDragging = true;
      autoRotate = false;
      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const deltaX = e.clientX - prevX;
      const deltaY = e.clientY - prevY;

      modelGroup.rotation.y += deltaX * 0.015;
      modelGroup.rotation.x += deltaY * 0.015;

      prevX = e.clientX;
      prevY = e.clientY;
    };

    const onMouseUp = () => {
      isDragging = false;
      setTimeout(() => {
        autoRotate = true;
      }, 1500);
    };

    container.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);

    // Animation Loop
    let animId;
    let clock = new THREE.Clock();

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (autoRotate) {
        modelGroup.rotation.y += delta * 0.75;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
      if (canvas) {
        canvas.removeEventListener('webglcontextlost', handleLost);
      }
      scene.traverse((obj) => {
        if (obj.geometry) obj.geometry.dispose();
        if (obj.material) {
          if (Array.isArray(obj.material)) obj.material.forEach((m) => m.dispose());
          else obj.material.dispose();
        }
      });
      if (canvas && container.contains(canvas)) {
        container.removeChild(canvas);
      }
      renderer.dispose();
      renderer.forceContextLoss();
    };
  }, [isOpen, product]);

  if (!isOpen || !product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2200);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quickview-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[var(--overlay)] backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-3xl bg-[var(--surface-elevated)] border border-[var(--border-strong)] rounded-2xl shadow-[var(--shadow-lg)] overflow-hidden flex flex-col md:flex-row text-[var(--text-primary)] transition-colors duration-300">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close product view"
          className="absolute top-4 right-4 z-20 p-2 rounded-full border border-[var(--border)] text-[var(--accent-deep)] hover:text-[var(--text-primary)] hover:bg-[var(--surface-alt)] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Interactive 3D Model Display */}
        <div className="md:w-1/2 p-6 flex flex-col items-center justify-center bg-[var(--bg-elevated)] border-b md:border-b-0 md:border-r border-[var(--line)] relative">
          <div className="absolute top-4 left-4 z-10 px-2.5 py-1 rounded bg-[var(--badge-bg)] border border-[var(--badge-border)] text-[10px] uppercase font-bold tracking-widest text-[var(--badge-text)] shadow-sm">
            {product.badge}
          </div>

          {/* 3D Canvas Container */}
          <div
            ref={mountRef}
            className="w-full h-64 sm:h-72 cursor-grab active:cursor-grabbing flex items-center justify-center"
          />

          <p className="text-[10px] text-[var(--text-faint)] tracking-wider uppercase mt-2">
            Click & drag model to inspect in 360°
          </p>
        </div>

        {/* Right Column: Details & Cart Action */}
        <div className="md:w-1/2 p-6 flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center justify-between text-xs mb-1">
              <span className="text-[11px] uppercase tracking-widest text-[var(--gold-deep)] font-semibold">
                {product.category} • {product.size}
              </span>
              <div className="flex items-center gap-1 text-[var(--gold-deep)]">
                <Star className="w-3.5 h-3.5 fill-[var(--gold-deep)]" />
                <span className="font-mono text-xs font-bold">{product.rating}</span>
                <span className="text-[10px] text-[var(--text-faint)]">({product.reviewsCount})</span>
              </div>
            </div>

            <h2 id="quickview-title" className="font-serif font-bold text-2xl text-[var(--text-main)] mb-2 leading-snug">
              {product.name}
            </h2>

            <div className="text-2xl font-serif font-bold text-[var(--gold-deep)] mb-4">
              ₹{product.price.toLocaleString('en-IN')}
              <span className="text-xs text-[var(--text-faint)] font-sans font-normal ml-2">Taxes Included</span>
            </div>

            <p className="text-xs text-[var(--text-soft)] font-light leading-relaxed mb-4">
              {product.description}
            </p>

            {/* Ingredients */}
            <div className="mb-4">
              <h3 className="text-[10px] uppercase tracking-widest text-[var(--gold-deep)] font-semibold mb-2">
                Active Botanical Formula:
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {product.ingredients.map((ing, i) => (
                  <span
                    key={i}
                    className="text-[10px] px-2.5 py-1 rounded bg-[var(--bg-elevated)] text-[var(--text-soft)] border border-[var(--line)]"
                  >
                    {ing}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[var(--bg-elevated)] border border-[var(--line)] text-[11px] text-[var(--gold-deep)]">
              <ShieldCheck className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
              <span>Complimentary sample vial included with every order.</span>
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-4 border-t border-[var(--line)] flex items-center gap-3">
            {/* Quantity */}
            <div className="flex items-center border border-[var(--line)] rounded-lg bg-[var(--bg-elevated)] overflow-hidden">
              <button
                type="button"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-xs font-bold text-[var(--text-soft)] hover:text-[var(--text-main)] hover:bg-[var(--bg-alt)]"
                aria-label="Decrease quantity"
              >
                -
              </button>
              <span className="px-3 text-xs font-mono font-bold text-[var(--text-main)]">{quantity}</span>
              <button
                type="button"
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 text-xs font-bold text-[var(--text-soft)] hover:text-[var(--text-main)] hover:bg-[var(--bg-alt)]"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAdd}
              className="theme-btn-primary flex-1 py-3 px-4 rounded-lg font-bold text-xs uppercase tracking-widest shadow-md transition-all flex items-center justify-center gap-2 active:scale-95"
            >
              {added ? <Check className="w-4 h-4 stroke-[3]" /> : <ShoppingBag className="w-4 h-4" />}
              <span>{added ? 'Added to Cart' : `Add to Cart • ₹${(product.price * quantity).toLocaleString('en-IN')}`}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

