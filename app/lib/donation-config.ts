// Configuration pour les dons et le support du projet
export const donationConfig = {
  // Configuration des métadonnées de donateur pour chaque langue
  metadata: {
    fr: {
      title: 'Soutenir le Chat Roast IA - Faites un Don pour l\'Humour ! 💝',
      description: 'Soutenez le développement du Chat Roast IA gratuit ! Votre don nous aide à maintenir l\'intelligence artificielle la plus cinglante et hilarante du web.',
      keywords: 'don chat roast ia, soutenir roast ia, donation humour, soutien intelligence artificielle, chat roast gratuit, don développement ia',
      language: 'fr',
      locale: 'fr_FR',
      currency: 'EUR',
      amount: '5'
    },
    en: {
      title: 'Support AI Roast Chat - Make a Donation for Humor! 💝',
      description: 'Support the development of free AI Roast Chat! Your donation helps us maintain the most cutting and hilarious artificial intelligence on the web.',
      keywords: 'donate ai roast chat, support roast ai, donation humor, support artificial intelligence, free roast chat, donate ai development',
      language: 'en',
      locale: 'en_US',
      currency: 'USD',
      amount: '5'
    },
    es: {
      title: 'Apoyar Chat de Roast IA - ¡Haz una Donación para el Humor! 💝',
      description: '¡Apoya el desarrollo del Chat de Roast IA gratuito! Tu donación nos ayuda a mantener la inteligencia artificial más mordaz e hilarante de la web.',
      keywords: 'donar chat roast ia, apoyar roast ia, donación humor, apoyar inteligencia artificial, chat roast gratis, donar desarrollo ia',
      language: 'es',
      locale: 'es_ES',
      currency: 'EUR',
      amount: '5'
    },
    ar: {
      title: 'دعم دردشة AI روست - تبرع للفكاهة! 💝',
      description: 'ادعم تطوير دردشة AI روست المجانية! تبرعك يساعدنا في الحفاظ على الذكاء الاصطناعي الأكثر حدة وطرافة على الويب.',
      keywords: 'تبرع دردشة روست ai, دعم روست ai, تبرع فكاهة, دعم ذكاء اصطناعي, دردشة روست مجانية, تبرع تطوير ai',
      language: 'ar',
      locale: 'ar_SA',
      currency: 'SAR',
      amount: '20'
    }
  },

  // Configuration des montants de don suggérés
  amounts: {
    fr: [
      { value: 5, label: '5€ - Un café ☕', popular: false },
      { value: 10, label: '10€ - Un déjeuner 🍕', popular: true },
      { value: 20, label: '20€ - Un dîner 🍽️', popular: false },
      { value: 50, label: '50€ - Un grand merci ! 🙏', popular: false }
    ],
    en: [
      { value: 5, label: '$5 - A coffee ☕', popular: false },
      { value: 10, label: '$10 - A lunch 🍕', popular: true },
      { value: 20, label: '$20 - A dinner 🍽️', popular: false },
      { value: 50, label: '$50 - A big thank you! 🙏', popular: false }
    ],
    es: [
      { value: 5, label: '5€ - Un café ☕', popular: false },
      { value: 10, label: '10€ - Un almuerzo 🍕', popular: true },
      { value: 20, label: '20€ - Una cena 🍽️', popular: false },
      { value: 50, label: '50€ - ¡Un gran gracias! 🙏', popular: false }
    ],
    ar: [
      { value: 20, label: '20 ريال - قهوة ☕', popular: false },
      { value: 50, label: '50 ريال - غداء 🍕', popular: true },
      { value: 100, label: '100 ريال - عشاء 🍽️', popular: false },
      { value: 200, label: '200 ريال - شكر كبير! 🙏', popular: false }
    ]
  },

  // Configuration des messages de remerciement
  thankYouMessages: {
    fr: {
      title: 'Merci pour votre soutien ! 🙏',
      message: 'Votre don nous aide à maintenir le Chat Roast IA gratuit et à l\'améliorer continuellement. Vous êtes maintenant un membre VIP de notre communauté d\'humour !',
      subtitle: 'Que la force du roast soit avec vous ! 🔥'
    },
    en: {
      title: 'Thank you for your support! 🙏',
      message: 'Your donation helps us maintain free AI Roast Chat and continuously improve it. You are now a VIP member of our humor community!',
      subtitle: 'May the force of roast be with you! 🔥'
    },
    es: {
      title: '¡Gracias por tu apoyo! 🙏',
      message: 'Tu donación nos ayuda a mantener el Chat de Roast IA gratuito y mejorarlo continuamente. ¡Ahora eres un miembro VIP de nuestra comunidad de humor!',
      subtitle: '¡Que la fuerza del roast esté contigo! 🔥'
    },
    ar: {
      title: 'شكراً لدعمك! 🙏',
      message: 'تبرعك يساعدنا في الحفاظ على دردشة AI روست المجانية وتحسينها باستمرار. أنت الآن عضو VIP في مجتمعنا الفكاهي!',
      subtitle: 'لتكن قوة الروست معك! 🔥'
    }
  },

  // Configuration des avantages VIP
  vipBenefits: {
    fr: [
      'Accès prioritaire aux nouvelles fonctionnalités',
      'Roasts personnalisés plus créatifs',
      'Support client prioritaire',
      'Badge VIP sur votre profil',
      'Accès exclusif aux événements spéciaux'
    ],
    en: [
      'Priority access to new features',
      'More creative personalized roasts',
      'Priority customer support',
      'VIP badge on your profile',
      'Exclusive access to special events'
    ],
    es: [
      'Acceso prioritario a nuevas funciones',
      'Roasts personalizados más creativos',
      'Soporte al cliente prioritario',
      'Insignia VIP en tu perfil',
      'Acceso exclusivo a eventos especiales'
    ],
    ar: [
      'وصول أولوية للميزات الجديدة',
      'روست مخصص أكثر إبداعاً',
      'دعم العملاء ذو الأولوية',
      'شارة VIP على ملفك الشخصي',
      'وصول حصري للأحداث الخاصة'
    ]
  },

  // Configuration des méthodes de paiement
  paymentMethods: {
    fr: {
      title: 'Méthodes de Paiement Sécurisées',
      methods: [
        { name: 'Carte Bancaire', icon: '💳', secure: true },
        { name: 'PayPal', icon: '📱', secure: true },
        { name: 'Apple Pay', icon: '🍎', secure: true },
        { name: 'Google Pay', icon: '🤖', secure: true }
      ]
    },
    en: {
      title: 'Secure Payment Methods',
      methods: [
        { name: 'Credit Card', icon: '💳', secure: true },
        { name: 'PayPal', icon: '📱', secure: true },
        { name: 'Apple Pay', icon: '🍎', secure: true },
        { name: 'Google Pay', icon: '🤖', secure: true }
      ]
    },
    es: {
      title: 'Métodos de Pago Seguros',
      methods: [
        { name: 'Tarjeta de Crédito', icon: '💳', secure: true },
        { name: 'PayPal', icon: '📱', secure: true },
        { name: 'Apple Pay', icon: '🍎', secure: true },
        { name: 'Google Pay', icon: '🤖', secure: true }
      ]
    },
    ar: {
      title: 'طرق الدفع الآمنة',
      methods: [
        { name: 'بطاقة ائتمان', icon: '💳', secure: true },
        { name: 'PayPal', icon: '📱', secure: true },
        { name: 'Apple Pay', icon: '🍎', secure: true },
        { name: 'Google Pay', icon: '🤖', secure: true }
      ]
    }
  }
}

// Fonction pour obtenir la configuration d'une langue spécifique
export const getDonationConfig = (language: string) => {
  return donationConfig.metadata[language as keyof typeof donationConfig.metadata] || donationConfig.metadata.fr
}

// Fonction pour obtenir les montants suggérés d'une langue
export const getDonationAmounts = (language: string) => {
  return donationConfig.amounts[language as keyof typeof donationConfig.amounts] || donationConfig.amounts.fr
}

// Fonction pour obtenir le message de remerciement d'une langue
export const getThankYouMessage = (language: string) => {
  return donationConfig.thankYouMessages[language as keyof typeof donationConfig.thankYouMessages] || donationConfig.thankYouMessages.fr
}

// Fonction pour obtenir les avantages VIP d'une langue
export const getVipBenefits = (language: string) => {
  return donationConfig.vipBenefits[language as keyof typeof donationConfig.vipBenefits] || donationConfig.vipBenefits.fr
}

// Fonction pour obtenir les méthodes de paiement d'une langue
export const getPaymentMethods = (language: string) => {
  return donationConfig.paymentMethods[language as keyof typeof donationConfig.paymentMethods] || donationConfig.paymentMethods.fr
}

// Fonction pour obtenir l'URL de don (à implémenter selon votre système de paiement)
export const getDonationUrl = (amount: number, language: string) => {
  // URL temporaire - à remplacer par votre système de paiement réel
  return `https://donate.example.com?amount=${amount}&lang=${language}`
}

// Fonction pour obtenir le message de gratitude (alias de getThankYouMessage)
export const getGratitudeMessage = (language: string) => {
  return getThankYouMessage(language)
}
