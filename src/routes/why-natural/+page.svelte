<script lang="ts">
  import { purrifyLinks } from '$lib/utils/purrify';

  const problems = [
    {
      title: 'Strip Mining Destruction',
      description: 'Clay litter comes from strip mining, which devastates landscapes and destroys wildlife habitats.',
      icon: '⛏️',
    },
    {
      title: 'Silica Dust Hazards',
      description: 'Clay litter produces fine silica dust that both cats and humans breathe in, linked to respiratory issues.',
      icon: '💨',
    },
    {
      title: 'Forever in Landfills',
      description: 'Clay litter never biodegrades. Every bag ever used is still sitting in a landfill somewhere.',
      icon: '🗑️',
    },
    {
      title: 'Chemical Additives',
      description: 'Many clay litters contain synthetic fragrances and clumping agents that can irritate cats.',
      icon: '⚗️',
    },
  ];

  const benefits = [
    { title: 'Renewable Resources', description: 'Made from wood, corn, wheat, grass—all renewable materials.', icon: '🌱' },
    { title: 'Biodegradable', description: 'Natural litters break down completely, returning to the earth.', icon: '♻️' },
    { title: 'Dust-Free Options', description: 'Many natural litters produce significantly less dust than clay.', icon: '🌬️' },
    { title: 'Safer for Cats', description: 'No silica, no synthetic chemicals—safe if ingested during grooming.', icon: '🐱' },
    { title: 'Effective Odor Control', description: 'Natural materials neutralize odors at the source.', icon: '✨' },
    { title: 'Lightweight', description: 'Most natural litters weigh less than clay, easier to handle.', icon: '🪶' },
  ];
</script>

<svelte:head>
  <title>Why Choose Natural Cat Litter? | The Natural Cat Litter</title>
  <meta name="description" content="Learn why natural cat litter is better for your cat, home, and environment. Discover problems with clay litter and benefits of natural alternatives." />
  <link rel="canonical" href="https://thenaturalcatlitter.com/why-natural" />
  <meta property="og:title" content="Why Choose Natural Cat Litter? | The Natural Cat Litter" />
  <meta property="og:description" content="Learn why natural cat litter is better for your cat, home, and environment." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://thenaturalcatlitter.com/why-natural" />
</svelte:head>

<section class="bg-gradient-to-br from-forest-50 to-sand-50 py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-display font-bold text-forest-900 mb-6">Why Choose Natural Cat Litter?</h1>
    <p class="text-xl text-earth-700">Traditional clay litter has been the default for decades, but at what cost? Discover why more cat parents are making the switch.</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="section-heading text-center mb-12">The Problem with Clay Litter</h2>
    <div class="grid md:grid-cols-2 gap-6">
      {#each problems as problem}
        <div class="card border-l-4 border-red-400">
          <div class="flex items-start gap-4">
            <span class="text-3xl">{problem.icon}</span>
            <div>
              <h3 class="font-semibold text-lg text-forest-900 mb-2">{problem.title}</h3>
              <p class="text-earth-700">{problem.description}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 bg-sand-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="section-heading text-center mb-12">The Natural Alternative</h2>
    <div class="grid md:grid-cols-3 gap-6">
      {#each benefits as benefit}
        <div class="card-natural text-center">
          <span class="text-3xl block mb-3">{benefit.icon}</span>
          <h3 class="font-semibold text-lg text-forest-900 mb-2">{benefit.title}</h3>
          <p class="text-earth-700 text-sm">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 bg-forest-800 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-display font-bold mb-4 text-white">Supercharge Your Natural Litter</h2>
    <p class="text-lg text-forest-100 mb-8">Purrify's activated carbon additive boosts odor control without chemicals.</p>
    <a href={purrifyLinks.products('why-natural')} class="inline-block px-8 py-4 bg-white text-forest-700 font-semibold rounded-lg hover:bg-sand-100">
      Try Purrify Today →
    </a>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="section-heading mb-8">Ready to Make the Switch?</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/types" class="btn-primary">Explore Litter Types</a>
      <a href="/guide" class="btn-secondary">Buying Guide</a>
    </div>
  </div>
</section>
