'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function LetterPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [showLetter, setShowLetter] = useState(false)
  const [selectedAnswer, setSelectedAnswer] = useState('')

  const questions = [
    {
      question: "What's my favorite color?",
      options: ["Pink", "Dark Blue", "Purple", "Red"],
      correct: "Dark Blue"
    },
    {
      question: "What's our favorite food to eat together?",
      options: ["Pizza", "Lazania", "Pasta", "Burgers"],
      correct: "Lazania"
    },
    {
      question: "What's my dream vacation destination?",
      options: ["London", "Bali", "New York", "Tokyo"],
      correct: "London"
    },
    {
      question: "What's my favorite season?",
      options: ["Spring", "Summer", "Autumn", "Winter"],
      correct: "Spring"
    },
    {
      question: "What's my biggest fear?",
      options: ["Spiders", "Heights", "Losing you", "Darkness"],
      correct: "Losing you"
    }
  ]

  const handleAnswerSelect = (answer: string) => {
    setSelectedAnswer(answer)
  }

  const handleSubmit = () => {
    if (selectedAnswer === questions[currentQuestion].correct) {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1)
        setSelectedAnswer('')
      } else {
        setShowLetter(true)
      }
    } else {
      alert('Wrong answer! Try again! 💕')
    }
  }

  const loveLetter = `
    My Dearest Love,

    Every day with you feels like a beautiful dream come true. Your smile lights up my world in ways I never thought possible. You are not just my girlfriend, but my best friend, my soulmate, and my everything.

    I remember the first time we met, how my heart skipped a beat when I saw you. Since then, every moment we've shared has been a treasure I hold dear to my heart. Your love has made me a better person, and I'm grateful for every second we spend together.

    You are the most beautiful person I've ever known, both inside and out. Your kindness, your strength, your intelligence, and your beautiful spirit make me fall in love with you more and more each day.

    I promise to love you with all my heart, to be there for you in good times and bad, to support your dreams, and to cherish every moment we share together. You are my present, my future, and my forever.

    Thank you for being you, for loving me, and for making my life complete. I love you more than words can express.

    Forever yours,
    With all my love ❤️
  `

  if (showLetter) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #fef7ff 0%, #fdf2f8 50%, #fce7f3 100%)'
      }}>
        <Navbar />
        <div style={{ paddingTop: '80px' }}>
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            padding: '40px',
            backgroundColor: 'white',
            borderRadius: '20px',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
            marginTop: '40px',
            marginBottom: '40px'
          }}>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              textAlign: 'center',
              marginBottom: '30px',
              background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              💌 My Love Letter to You 💌
            </h1>
            <div style={{
              fontSize: '18px',
              lineHeight: '1.8',
              color: '#374151',
              whiteSpace: 'pre-line',
              textAlign: 'center'
            }}>
              {loveLetter}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef7ff 0%, #fdf2f8 50%, #fce7f3 100%)'
    }}>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '40px',
          backgroundColor: 'white',
          borderRadius: '20px',
          boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
          marginTop: '40px',
          marginBottom: '40px'
        }}>
          <h1 style={{
            fontSize: '32px',
            fontWeight: 'bold',
            textAlign: 'center',
            marginBottom: '20px',
            background: 'linear-gradient(135deg, #ec4899 0%, #f472b6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            💕 Love Quiz 💕
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#6b7280',
            marginBottom: '30px'
          }}>
            Answer correctly to unlock my love letter! Question {currentQuestion + 1} of {questions.length}
          </p>

          <div style={{
            marginBottom: '30px'
          }}>
            <h2 style={{
              fontSize: '24px',
              fontWeight: '600',
              color: '#374151',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              {questions[currentQuestion].question}
            </h2>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px'
            }}>
              {questions[currentQuestion].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(option)}
                  style={{
                    padding: '16px 20px',
                    borderRadius: '12px',
                    border: selectedAnswer === option ? '2px solid #ec4899' : '2px solid #e5e7eb',
                    backgroundColor: selectedAnswer === option ? '#fdf2f8' : 'white',
                    cursor: 'pointer',
                    fontSize: '16px',
                    fontWeight: '500',
                    color: selectedAnswer === option ? '#ec4899' : '#374151',
                    transition: 'all 0.3s ease',
                    textAlign: 'left'
                  }}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            style={{
              width: '100%',
              padding: '16px',
              borderRadius: '12px',
              border: 'none',
              backgroundColor: selectedAnswer ? '#ec4899' : '#d1d5db',
              color: 'white',
              fontSize: '18px',
              fontWeight: '600',
              cursor: selectedAnswer ? 'pointer' : 'not-allowed',
              transition: 'all 0.3s ease'
            }}
          >
            {currentQuestion < questions.length - 1 ? 'Next Question' : 'Show My Love Letter'}
          </button>
        </div>
      </div>
    </div>
  )
}
