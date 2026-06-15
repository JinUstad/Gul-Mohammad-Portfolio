"use client";

import { useEffect, useRef, useState } from "react";

interface Star {
  x: number;
  y: number;
  size: number;
  opacity: number;
  speedX: number;
  speedY: number;
}

interface Planet {
  x: number;
  y: number;
  baseX: number;
  baseY: number;
  radius: number;
  colorStart: string;
  colorEnd: string;
  glowColor: string;
  angle: number;
  speed: number;
  orbitRadius: number;
  hasRing: boolean;
  ringColor: string;
  parallaxFactor: number;
}

interface ShootingStar {
  x: number;
  y: number;
  dx: number;
  dy: number;
  length: number;
  speed: number;
  opacity: number;
  active: boolean;
}

export default function SpaceBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: 0, y: 0, targetX: 0, targetY: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: Star[] = [];
    let planets: Planet[] = [];
    let shootingStar: ShootingStar = {
      x: 0,
      y: 0,
      dx: 0,
      dy: 0,
      length: 0,
      speed: 0,
      opacity: 0,
      active: false,
    };

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const density = window.innerWidth < 768 ? 80 : 200;
      for (let i = 0; i < density; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.8 + 0.2,
          speedX: (Math.random() - 0.5) * 0.05,
          speedY: (Math.random() - 0.5) * 0.05,
        });
      }
    };

    const initPlanets = () => {
      planets = [
        {
          x: 0,
          y: 0,
          baseX: canvas.width * 0.8,
          baseY: canvas.height * 0.25,
          radius: 40,
          colorStart: "#a855f7",
          colorEnd: "#3b82f6",
          glowColor: "rgba(168, 85, 247, 0.4)",
          angle: 0,
          speed: 0.0003,
          orbitRadius: 25,
          hasRing: true,
          ringColor: "rgba(168, 85, 247, 0.3)",
          parallaxFactor: 0.04,
        },
        {
          x: 0,
          y: 0,
          baseX: canvas.width * 0.15,
          baseY: canvas.height * 0.65,
          radius: 65,
          colorStart: "#00f0ff",
          colorEnd: "#1e3a8a",
          glowColor: "rgba(0, 240, 255, 0.35)",
          angle: Math.PI,
          speed: 0.00015,
          orbitRadius: 40,
          hasRing: false,
          ringColor: "",
          parallaxFactor: 0.02,
        },
        {
          x: 0,
          y: 0,
          baseX: canvas.width * 0.75,
          baseY: canvas.height * 0.8,
          radius: 20,
          colorStart: "#f43f5e",
          colorEnd: "#701a75",
          glowColor: "rgba(244, 63, 94, 0.3)",
          angle: Math.PI / 2,
          speed: 0.0005,
          orbitRadius: 15,
          hasRing: false,
          ringColor: "",
          parallaxFactor: 0.06,
        },
      ];
    };

    const triggerShootingStar = () => {
      if (shootingStar.active) return;
      shootingStar = {
        x: Math.random() * canvas.width * 0.7,
        y: Math.random() * canvas.height * 0.4,
        dx: Math.random() * 4 + 4,
        dy: Math.random() * 2 + 2,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 12 + 10,
        opacity: 1,
        active: true,
      };
    };

    const drawShootingStar = () => {
      if (!shootingStar.active) return;

      ctx.beginPath();
      const grad = ctx.createLinearGradient(
        shootingStar.x,
        shootingStar.y,
        shootingStar.x - shootingStar.dx * (shootingStar.length / 10),
        shootingStar.y - shootingStar.dy * (shootingStar.length / 10)
      );
      grad.addColorStop(0, `rgba(255, 255, 255, ${shootingStar.opacity})`);
      grad.addColorStop(0.3, `rgba(0, 240, 255, ${shootingStar.opacity * 0.6})`);
      grad.addColorStop(1, "rgba(168, 85, 247, 0)");

      ctx.strokeStyle = grad;
      ctx.lineWidth = 2;
      ctx.moveTo(shootingStar.x, shootingStar.y);
      ctx.lineTo(
        shootingStar.x - shootingStar.dx * 10,
        shootingStar.y - shootingStar.dy * 10
      );
      ctx.stroke();

      // Update shooting star pos
      shootingStar.x += shootingStar.dx * (shootingStar.speed * 0.1);
      shootingStar.y += shootingStar.dy * (shootingStar.speed * 0.1);
      shootingStar.opacity -= 0.015;

      if (
        shootingStar.opacity <= 0 ||
        shootingStar.x > canvas.width ||
        shootingStar.y > canvas.height
      ) {
        shootingStar.active = false;
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX;
      mouseRef.current.targetY = e.clientY;
    };

    // Initialize
    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove);
    
    // Set initial mouse position in center to avoid jump
    mouseRef.current.x = window.innerWidth / 2;
    mouseRef.current.y = window.innerHeight / 2;
    mouseRef.current.targetX = window.innerWidth / 2;
    mouseRef.current.targetY = window.innerHeight / 2;

    handleResize();
    initPlanets();

    // Loop
    const animate = () => {
      // Clear canvas
      ctx.fillStyle = "#050816";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Lerp mouse
      const mouse = mouseRef.current;
      mouse.x += (mouse.targetX - mouse.x) * 0.08;
      mouse.y += (mouse.targetY - mouse.y) * 0.08;

      // Mouse Spotlight Glow
      const spotGlow = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        Math.max(canvas.width, canvas.height) * 0.45
      );
      spotGlow.addColorStop(0, "rgba(88, 28, 135, 0.15)");
      spotGlow.addColorStop(0.5, "rgba(15, 23, 42, 0.05)");
      spotGlow.addColorStop(1, "rgba(5, 8, 22, 0)");
      ctx.fillStyle = spotGlow;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw Stars
      ctx.fillStyle = "#ffffff";
      stars.forEach((star) => {
        // Apply tiny drift
        star.x += star.speedX;
        star.y += star.speedY;

        // Wrap stars
        if (star.x < 0) star.x = canvas.width;
        if (star.x > canvas.width) star.x = 0;
        if (star.y < 0) star.y = canvas.height;
        if (star.y > canvas.height) star.y = 0;

        // Mouse parallax
        const dx = (mouse.x - canvas.width / 2) * 0.015 * star.size;
        const dy = (mouse.y - canvas.height / 2) * 0.015 * star.size;

        ctx.beginPath();
        ctx.arc(star.x + dx, star.y + dy, star.size, 0, Math.PI * 2);
        
        // Twinkle
        const opacityTwinkle = star.opacity + (Math.random() - 0.5) * 0.1;
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.max(0.1, Math.min(1, opacityTwinkle))})`;
        ctx.fill();
      });

      // Draw Shooting Star at random
      if (Math.random() < 0.003) {
        triggerShootingStar();
      }
      drawShootingStar();

      // Update & Draw Planets
      planets.forEach((planet) => {
        planet.angle += planet.speed;
        
        // Circular orbit drift
        const orbitX = Math.cos(planet.angle) * planet.orbitRadius;
        const orbitY = Math.sin(planet.angle) * planet.orbitRadius;

        // Parallax offset
        const pX = (mouse.x - canvas.width / 2) * planet.parallaxFactor;
        const pY = (mouse.y - canvas.height / 2) * planet.parallaxFactor;

        planet.x = planet.baseX + orbitX + pX;
        planet.y = planet.baseY + orbitY + pY;

        // Draw planet glow
        ctx.beginPath();
        const glowGrad = ctx.createRadialGradient(
          planet.x,
          planet.y,
          planet.radius * 0.5,
          planet.x,
          planet.y,
          planet.radius * 2.5
        );
        glowGrad.addColorStop(0, planet.glowColor);
        glowGrad.addColorStop(0.5, planet.glowColor.replace(/[\d.]+\)$/, "0.1)"));
        glowGrad.addColorStop(1, "rgba(0,0,0,0)");
        
        ctx.fillStyle = glowGrad;
        ctx.arc(planet.x, planet.y, planet.radius * 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Draw planet body
        ctx.beginPath();
        const bodyGrad = ctx.createLinearGradient(
          planet.x - planet.radius,
          planet.y - planet.radius,
          planet.x + planet.radius,
          planet.y + planet.radius
        );
        bodyGrad.addColorStop(0, planet.colorStart);
        bodyGrad.addColorStop(0.7, planet.colorEnd);
        bodyGrad.addColorStop(1, "#020308");

        ctx.fillStyle = bodyGrad;
        ctx.arc(planet.x, planet.y, planet.radius, 0, Math.PI * 2);
        ctx.fill();

        // Draw rings if applicable
        if (planet.hasRing) {
          ctx.save();
          ctx.translate(planet.x, planet.y);
          ctx.rotate(-Math.PI / 8); // Tilt the ring
          ctx.scale(2.2, 0.4);      // Flatten to make it a ring

          ctx.beginPath();
          ctx.arc(0, 0, planet.radius, 0, Math.PI * 2);
          ctx.strokeStyle = planet.ringColor;
          ctx.lineWidth = 4;
          ctx.stroke();
          ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full -z-10 pointer-events-none"
    />
  );
}
