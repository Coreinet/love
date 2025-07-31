'use client'

import AnimatedHeart from '@/components/AnimatedHeart'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef7ff 0%, #fdf2f8 50%, #fce7f3 100%)'
    }}>
      <Navbar />

      {/* Main Content */}
      <div style={{ paddingTop: '80px' }}>
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '0 20px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '16px',
            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            My Dear Samaneh
          </h1>
          <h2 style={{
            fontSize: '32px',
            color: '#ec4899',
            marginBottom: '40px'
          }}>
            I would like you to see this site today 💖
          </h2>
        </div>

        {/* Animated Heart Component */}
        <AnimatedHeart />
      </div>
    </div>
  )
}
