import React, { useState, useEffect } from 'react'
import './Cursor.css'

function Cursor() {
  const [mouseX, setMouseX] = useState(0)
  const [mouseY, setMouseY] = useState(0)
  const [ringX, setRingX] = useState(0)
  const [ringY, setRingY] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouseX(e.clientX)
      setMouseY(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    const animate = () => {
      setRingX((prev) => prev + (mouseX - prev) * 0.12)
      setRingY((prev) => prev + (mouseY - prev) * 0.12)
      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationId)
  }, [mouseX, mouseY])

  useEffect(() => {
    const handleHover = () => setIsHovered(true)
    const handleLeave = () => setIsHovered(false)

    const links = document.querySelectorAll('a, button')
    links.forEach((el) => {
      el.addEventListener('mouseenter', handleHover)
      el.addEventListener('mouseleave', handleLeave)
    })

    return () => {
      links.forEach((el) => {
        el.removeEventListener('mouseenter', handleHover)
        el.removeEventListener('mouseleave', handleLeave)
      })
    }
  }, [])

  return (
    <>
      <div
        className="cursor"
        style={{
          left: `${mouseX}px`,
          top: `${mouseY}px`,
          transform: `translate(-50%, -50%) scale(${isHovered ? 2.5 : 1})`,
        }}
      />
      <div
        className="cursor-ring"
        style={{
          left: `${ringX}px`,
          top: `${ringY}px`,
          opacity: isHovered ? 0 : 0.5,
        }}
      />
    </>
  )
}

export default Cursor
