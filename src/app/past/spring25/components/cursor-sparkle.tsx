'use client'

import { useEffect, useState } from 'react'

export function CursorSparkle() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<{ x: number; y: number; life: number; color: string }[]>([])
  
  useEffect(() => {
    const colors = ['#9333EA', '#A855F7', '#D8B4FE', '#F0ABFC', '#FFD700']
    let animationFrameId: number
    
    const createParticle = (baseX: number, baseY: number) => {
      const angle = Math.random() * Math.PI * 2
      const radius = Math.random() * 20
      return {
        x: baseX + Math.cos(angle) * radius,
        y: baseY + Math.sin(angle) * radius,
        life: 1,
        color: colors[Math.floor(Math.random() * colors.length)]
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY })
    }

    document.addEventListener('mousemove', handleMouseMove)
    
    const animate = () => {
      setParticles(prev => [
        ...prev.map(p => ({ ...p, life: p.life - 0.02 })).filter(p => p.life > 0),
        createParticle(mousePos.x, mousePos.y),
        createParticle(mousePos.x, mousePos.y),
        createParticle(mousePos.x, mousePos.y)
      ])
      animationFrameId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [mousePos])

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {particles.map((particle, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: particle.x,
            top: particle.y,
            backgroundColor: particle.color,
            opacity: particle.life,
            transform: `scale(${particle.life})`,
            transition: 'transform 0.2s ease-out'
          }}
        />
      ))}
    </div>
  )
} 