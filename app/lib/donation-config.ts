// Configuration pour les dons et le support du projet
export const donationConfig = {
  // URL principale de Buy Me a Coffee
  buyMeACoffee: process.env.NEXT_PUBLIC_BMC_URL || 'https://www.buymeacoffee.com/roastme',
  
  // URLs alternatives pour différentes plateformes
  platforms: {
    koFi: process.env.NEXT_PUBLIC_KOFI_URL || 'https://ko-fi.com/roastme',
    paypal: process.env.NEXT_PUBLIC_PAYPAL_URL || 'https://paypal.me/roastme',
  },
  
  // Configuration des montants suggérés
  suggestedAmounts: {
    coffee: 3, // Prix d'un café
    lunch: 10, // Prix d'un déjeuner
    dinner: 25, // Prix d'un dîner
  },
  
  // Messages de gratitude personnalisés par langue
  gratitudeMessages: {
    fr: 'Merci pour votre soutien ! ☕',
    en: 'Thank you for your support! ☕',
    es: '¡Gracias por tu apoyo! ☕',
    de: 'Vielen Dank für deine Unterstützung! ☕',
    it: 'Grazie per il tuo supporto! ☕',
    pt: 'Obrigado pelo seu apoio! ☕',
    nl: 'Bedankt voor je steun! ☕',
    default: 'Thank you for your support! ☕'
  }
}

// Fonction pour obtenir l'URL de donation selon la langue
export function getDonationUrl(languageCode: string = 'en'): string {
  // Si c'est en français, on peut utiliser une plateforme française
  if (languageCode === 'fr') {
    return donationConfig.buyMeACoffee
  }
  
  // Pour les autres langues, utiliser Buy Me a Coffee par défaut
  return donationConfig.buyMeACoffee
}

// Fonction pour obtenir le message de gratitude selon la langue
export function getGratitudeMessage(languageCode: string = 'en'): string {
  return donationConfig.gratitudeMessages[languageCode as keyof typeof donationConfig.gratitudeMessages] || 
         donationConfig.gratitudeMessages.default
}
