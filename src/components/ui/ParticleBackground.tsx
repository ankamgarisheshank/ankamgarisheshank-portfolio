import React, { useRef, useEffect } from 'react';

const ParticleBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];

    // Set canvas dimensions
    const resizeCanvas = () => {
      const safeCanvas = canvasRef.current!;
      safeCanvas.width = window.innerWidth;
      safeCanvas.height = window.innerHeight;
      createParticles();
    };

    // Particle class
    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;
      constructor() {
        const safeCanvas = canvasRef.current!;
        this.x = Math.random() * safeCanvas.width;
        this.y = Math.random() * safeCanvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedX = (Math.random() - 0.5) * 0.5;
        this.speedY = (Math.random() - 0.5) * 0.5;
        
        // Colors matching the portfolio theme
        const colors = [
          'rgba(56, 189, 248, 0.7)', // primary blue
          'rgba(139, 92, 246, 0.7)',  // accent purple
          'rgba(57, 255, 20, 0.5)',   // neon green
        ];
        
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        const safeCanvas = canvasRef.current!;
        // Boundary check
        if (this.x > safeCanvas.width) this.x = 0;
        else if (this.x < 0) this.x = safeCanvas.width;

        if (this.y > safeCanvas.height) this.y = 0;
        else if (this.y < 0) this.y = safeCanvas.height;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    // Create particles
    const createParticles = () => {
      particles = [];
      const particleCount = Math.min((canvas.width * canvas.height) / 20000, 150);
      
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Connect particles with lines
      connectParticles();
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Connect nearby particles with lines
    const connectParticles = () => {
      if (!ctx) return;
      const maxDistance = 120;
      
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - (distance / maxDistance);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(139, 92, 246, ${opacity * 0.3})`;
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    // Initialize
    resizeCanvas();
    animate();

    // Handle window resize
    window.addEventListener('resize', resizeCanvas);

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 h-full w-full bg-gradient-to-b from-dark-300 via-dark-200 to-dark-100"
    />
  );
};

export default ParticleBackground;