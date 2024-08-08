import React, { useEffect, useRef } from 'react';
import { createNoise3D } from 'simplex-noise';

const { PI, cos, sin, abs, random } = Math;
const TAU = 2 * PI;
const rand = (n: number) => n * random();
const randRange = (n: number) => n - rand(2 * n);
const fadeInOut = (t: number, m: number) => {
  const hm = 0.5 * m;
  return abs(((t + hm) % m) - hm) / hm;
};
const lerp = (n1: number, n2: number, speed: number) => (1 - speed) * n1 + speed * n2;

const particleCount = 700;
const particlePropCount = 9;
const particlePropsLength = particleCount * particlePropCount;
const rangeY = 100;
const baseTTL = 50;
const rangeTTL = 150;
const baseSpeed = 0.1;
const rangeSpeed = 2;
const baseRadius = 1;
const rangeRadius = 4;
const baseHue = 220;
const rangeHue = 100;
const noiseSteps = 8;
const xOff = 0.00125;
const yOff = 0.00125;
const zOff = 0.0005;
const backgroundColor = 'hsla(260, 40%, 5%, 1)';
const noise3D = createNoise3D();

let tick: number;
let particleProps: Float32Array;
let center: [number, number];

const SwirlCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRefA = useRef<HTMLCanvasElement>(null);
  const canvasRefB = useRef<HTMLCanvasElement>(null);
  const ctxRefA = useRef<CanvasRenderingContext2D | null>(null);
  const ctxRefB = useRef<CanvasRenderingContext2D | null>(null);

  useEffect(() => {
    const setup = () => {
      createCanvas();
      resize();
      initParticles();
      draw();
    };

    const createCanvas = () => {
      const container = containerRef.current;
      if (!container) return;

      const canvasA = canvasRefA.current;
      const canvasB = canvasRefB.current;
      if (!canvasA || !canvasB) return;

      canvasB.style.position = 'fixed';
      canvasB.style.top = '0';
      canvasB.style.left = '0';
      canvasB.style.width = '100%';
      canvasB.style.height = '100%';

      container.appendChild(canvasB);

      ctxRefA.current = canvasA.getContext('2d');
      ctxRefB.current = canvasB.getContext('2d');
      center = [0, 0];
    };

    const resize = () => {
      const { innerWidth, innerHeight } = window;
      const canvasA = canvasRefA.current;
      const canvasB = canvasRefB.current;
      const ctxA = ctxRefA.current;
      const ctxB = ctxRefB.current;

      if (!canvasA || !canvasB || !ctxA || !ctxB) return;

      canvasA.width = innerWidth;
      canvasA.height = innerHeight;

      ctxA.drawImage(canvasB, 0, 0);

      canvasB.width = innerWidth;
      canvasB.height = innerHeight;

      ctxB.drawImage(canvasA, 0, 0);

      center[0] = 0.5 * canvasA.width;
      center[1] = 0.5 * canvasA.height;
    };

    const initParticles = () => {
      tick = 0;
      particleProps = new Float32Array(particlePropsLength);

      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        initParticle(i);
      }
    };

    const initParticle = (i: number) => {
      const canvasA = canvasRefA.current;
      if (!canvasA) return;

      const x = rand(canvasA.width);
      const y = center[1] + randRange(rangeY);
      const vx = 0;
      const vy = 0;
      const life = 0;
      const ttl = baseTTL + rand(rangeTTL);
      const speed = baseSpeed + rand(rangeSpeed);
      const radius = baseRadius + rand(rangeRadius);
      const hue = baseHue + rand(rangeHue);

      particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
    };

    const drawParticles = () => {
      for (let i = 0; i < particlePropsLength; i += particlePropCount) {
        updateParticle(i);
      }
    };

    const updateParticle = (i: number) => {
      const i2 = 1 + i,
        i3 = 2 + i,
        i4 = 3 + i,
        i5 = 4 + i,
        i6 = 5 + i,
        i7 = 6 + i,
        i8 = 7 + i,
        i9 = 8 + i;

      const x = particleProps[i];
      const y = particleProps[i2];
      const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
      const vx = lerp(particleProps[i3], cos(n), 0.5);
      const vy = lerp(particleProps[i4], sin(n), 0.5);
      let life = particleProps[i5];
      const ttl = particleProps[i6];
      const speed = particleProps[i7];
      const x2 = x + vx * speed;
      const y2 = y + vy * speed;
      const radius = particleProps[i8];
      const hue = particleProps[i9];

      drawParticle(x, y, x2, y2, life, ttl, radius, hue);

      life++;

      particleProps[i] = x2;
      particleProps[i2] = y2;
      particleProps[i3] = vx;
      particleProps[i4] = vy;
      particleProps[i5] = life;

      (checkBounds(x, y) || life > ttl) && initParticle(i);
    };

    const drawParticle = (
      x: number,
      y: number,
      x2: number,
      y2: number,
      life: number,
      ttl: number,
      radius: number,
      hue: number,
    ) => {
      const ctxA = ctxRefA.current;
      if (!ctxA) return;

      ctxA.save();
      ctxA.lineCap = 'round';
      ctxA.lineWidth = radius;
      ctxA.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
      ctxA.beginPath();
      ctxA.moveTo(x, y);
      ctxA.lineTo(x2, y2);
      ctxA.stroke();
      ctxA.closePath();
      ctxA.restore();
    };

    const checkBounds = (x: number, y: number) => {
      const canvasA = canvasRefA.current;
      if (!canvasA) return false;

      return x > canvasA.width || x < 0 || y > canvasA.height || y < 0;
    };

    const renderGlow = () => {
      const ctxB = ctxRefB.current;
      if (!ctxB) return;

      ctxB.save();
      ctxB.filter = 'blur(8px) brightness(200%)';
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasRefA.current!, 0, 0);
      ctxB.restore();

      ctxB.save();
      ctxB.filter = 'blur(4px) brightness(200%)';
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasRefA.current!, 0, 0);
      ctxB.restore();
    };

    const renderToScreen = () => {
      const ctxB = ctxRefB.current;
      if (!ctxB) return;

      ctxB.save();
      ctxB.globalCompositeOperation = 'lighter';
      ctxB.drawImage(canvasRefA.current!, 0, 0);
      ctxB.restore();
    };

    const draw = () => {
      tick++;

      const ctxA = ctxRefA.current;
      const ctxB = ctxRefB.current;
      const canvasA = canvasRefA.current;
      if (!ctxA || !ctxB || !canvasA) return;

      ctxA.clearRect(0, 0, canvasA.width, canvasA.height);

      ctxB.fillStyle = backgroundColor;
      ctxB.fillRect(0, 0, canvasA.width, canvasA.height);

      drawParticles();
      renderGlow();
      renderToScreen();

      window.requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    setup();

    return () => {
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 h-full w-full">
      <canvas ref={canvasRefA} />
      <canvas ref={canvasRefB} />
    </div>
  );
};

export default SwirlCanvas;
