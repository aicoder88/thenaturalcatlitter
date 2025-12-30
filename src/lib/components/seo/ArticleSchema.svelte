<script lang="ts">
  interface Props {
    title: string;
    description: string;
    url: string;
    datePublished?: string;
    dateModified?: string;
    image?: string;
  }

  let {
    title,
    description,
    url,
    datePublished = '2024-01-15',
    dateModified = new Date().toISOString().split('T')[0],
    image = 'https://thenaturalcatlitter.com/og-image.jpg',
  }: Props = $props();

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    url,
    datePublished,
    dateModified,
    image,
    author: {
      '@type': 'Organization',
      name: 'The Natural Cat Litter',
      url: 'https://thenaturalcatlitter.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'The Natural Cat Litter',
      url: 'https://thenaturalcatlitter.com',
    },
  };
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
