<script lang="ts">
  import { purrifyLinks } from '$lib/utils/purrify';

  const catBenefits = [
    { title: 'Respiratory Health', description: 'No silica dust means cleaner air for cats to breathe. Essential for cats with asthma or allergies.', icon: '🫁' },
    { title: 'Paw Safety', description: 'Natural materials are gentler on paws. No chemical burns or irritation from clumping agents.', icon: '🐾' },
    { title: 'Safe if Ingested', description: 'Cats groom constantly. Natural litters are safe if accidentally swallowed during grooming.', icon: '😺' },
    { title: 'No Chemical Exposure', description: 'Free from artificial fragrances, dyes, and additives that can cause sensitivities.', icon: '✅' },
  ];

  const humanBenefits = [
    { title: 'Better Air Quality', description: 'Less dust means cleaner air in your home. Important for people with allergies or asthma.', icon: '🌬️' },
    { title: 'No Harsh Chemicals', description: 'No synthetic fragrances or chemicals off-gassing into your living space.', icon: '🚫' },
    { title: 'Lighter to Carry', description: 'Most natural litters weigh 50-70% less than clay. Easier on your back!', icon: '💪' },
    { title: 'Pleasant Scents', description: 'Natural wood and plant scents vs artificial perfumes that can be overwhelming.', icon: '🌿' },
  ];

  const envBenefits = [
    { title: 'Biodegradable', description: 'Breaks down naturally in weeks to months, not centuries like clay.', icon: '♻️' },
    { title: 'Renewable Resources', description: 'Made from plants that regrow, not strip-mined clay.', icon: '🌱' },
    { title: 'Lower Carbon Footprint', description: 'Less energy to produce and transport due to lighter weight.', icon: '🌍' },
    { title: 'Sustainable Farming', description: 'Many brands use agricultural byproducts that would otherwise be waste.', icon: '🌾' },
  ];
</script>

<svelte:head>
  <title>Health Benefits of Natural Cat Litter | For Cats, Humans & Planet</title>
  <meta name="description" content="Discover health benefits of natural cat litter for your cat, your family, and the environment. Learn why switching matters." />
  <link rel="canonical" href="https://thenaturalcatlitter.com/benefits" />
</svelte:head>

<section class="bg-gradient-to-br from-forest-50 to-sand-50 py-16 md:py-24">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h1 class="text-4xl md:text-5xl font-display font-bold text-forest-900 mb-6">Health Benefits of Natural Litter</h1>
    <p class="text-xl text-earth-700">Better for your cat. Better for you. Better for the planet.</p>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="section-heading text-center mb-4">Benefits for Your Cat</h2>
    <p class="text-center text-earth-600 mb-12 max-w-2xl mx-auto">Your cat spends significant time in and around the litter box. Natural litter makes that safer.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each catBenefits as benefit}
        <div class="card-natural text-center">
          <span class="text-4xl block mb-3">{benefit.icon}</span>
          <h3 class="font-semibold text-lg text-forest-900 mb-2">{benefit.title}</h3>
          <p class="text-earth-700 text-sm">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 bg-sand-50">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="section-heading text-center mb-4">Benefits for You</h2>
    <p class="text-center text-earth-600 mb-12 max-w-2xl mx-auto">You handle litter daily. Natural options make that experience better.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each humanBenefits as benefit}
        <div class="card text-center">
          <span class="text-4xl block mb-3">{benefit.icon}</span>
          <h3 class="font-semibold text-lg text-forest-900 mb-2">{benefit.title}</h3>
          <p class="text-earth-700 text-sm">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 bg-white">
  <div class="max-w-6xl mx-auto px-4">
    <h2 class="section-heading text-center mb-4">Benefits for the Planet</h2>
    <p class="text-center text-earth-600 mb-12 max-w-2xl mx-auto">Every bag of natural litter is a vote for a more sustainable future.</p>
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each envBenefits as benefit}
        <div class="card-natural text-center">
          <span class="text-4xl block mb-3">{benefit.icon}</span>
          <h3 class="font-semibold text-lg text-forest-900 mb-2">{benefit.title}</h3>
          <p class="text-earth-700 text-sm">{benefit.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<section class="py-16 bg-forest-800 text-white">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="text-3xl font-display font-bold mb-4 text-white">Maximize the Benefits</h2>
    <p class="text-lg text-forest-100 mb-8">Purrify activated carbon enhances any natural litter with chemical-free odor control.</p>
    <a href={purrifyLinks.products('benefits')} target="_blank" rel="noopener noreferrer" class="inline-block px-8 py-4 bg-white text-forest-700 font-semibold rounded-lg hover:bg-sand-100">
      Try Purrify →
    </a>
  </div>
</section>

<section class="py-16 bg-sand-50">
  <div class="max-w-4xl mx-auto px-4 text-center">
    <h2 class="section-heading mb-8">Ready to Switch?</h2>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/guide" class="btn-primary">Buying Guide</a>
      <a href="/types" class="btn-secondary">Compare Litter Types</a>
    </div>
  </div>
</section>
