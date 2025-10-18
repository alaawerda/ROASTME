import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | RoastMe Chat',
  description: 'Privacy policy for RoastMe - Learn how we protect your data.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
