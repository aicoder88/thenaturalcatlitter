<script lang="ts">
  interface Props {
    name?: string;
    url?: string;
    description?: string;
  }

  let {
    name = 'The Natural Cat Litter',
    url = 'https://thenaturalcatlitter.com',
    description = 'Your complete guide to natural, chemical-free cat litter options. Discover plant-based, organic, and eco-friendly litter alternatives for your feline friend.',
  }: Props = $props();

  const schema = $derived({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name,
    url,
    description,
    publisher: {
      '@type': 'Organization',
      name,
      url,
    },
  });
</script>

<svelte:head>
  {@html `<script type="application/ld+json">${JSON.stringify(schema)}</script>`}
</svelte:head>
