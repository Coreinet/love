'use client'

import { useState } from 'react'
import Navbar from '@/components/Navbar'

export default function GalleryPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // Your actual photos
  const photos = [
    {
      id: 1,
      src: '/photos/1.jpg',
      alt: 'Our first photo together',
      title: 'First Memories',
      description: 'The beginning of our beautiful journey'
    },
    {
      id: 2,
      src: '/photos/2.jpg',
      alt: 'Sweet moments',
      title: 'Sweet Moments',
      description: 'Every moment with you is precious'
    },
    {
      id: 3,
      src: '/photos/3.jpg',
      alt: 'Long distance love',
      title: 'Distance Makes Love Stronger',
      description: 'Our love transcends any distance'
    },
    {
      id: 4,
      src: '/photos/4.jpg',
      alt: 'Future dreams',
      title: 'Our Dreams',
      description: 'Building our future together'
    },
    {
      id: 5,
      src: '/photos/5.jpg',
      alt: 'Love and laughter',
      title: 'Love & Laughter',
      description: 'Your smile brightens my world'
    },
    {
      id: 6,
      src: '/photos/66.jpg',
      alt: 'Forever together',
      title: 'Forever Yours',
      description: 'You are my everything'
    },
    {
      id: 7,
      src: '/photos/7.jpg',
      alt: 'Beautiful memories',
      title: 'Beautiful Memories',
      description: 'Every day with you is a blessing'
    },
    {
      id: 8,
      src: '/photos/8.jpg',
      alt: 'Our love story',
      title: 'Our Love Story',
      description: 'Writing our own fairy tale'
    }
  ]

  const handleImageClick = (image: string) => {
    setSelectedImage(image)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #fef7ff 0%, #fdf2f8 50%, #fce7f3 100%)'
    }}>
      <Navbar />
      
      {/* Modal for enlarged image */}
      {selectedImage && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }} onClick={closeModal}>
          <div style={{
            maxWidth: '60%',
            maxHeight: '70%',
            position: 'relative'
          }}>
            <img
              src={selectedImage}
              alt="Enlarged photo"
              style={{
                width: '100%',
                height: 'auto',
                borderRadius: '12px'
              }}
            />
            <button
              onClick={closeModal}
              style={{
                position: 'absolute',
                top: '-40px',
                right: '0',
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '24px',
                cursor: 'pointer',
                padding: '8px'
              }}
            >
              ✕
            </button>
          </div>
        </div>
      )}

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
            📸 Our Photo Gallery 📸
          </h1>
          <p style={{
            textAlign: 'center',
            fontSize: '18px',
            color: '#6b7280',
            marginBottom: '40px'
          }}>
            Every photo tells a story of our love journey
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '20px',
            marginTop: '40px'
          }}>
            {photos.map((photo) => (
              <div
                key={photo.id}
                style={{
                  backgroundColor: 'white',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                }}
                onClick={() => handleImageClick(photo.src)}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '150px',
                  backgroundColor: '#f3f4f6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden'
                }}>
                  <img
                    src={photo.src}
                    alt={photo.alt}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                    onError={(e) => {
                      // Fallback for placeholder images
                      e.currentTarget.style.display = 'none'
                      e.currentTarget.parentElement!.innerHTML = `
                        <div style="
                          width: 100%;
                          height: 100%;
                          display: flex;
                          align-items: center;
                          justify-content: center;
                          background: linear-gradient(135deg, #fce7f3 0%, #fdf2f8 100%);
                          color: #ec4899;
                          font-size: 48px;
                        ">
                          📸
                        </div>
                      `
                    }}
                  />
                </div>
                <div style={{
                  padding: '15px'
                }}>
                  <h3 style={{
                    fontSize: '18px',
                    fontWeight: '600',
                    color: '#374151',
                    marginBottom: '6px'
                  }}>
                    {photo.title}
                  </h3>
                  <p style={{
                    fontSize: '13px',
                    color: '#6b7280',
                    lineHeight: '1.4'
                  }}>
                    {photo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            textAlign: 'center',
            marginTop: '40px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <p style={{
              fontSize: '16px',
              color: '#6b7280',
              marginBottom: '16px'
            }}>
              💕 Click on any photo to view it larger 💕
            </p>
            <p style={{
              fontSize: '14px',
              color: '#9ca3af'
            }}>
              Add your own photos by replacing the placeholder URLs with your actual photo links
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 