import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alternative ChatGPT Gratuite 🔥 | Chat IA Amusant & Drôle | RoastMe',
  description: '🔥 Meilleure alternative gratuite à ChatGPT pour le fun ! RoastMe est un chat IA amusant qui vous roaste sans pitié. ✅ 100% Gratuit ✅ Comme ChatGPT mais drôle ✅ Chat bot IA humour. Essayez maintenant !',
  keywords: [
    'chatgpt',
    'chatgpt alternative',
    'alternative chatgpt',
    'chatgpt gratuit',
    'chat gpt',
    'chatgpt français',
    'chat ia',
    'chat ia gratuit',
    'chat ia amusant',
    'chat bot gratuit',
    'chatbot gratuit',
    'ia amusante',
    'ia drole',
    'chat bot drole',
    'alternative chatgpt gratuite',
    'chatgpt fun',
    'chatgpt humour',
    'meilleur chatbot',
    'ai chat fun',
    'funny ai chat'
  ],
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://roastme.chat/chatgpt-alternative',
    siteName: 'RoastMe - Alternative ChatGPT Fun',
    title: 'Alternative ChatGPT Gratuite 🔥 | Chat IA Amusant | RoastMe',
    description: 'La meilleure alternative gratuite à ChatGPT pour le fun ! Chat IA amusant qui vous roaste. 100% gratuit, comme ChatGPT mais en plus drôle.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'RoastMe - Alternative ChatGPT Amusante',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alternative ChatGPT Gratuite 🔥 | Chat IA Amusant',
    description: 'Meilleure alternative gratuite à ChatGPT pour le fun ! Chat IA amusant et drôle.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://roastme.chat/chatgpt-alternative',
  },
}

export default function ChatGPTAlternativeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
