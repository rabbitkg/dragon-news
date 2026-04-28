'use client';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

export default function NotFound() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    // Particles
    const particles = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.3,
      dx: (Math.random() - 0.5) * 0.3,
      dy: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.7 + 0.2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Deep space base
      ctx.fillStyle = '#050818';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula glow — teal
      const g1 = ctx.createRadialGradient(
        canvas.width * 0.25, canvas.height * 0.4, 0,
        canvas.width * 0.25, canvas.height * 0.4, canvas.width * 0.45
      );
      g1.addColorStop(0, 'rgba(56, 189, 248, 0.07)');
      g1.addColorStop(1, 'transparent');
      ctx.fillStyle = g1;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Nebula glow — violet
      const g2 = ctx.createRadialGradient(
        canvas.width * 0.75, canvas.height * 0.6, 0,
        canvas.width * 0.75, canvas.height * 0.6, canvas.width * 0.4
      );
      g2.addColorStop(0, 'rgba(139, 92, 246, 0.09)');
      g2.addColorStop(1, 'transparent');
      ctx.fillStyle = g2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Center soft glow behind card
      const g3 = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.5, 0,
        canvas.width * 0.5, canvas.height * 0.5, 320
      );
      g3.addColorStop(0, 'rgba(99, 102, 241, 0.06)');
      g3.addColorStop(1, 'transparent');
      ctx.fillStyle = g3;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Stars / particles
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(200, 220, 255, ${p.opacity})`;
        ctx.fill();

        p.x += p.dx;
        p.y += p.dy;

        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;
      });

      // Horizontal scanlines
      for (let y = 0; y < canvas.height; y += 4) {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, y, canvas.width, 1);
      }

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="relative min-h-[100vh] flex items-center justify-center px-6 overflow-hidden">

      {/* Animated sci-fi canvas background */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

      {/* Thin grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(148,163,255,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(148,163,255,1) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Card */}
      <div
        className="relative rounded-2xl px-14 py-12 max-w-xl w-full text-center animate-[fadeUp_0.6s_cubic-bezier(0.22,1,0.36,1)_both]"
        style={{
          background: 'rgba(10, 14, 35, 0.75)',
          border: '0.5px solid rgba(148, 163, 255, 0.18)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          boxShadow: '0 0 0 1px rgba(99,102,241,0.08), 0 32px 64px rgba(0,0,0,0.5)',
        }}
      >
        {/* Badge */}
        <div
          className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.18em] uppercase rounded-full px-4 py-1.5 mb-6"
          style={{
            color: '#a5b4fc',
            background: 'rgba(99,102,241,0.12)',
            border: '0.5px solid rgba(99,102,241,0.25)',
          }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#818cf8' }}
          />
          Error 404
        </div>

        {/* 404 */}
        <h1
          className="font-extrabold leading-none tracking-tighter mb-1"
          style={{
            fontSize: 'clamp(80px, 16vw, 120px)',
            background: 'linear-gradient(135deg, #e0e7ff 0%, #a5b4fc 50%, #6366f1 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}
        >
          404
        </h1>

        {/* Title */}
        <h2 className="text-2xl font-bold mb-3" style={{ color: '#e0e7ff' }}>
          Page not found
        </h2>

        {/* Description */}
        <p
          className="text-[15px] leading-relaxed font-light mb-8"
          style={{ color: '#94a3b8' }}
        >
          The page you&apos;re looking for has been moved, deleted,
          <br />or perhaps never existed in this universe.
        </p>

        {/* Actions */}
        <div className="flex items-center justify-center gap-3 flex-wrap">
          <Link href="/">
            <button
              className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-medium rounded-lg cursor-pointer transition-all duration-150 active:scale-95"
              style={{
                background: 'linear-gradient(135deg, #4f46e5, #6366f1)',
                color: '#fff',
                border: '0.5px solid rgba(165,180,252,0.2)',
                boxShadow: '0 0 20px rgba(99,102,241,0.3)',
              }}
              onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 32px rgba(99,102,241,0.5)'}
              onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(99,102,241,0.3)'}
            >
              ← Back to home
            </button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-normal rounded-lg transition-all duration-150 active:scale-95 cursor-pointer"
            style={{
              color: '#94a3b8',
              background: 'rgba(255,255,255,0.04)',
              border: '0.5px solid rgba(148,163,255,0.15)',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = '#e0e7ff'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = '#94a3b8'; }}
          >
            Go back
          </button>
        </div>

        {/* Divider */}
        <div
          className="mx-auto my-7"
          style={{
            width: '40px',
            height: '1px',
            background: 'rgba(148,163,255,0.15)',
          }}
        />

        {/* Quick links */}
        <div className="flex justify-center gap-5 flex-wrap">
          {['Dashboard', 'Settings', 'Support'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className="text-sm transition-colors duration-150"
              style={{ color: '#475569' }}
              onMouseEnter={e => e.currentTarget.style.color = '#a5b4fc'}
              onMouseLeave={e => e.currentTarget.style.color = '#475569'}
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}