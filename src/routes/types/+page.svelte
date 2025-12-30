<script lang="ts">
  import { purrifyLinks } from '$lib/utils/purrify';

  const litterTypes = [
    {
      id: 'wood',
      name: 'Wood & Pine',
      icon: '🌲',
      description: 'Made from compressed sawdust or wood pellets, wood litter uses natural enzymes to neutralize ammonia odors.',
      pros: ['Excellent odor control', 'Highly absorbent', 'Pleasant natural scent', 'Biodegradable'],
      cons: ['May not clump as firmly', 'Some cats dislike texture', 'Can track'],
      bestFor: 'Cat owners wanting natural odor control without fragrances',
    },
    {
      id: 'grain',
      name: 'Corn & Wheat',
      icon: '🌾',
      description: 'Grain-based litters offer excellent clumping from natural starches and enzymes that break down odors.',
      pros: ['Tight clumping', 'Flushable (most brands)', 'Low dust', 'Soft texture'],
      cons: ['Can attract bugs if damp', 'Higher cost', 'May mold in humidity'],
      bestFor: 'Cats who prefer a fine, sand-like texture',
    },
    {
      id: 'paper',
      name: 'Paper & Recycled',
      icon: '📄',
      description: 'Made from recycled paper products, this litter is ultra-soft and virtually dust-free.',
      pros: ['99% dust-free', 'Very soft on paws', 'Great for post-surgery', 'Eco-friendly'],
      cons: ['Poor odor control', 'Does not clump', 'Needs frequent changing'],
      bestFor: 'Cats recovering from surgery or with sensitive paws',
    },
    {
      id: 'grass',
      name: 'Grass Seed',
      icon: '🌱',
      description: 'A newer option made from grass seed fibers, offering tight clumping and natural odor control.',
      pros: ['Excellent clumping', 'Very lightweight', 'Low tracking', 'Sustainable'],
      cons: ['Limited availability', 'Higher price', 'May have natural smell'],
      bestFor: 'Eco-conscious owners wanting top performance',
    },
    {
      id: 'shell',
      name: 'Walnut & Coconut',
      icon: '🥥',
      description: 'Made from crushed walnut shells or coconut husks, these litters excel at odor absorption.',
      pros: ['Superior odor control', 'Dark color hides waste', 'Long-lasting', 'Clumping'],
      cons: ['Can stain light surfaces', 'Heavier than other naturals', 'May track'],
      bestFor: 'Multi-cat households needing extra odor control',
    },
    {
      id: 'tofu',
      name: 'Tofu & Soy',
      icon: '🫘',
      description: 'Made from soybean byproducts, tofu litter is edible-safe and offers good clumping.',
      pros: ['Safe if eaten', 'Good clumping', 'Flushable', 'Low dust'],
      cons: ['Can have beany smell', 'May attract pests', 'Moisture sensitive'],
      bestFor: 'Kittens or cats who eat litter',
    },
  ];
</script>

<svelte:head>
  <title>Natural Cat Litter Types Compared | Complete Guide</title>
  <meta name="description" content="Compare wood, corn, wheat, paper, grass, walnut, and tofu cat litters. Find the best natural litter type for your cat's needs." />
  <link rel="canonical" href="https://thenaturalcatlitter.com/types" />
  <meta property="og:title" content="Natural Cat Litter Types Compared | Complete Guide" />
  <meta property="og:description" content="Compare wood, corn, wheat, paper, grass, walnut, and tofu cat litters. Find the best natural litter type." />
  <meta property="og:type" content="article" />
  <meta property="og:url" content="https://thenaturalcatlitter.com/types" />
</svelte:head>

<section class="bg-gradient-to-br from-forest-50 to-sand-50 py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-display font-bold text-forest-900 mb-6">Natural Cat Litter Types</h1>
    <p class="text-xl text-earth-700">From wood pellets to grass seed, discover which natural litter is perfect for your cat.</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4 space-y-12">
    {#each litterTypes as type}
      <div id={type.id} class="card scroll-mt-24">
        <div class="flex items-start gap-4 mb-6">
          <span class="text-5xl">{type.icon}</span>
          <div>
            <h2 class="text-2xl font-display font-bold text-forest-900">{type.name}</h2>
            <p class="text-earth-700 mt-2">{type.description}</p>
          </div>
        </div>
        <div class="grid md:grid-cols-3 gap-6">
          <div class="bg-green-50 rounded-lg p-4">
            <h3 class="font-semibold text-green-800 mb-2">✓ Pros</h3>
            <ul class="space-y-1 text-sm text-green-700">
              {#each type.pros as pro}
                <li>{pro}</li>
              {/each}
            </ul>
          </div>
          <div class="bg-red-50 rounded-lg p-4">
            <h3 class="font-semibold text-red-800 mb-2">✗ Cons</h3>
            <ul class="space-y-1 text-sm text-red-700">
              {#each type.cons as con}
                <li>{con}</li>
              {/each}
            </ul>
          </div>
          <div class="bg-forest-50 rounded-lg p-4">
            <h3 class="font-semibold text-forest-800 mb-2">Best For</h3>
            <p class="text-sm text-forest-700">{type.bestFor}</p>
          </div>
        </div>
      </div>
    {/each}
  </div>
</section>

<section class="py-16 bg-forest-800 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-display font-bold mb-4 text-white">Boost Any Natural Litter</h2>
    <p class="text-lg text-forest-100 mb-8">Add Purrify activated carbon to any natural litter for enhanced 72-hour odor control.</p>
    <a href={purrifyLinks.products('types')} class="inline-block px-8 py-4 bg-white text-forest-700 font-semibold rounded-lg hover:bg-sand-100">
      Shop Purrify →
    </a>
  </div>
</section>

<section class="py-16 bg-sand-50">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="section-heading mb-8">Need Help Choosing?</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/guide" class="btn-primary">Complete Buying Guide</a>
      <a href="/benefits" class="btn-secondary">Health Benefits</a>
    </div>
  </div>
</section>
