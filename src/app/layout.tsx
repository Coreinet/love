import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '💖 Happy Anniversary My Love 💖',
  description: 'A special place for our love letters, memories and hearts - Happy Anniversary!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  )
};