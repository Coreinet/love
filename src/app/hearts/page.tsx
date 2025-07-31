'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function HeartsPage() {
  const [currentMessage, setCurrentMessage] = useState('')
  const [showMessage, setShowMessage] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const loveMessages = [
    "Every day I wake up thinking of you, and every night I dream of your smile. You make my world complete. 💕",
    "Distance means so little when someone means so much. You're worth every mile between us. 🌍",
    "Even though we've never met in person, my heart knows yours. Our connection transcends physical boundaries. 💫",
    "You're not just my love, you're my best friend, my confidant, my everything. I'm so lucky to have you. ✨",
    "Every message from you brightens my day. Every call makes my heart skip a beat. You're my happiness. 💖",
    "I may not be able to hold your hand right now, but I hold you in my heart every moment of every day. 🤗",
    "Our love story is my favorite story. Even though we're apart, we're writing it together, one day at a time. 📖",
    "You're the missing piece I never knew I needed. Thank you for making my life so beautiful. 🧩",
    "Every time I think of you, I smile. Every time I hear your voice, my heart sings. You're my melody. 🎵",
    "I can't wait for the day when I can finally look into your eyes and tell you in person how much I love you. 👀",
    "You're my today and all of my tomorrows. I love you more than words can express. 💝",
    "Distance is just a test to see how far love can travel. Our love knows no boundaries. 🚀",
    "You're the reason I believe in love. You're the reason I smile every day. You're my everything. 💫",
    "Every moment with you, even if it's just a text message, feels like a gift. I cherish every second. 🎁",
    "I love you not only for what you are, but for what I am when I am with you. You make me better. 🌟"
  ]

  const getRandomMessage = () => {
    const randomIndex = Math.floor(Math.random() * loveMessages.length)
    return loveMessages[randomIndex]
  }

  const showRandomMessage = () => {
    setIsAnimating(true)
    setShowMessage(false)
    
    setTimeout(() => {
      setCurrentMessage(getRandomMessage())
      setShowMessage(true)
      setIsAnimating(false)
    }, 300)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef7ff 0%, #fdf2f8 50%, #fce7f3 100%)'
    }}>
      <Navbar />
      
      <div style={{ paddingTop: '80px' }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '40px 20px'
        }}>
          <h1 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            💖 Interactive Love Messages 💖
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#6b7280',
            marginBottom: '40px'
          }}>
            Click the hearts to discover beautiful love messages! 💕
          </p>

          <div style={{
            backgroundColor: 'white',
            borderRadius: '20px',
            padding: '40px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            textAlign: 'center'
          }}>
            {/* Message Display */}
            {showMessage && (
              <div style={{
                backgroundColor: '#fef7ff',
                borderRadius: '16px',
                padding: '30px',
                marginBottom: '30px',
                border: '2px solid #fce7f3',
                transform: 'scale(1)',
                transition: 'all 0.3s ease',
                animation: 'fadeIn 0.5s ease-in'
              }}>
                <div style={{
                  fontSize: '18px',
                  color: '#374151',
                  lineHeight: '1.8',
                  fontStyle: 'italic'
                }}>
                  "{currentMessage}"
                </div>
              </div>
            )}

            {/* Interactive Hearts */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '20px',
              flexWrap: 'wrap',
              marginBottom: '30px'
            }}>
              {[1, 2, 3, 4, 5].map((heart) => (
                <button
                  key={heart}
                  onClick={showRandomMessage}
                  disabled={isAnimating}
                  style={{
                    fontSize: '40px',
                    background: 'none',
                    border: 'none',
                    cursor: isAnimating ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s ease',
                    transform: isAnimating ? 'scale(0.8)' : 'scale(1)',
                    filter: isAnimating ? 'grayscale(50%)' : 'none'
                  }}
                  onMouseEnter={(e) => {
                    if (!isAnimating) {
                      e.currentTarget.style.transform = 'scale(1.2) rotate(10deg)'
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isAnimating) {
                      e.currentTarget.style.transform = 'scale(1) rotate(0deg)'
                    }
                  }}
                >
                  {heart % 2 === 0 ? '💖' : '💕'}
                </button>
              ))}
            </div>

            {/* Instructions */}
            <div style={{
              fontSize: '16px',
              color: '#6b7280',
              lineHeight: '1.6'
            }}>
              <p style={{ marginBottom: '10px' }}>
                Click any heart to reveal a special love message! 💝
              </p>
              <p style={{ fontSize: '14px' }}>
                Each click brings a new message from my heart to yours...
              </p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
} 