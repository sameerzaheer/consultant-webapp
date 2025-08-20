interface StructuredDataProps {
  type: 'person' | 'organization' | 'service';
  data: any;
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let jsonLd = {};

  switch (type) {
    case 'person':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Person',
        name: 'Sameer Zaheer',
        jobTitle: 'Strategic Consultant',
        description: 'Strategic consultant with 15+ years of experience in business transformation, operations management, and digital transformation.',
        url: 'https://automatethis.ca',
        email: 'sameer@automatethis.ca',
        telephone: '+1-905-7829601',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Toronto',
          addressRegion: 'ON',
          addressCountry: 'CA'
        },
        sameAs: [
          'https://www.linkedin.com/in/sameerzaheer/'
        ],
        knowsAbout: [
          'Strategic Consulting',
          'Operations Management',
          'Digital Transformation',
          'Project Management',
          'Change Management',
          'Business Process Optimization'
        ]
      };
      break;
    
    case 'organization':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ProfessionalService',
        name: 'Sameer Zaheer Consulting',
        description: 'Strategic consulting services for business transformation and growth.',
        url: 'https://automatethis.ca',
        telephone: '+1-905-7829601',
        email: 'sameer@automatethis.ca',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Toronto',
          addressRegion: 'ON',
          addressCountry: 'CA'
        },
        founder: {
          '@type': 'Person',
          name: 'Sameer Zaheer'
        },
        serviceType: [
          'Strategic Consulting',
          'Operations Management',
          'Digital Transformation',
          'Project Management',
          'Organizational Development',
          'Performance Improvement'
        ]
      };
      break;
    
    case 'service':
      jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: data.name,
        description: data.description,
        provider: {
          '@type': 'Person',
          name: 'Sameer Zaheer'
        },
        serviceType: data.serviceType,
        areaServed: 'Worldwide'
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
