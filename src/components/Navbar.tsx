'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      if (typeof window !== 'undefined') {
        setIsMobile(window.innerWidth <= 768)
      }
    }
    
    checkMobile()
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', checkMobile)
      return () => window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const navItems = [
    { name: 'Main', href: '/' },
    { name: 'Letter', href: '/letter' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Hearts', href: '/hearts' }
  ]

  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      backgroundColor: 'white',
      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
      height: isMobile ? '56px' : '64px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: isMobile ? '0 16px' : '0 24px'
    }}>
      {/* Logo/Title */}
      <div style={{
        fontSize: isMobile ? '18px' : '20px',
        fontWeight: 'bold',
        color: '#ec4899'
      }}>
        💕 Love
      </div>

      {/* Desktop Navigation */}
      {!isMobile && (
        <div style={{
          display: 'flex',
          gap: '32px'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              style={{
                padding: '8px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backgroundColor: pathname === item.href ? '#ec4899' : 'transparent',
                color: pathname === item.href ? 'white' : '#6b7280',
                textDecoration: 'none',
                display: 'inline-block'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}

      {/* Mobile Menu Button */}
      {isMobile && (
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            background: 'none',
            border: 'none',
            fontSize: '24px',
            cursor: 'pointer',
            color: '#6b7280',
            padding: '8px'
          }}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>
      )}

      {/* Mobile Menu */}
      {isMobile && isMenuOpen && (
        <div style={{
          position: 'fixed',
          top: '56px',
          left: 0,
          right: 0,
          backgroundColor: 'white',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          padding: '16px',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px'
        }}>
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              style={{
                padding: '12px 16px',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '16px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                backgroundColor: pathname === item.href ? '#ec4899' : 'transparent',
                color: pathname === item.href ? 'white' : '#6b7280',
                textDecoration: 'none',
                display: 'block',
                textAlign: 'left'
              }}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
} 