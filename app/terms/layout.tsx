import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service | RoastMe Chat',
  description: 'Terms of Service for RoastMe - Read our terms and conditions.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
