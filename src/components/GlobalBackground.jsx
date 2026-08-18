import { useEffect, useRef } from 'react';

const COLORS = ['105,221,255', '83,145,255', '158,123,255'];

export default function GlobalBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d', { alpha: true });
    const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
    const mobile = matchMedia('(max-width: 700px)');
    let width = 0, height = 0, pixelRatio = 1, frame = 0, lastTime = 0;
    let pointerX = 0, pointerY = 0, smoothX = 0, smoothY = 0, scrollDepth = scrollY;
    let particles = [];

    const createParticles = () => {
      const count = reducedMotion.matches ? 12 : mobile.matches ? 16 : 34;
      particles = Array.from({ length: count }, (_, index) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        z: .2 + Math.random() * .8,
        radius: .45 + Math.random() * 1.05,
        drift: (Math.random() - .5) * .018,
        color: COLORS[index % COLORS.length],
      }));
    };

    const resize = () => {
      width = innerWidth;
      height = innerHeight;
      pixelRatio = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * pixelRatio);
      canvas.height = Math.round(height * pixelRatio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      createParticles();
    };

    const handlePointer = (event) => {
      if (mobile.matches || reducedMotion.matches) return;
      pointerX = event.clientX / width - .5;
      pointerY = event.clientY / height - .5;
    };
    const handleScroll = () => { scrollDepth = scrollY; };

    const drawPolygon = (x, y, radius, sides, rotation, color, opacity) => {
      context.beginPath();
      for (let side = 0; side <= sides; side += 1) {
        const angle = rotation + side * Math.PI * 2 / sides;
        const px = x + Math.cos(angle) * radius;
        const py = y + Math.sin(angle) * radius * .68;
        if (side === 0) context.moveTo(px, py); else context.lineTo(px, py);
      }
      context.strokeStyle = `rgba(${color},${opacity})`;
      context.lineWidth = .7;
      context.stroke();
    };

    const render = (time = 0) => {
      const delta = Math.min(time - lastTime, 40);
      lastTime = time;
      smoothX += (pointerX - smoothX) * .025;
      smoothY += (pointerY - smoothY) * .025;
      context.clearRect(0, 0, width, height);

      const scrollOffset = (scrollDepth % Math.max(height * 3, 1)) * .018;
      particles.forEach((particle) => {
        if (!reducedMotion.matches) particle.y -= delta * (.0025 + particle.z * .005);
        particle.x += particle.drift * delta;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        const depthX = smoothX * 25 * particle.z;
        const depthY = smoothY * 18 * particle.z - scrollOffset * particle.z;
        context.beginPath();
        context.arc(particle.x + depthX, particle.y + depthY, particle.radius * (.65 + particle.z), 0, Math.PI * 2);
        context.fillStyle = `rgba(${particle.color},${.08 + particle.z * .16})`;
        context.fill();
      });

      const slowTime = reducedMotion.matches ? 0 : time * .000025;
      drawPolygon(width * .12 + smoothX * 12, height * .28 + smoothY * 8 - scrollOffset * .2, mobile.matches ? 42 : 72, 6, slowTime, COLORS[0], .11);
      drawPolygon(width * .86 - smoothX * 18, height * .67 - smoothY * 12 - scrollOffset * .35, mobile.matches ? 55 : 105, 4, -slowTime * .72, COLORS[2], .1);
      if (!mobile.matches) drawPolygon(width * .68 + smoothX * 9, height * .16 + smoothY * 7 - scrollOffset * .12, 48, 3, slowTime * .55, COLORS[1], .085);

      if (!reducedMotion.matches) frame = requestAnimationFrame(render);
    };

    const refreshMotion = () => { resize(); cancelAnimationFrame(frame); render(); };
    resize();
    addEventListener('resize', resize, { passive: true });
    addEventListener('pointermove', handlePointer, { passive: true });
    addEventListener('scroll', handleScroll, { passive: true });
    reducedMotion.addEventListener('change', refreshMotion);
    mobile.addEventListener('change', resize);
    render();

    return () => {
      cancelAnimationFrame(frame);
      removeEventListener('resize', resize);
      removeEventListener('pointermove', handlePointer);
      removeEventListener('scroll', handleScroll);
      reducedMotion.removeEventListener('change', refreshMotion);
      mobile.removeEventListener('change', resize);
    };
  }, []);

  return <div className="global-background" aria-hidden="true"><canvas ref={canvasRef}/><div className="background-glow glow-cyan"/><div className="background-glow glow-violet"/><div className="background-depth-grid"/></div>;
}
