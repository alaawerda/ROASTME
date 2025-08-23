interface StructuredDataProps {
  data: Record<string, any>;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          ...data,
        }),
      }}
    />
  );
}

export function WebsiteSchema() {
  return (
    <StructuredData
      data={{
        '@type': 'WebSite',
        name: 'RoastMe - Chat IA de Roast',
        url: 'https://roastme.chat',
        potentialAction: {
          '@type': 'SearchAction',
          target: 'https://roastme.chat/search?q={search_term_string}',
          'query-input': 'required name=search_term_string',
        },
      }}
    />
  );
}

export function OrganizationSchema() {
  return (
    <StructuredData
      data={{
        '@type': 'Organization',
        name: 'RoastMe',
        url: 'https://roastme.chat',
        logo: 'https://roastme.chat/logo.png',
        sameAs: [
          'https://twitter.com/roastmechat',
          'https://facebook.com/roastmechat',
          'https://instagram.com/roastmechat',
        ],
      }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: Array<{ question: string; answer: string }> }) {
  return (
    <StructuredData
      data={{
        '@type': 'FAQPage',
        mainEntity: faqs.map(({ question, answer }) => ({
          '@type': 'Question',
          name: question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: answer,
          },
        })),
      }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; item: string }> }) {
  return (
    <StructuredData
      data={{
        '@type': 'BreadcrumbList',
        itemListElement: items.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
      }}
    />
  );
}
