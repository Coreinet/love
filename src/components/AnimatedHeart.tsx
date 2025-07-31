'use client'

import { useState } from 'react'

export default function AnimatedHeart() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div className="flex items-center justify-center h-96">
      <div
        className="cursor-pointer transition-all duration-300 ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          transform: isHovered ? 'scale(1.1)' : 'scale(1)',
        }}
      >
        <svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="drop-shadow-2xl"
          style={{
            filter: isHovered 
              ? 'drop-shadow(0 0 30px #E91E63) drop-shadow(0 0 60px #E91E63)' 
              : 'drop-shadow(0 0 20px #E91E63) drop-shadow(0 0 40px #E91E63)'
          }}
        >
          <path
            d="M100 180C100 180 20 120 20 80C20 50 40 30 70 30C85 30 95 40 100 50C105 40 115 30 130 30C160 30 180 50 180 80C180 120 100 180 100 180Z"
            fill={isHovered ? '#C2185B' : '#E91E63'}
            className="transition-all duration-300 ease-in-out"
            style={{
              animation: 'heartbeat 2s ease-in-out infinite'
            }}
          />
        </svg>
      </div>

      <style jsx>{`
        @keyframes heartbeat {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.05);
          }
        }
      `}</style>
    </div>
  )
} 