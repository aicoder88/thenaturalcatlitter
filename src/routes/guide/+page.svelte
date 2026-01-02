<script lang="ts">
  import { purrifyLinks } from '$lib/utils/purrify';

  const considerations = [
    { title: 'Clumping vs Non-Clumping', description: 'Clumping makes scooping easier but costs more. Non-clumping requires full litter changes but is gentler.' },
    { title: 'Odor Control Needs', description: 'Multi-cat homes need stronger odor control. Consider walnut, wood, or adding Purrify activated carbon.' },
    { title: "Your Cat's Preferences", description: 'Some cats prefer fine textures (corn/wheat), others like pellets (wood). Watch their behavior.' },
    { title: 'Dust Sensitivity', description: 'If you or your cat have respiratory issues, choose paper or low-dust options.' },
    { title: 'Environmental Priority', description: 'All natural litters are better than clay, but grass and recycled paper have the smallest footprint.' },
    { title: 'Budget', description: 'Natural litters cost more upfront but often last longer. Start with trial sizes to find the right fit.' },
  ];

  const tips = [
    { title: 'Start Gradually', description: 'Mix 25% new litter with 75% old. Increase new litter by 25% weekly until fully transitioned.' },
    { title: 'Keep the Same Box', description: "Don't change the litter box during transition. One change at a time." },
    { title: 'Maintain Depth', description: 'Keep 2-3 inches of litter. Cats like to dig and bury.' },
    { title: 'Watch for Signs', description: "If your cat avoids the box, slow down the transition. Some cats need more time." },
    { title: 'Clean Regularly', description: 'Scoop daily and do full changes as recommended by the litter brand.' },
  ];
</script>

<svelte:head>
  <title>Natural Cat Litter Buying Guide | How to Choose</title>
  <meta name="description" content="Complete guide to choosing the best natural cat litter. Learn what to consider, how to transition your cat, and tips for success." />
  <link rel="canonical" href="https://thenaturalcatlitter.com/guide" />
  <meta property="og:title" content="Natural Cat Litter Buying Guide | How to Choose" />
  <meta property="og:description" content="Complete guide to choosing the best natural cat litter. Learn what to consider and how to transition your cat." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://thenaturalcatlitter.com/guide" />
  <meta property="og:image" content="https://thenaturalcatlitter.com/og-guide.svg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image" content="https://thenaturalcatlitter.com/og-guide.svg" />
</svelte:head>

<section class="bg-gradient-to-br from-forest-50 to-sand-50 py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-display font-bold text-forest-900 mb-6">Natural Litter Buying Guide</h1>
    <p class="text-xl text-earth-700">Everything you need to choose and transition to the perfect natural litter.</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="section-heading text-center mb-12">What to Consider</h2>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each considerations as item}
        <div class="card">
          <h3 class="font-semibold text-lg text-forest-900 mb-2">{item.title}</h3>
          <p class="text-earth-700 text-sm">{item.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 bg-sand-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="section-heading text-center mb-4">Quick Recommendation</h2>
    <p class="text-center text-earth-600 mb-12 max-w-2xl mx-auto">Based on common needs, here are our top picks:</p>
    <div class="grid md:grid-cols-3 gap-6">
      <div class="card-natural text-center">
        <span class="text-4xl block mb-3">🌾</span>
        <h3 class="font-semibold text-lg text-forest-900">Best Overall</h3>
        <p class="text-forest-700 font-medium">Corn or Wheat Litter</p>
        <p class="text-sm text-earth-600 mt-2">Great clumping, low dust, familiar texture</p>
      </div>
      <div class="card-natural text-center">
        <span class="text-4xl block mb-3">🥥</span>
        <h3 class="font-semibold text-lg text-forest-900">Best Odor Control</h3>
        <p class="text-forest-700 font-medium">Walnut Shell Litter</p>
        <p class="text-sm text-earth-600 mt-2">Superior absorption, great for multi-cat homes</p>
      </div>
      <div class="card-natural text-center">
        <span class="text-4xl block mb-3">📄</span>
        <h3 class="font-semibold text-lg text-forest-900">Best for Sensitive Cats</h3>
        <p class="text-forest-700 font-medium">Paper Litter</p>
        <p class="text-sm text-earth-600 mt-2">Ultra-soft, dust-free, gentle on paws</p>
      </div>
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-4xl mx-auto px-4">
    <h2 class="section-heading text-center mb-12">How to Transition Your Cat</h2>
    <div class="space-y-6">
      {#each tips as tip, i}
        <div class="flex gap-4 items-start">
          <div class="w-10 h-10 bg-forest-100 rounded-full flex items-center justify-center font-bold text-forest-700 shrink-0">
            {i + 1}
          </div>
          <div>
            <h3 class="font-semibold text-lg text-forest-900">{tip.title}</h3>
            <p class="text-earth-700">{tip.description}</p>
          </div>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 bg-forest-800 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-display font-bold mb-4 text-white">Pro Tip: Add Purrify</h2>
    <p class="text-lg text-forest-100 mb-8">Sprinkle Purrify activated carbon on any natural litter to boost odor control by up to 3x.</p>
    <a href={purrifyLinks.products('guide')} class="inline-block px-8 py-4 bg-white text-forest-700 font-semibold rounded-lg hover:bg-sand-100">
      Shop Purrify →
    </a>
  </div>
</section>

<section class="py-16 bg-sand-50">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="section-heading mb-8">Explore Further</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/types" class="btn-primary">Compare Litter Types</a>
      <a href="/benefits" class="btn-secondary">Health Benefits</a>
    </div>
  </div>
</section>
