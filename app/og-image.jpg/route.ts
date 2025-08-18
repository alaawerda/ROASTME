import { NextRequest } from 'next/server'
import { ImageResponse } from 'next/og'
import React from 'react'

export const runtime = 'edge'

export async function GET(_req: NextRequest) {
  const title = 'RoastMe Chat'
  const subtitle = "L'IA qui te roaste (si t'oses)"

  const badge = (text: string, bg: string) =>
    React.createElement(
      'span',
      {
        style: {
          background: bg,
          color: '#fff',
          padding: '10px 16px',
          borderRadius: 8,
          fontSize: 28,
          fontWeight: 700,
        },
      },
      text
    )

  const element = React.createElement(
    'div',
    {
      style: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg,#0f0f14,#1b1b22)',
        color: 'white',
        padding: '60px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        position: 'relative',
      },
    },
    [
      React.createElement(
        'div',
        {
          key: 'title',
          style: {
            fontSize: 80,
            fontWeight: 800,
            lineHeight: 1.1,
            textAlign: 'center',
            letterSpacing: '-0.02em',
          },
        },
        title
      ),
      React.createElement(
        'div',
        {
          key: 'subtitle',
          style: {
            marginTop: 24,
            fontSize: 36,
            opacity: 0.9,
            textAlign: 'center',
          },
        },
        subtitle
      ),
      React.createElement(
        'div',
        {
          key: 'badges',
          style: {
            marginTop: 40,
            display: 'flex',
            gap: 16,
          },
        },
        [badge('🔥 Roast AI', '#ef4444'), badge('Multilingue', '#3b82f6')]
      ),
      React.createElement(
        'div',
        {
          key: 'domain',
          style: { position: 'absolute', bottom: 40, fontSize: 28, opacity: 0.8 },
        },
        'roastme.chat'
      ),
    ]
  )

  return new ImageResponse(element, {
    width: 1200,
    height: 630,
  })
}
