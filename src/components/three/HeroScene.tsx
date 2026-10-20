import { useEffect, useRef } from 'react';

export function HeroScene() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width = 500;
    const height = canvas.height = 500;
    const cx = width / 2;
    const cy = height / 2;
    const radius = 150;

    let frame = 0;

    const render = () => {
      frame += 0.014;
      ctx.clearRect(0, 0, width, height);

      ctx.globalAlpha = 0.25;
      ctx.strokeStyle = '#19D3F3';
      ctx.lineWidth = 1;

      for (let i = 0; i < 16; i++) {
        const angle = (Math.PI * 2 * i) / 16 + frame;
        const x = cx + Math.cos(angle) * (radius + 24 * Math.sin(frame * 1.8 + i));
        const y = cy + Math.sin(angle) * (radius + 18 * Math.cos(frame * 1.4 + i));

        ctx.beginPath();
        ctx.arc(x, y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = '#1FA2FF';
        ctx.fill();
      }

      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(31,162,255,0.75)';
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 0.7, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(25,211,243,0.35)';
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.1, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(255,255,255,0.08)';
      ctx.stroke();

      requestAnimationFrame(render);
    };

    const id = requestAnimationFrame(render);
    return () => cancelAnimationFrame(id);
  }, []);

  return <canvas ref={canvasRef} className="h-[320px] w-full max-w-[500px] rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#061540] via-[#081d42] to-[#020B24] shadow-card" />;
}
