<script lang="ts">
  import WebsiteSchema from '$lib/components/seo/WebsiteSchema.svelte';
  import FAQSchema from '$lib/components/seo/FAQSchema.svelte';
  import { purrifyLinks } from '$lib/utils/purrify';

  const features = [
    {
      icon: '🌿',
      title: 'Chemical-Free',
      description: 'No synthetic fragrances, dyes, or harmful additives. Just pure, natural ingredients.',
    },
    {
      icon: '🌍',
      title: 'Eco-Friendly',
      description: 'Biodegradable and sustainable options that are better for the planet.',
    },
    {
      icon: '🐱',
      title: 'Cat-Safe',
      description: 'Gentle on paws and safe if accidentally ingested during grooming.',
    },
    {
      icon: '💨',
      title: 'Natural Odor Control',
      description: 'Plant-based ingredients that neutralize odors without masking them.',
    },
  ];

  const litterTypes = [
    { name: 'Wood & Pine', icon: '🌲', href: '/types#wood' },
    { name: 'Corn & Wheat', icon: '🌾', href: '/types#grain' },
    { name: 'Paper & Grass', icon: '📄', href: '/types#paper' },
    { name: 'Walnut & Coconut', icon: '🥥', href: '/types#shell' },
  ];

  const faqs = [
    {
      question: 'What makes cat litter "natural"?',
      answer: 'Natural cat litter is made from plant-based, biodegradable materials like wood, corn, wheat, paper, or grass. Unlike clay litter, natural options are free from synthetic chemicals, fragrances, and are environmentally sustainable.',
    },
    {
      question: 'Is natural cat litter safe for my cat?',
      answer: 'Yes! Natural cat litters are generally safer than clay alternatives. They\'re free from silica dust and synthetic chemicals that can irritate your cat\'s respiratory system. Most are also safe if accidentally ingested during grooming.',
    },
    {
      question: 'How does natural litter control odor?',
      answer: 'Natural litters use plant-based materials that naturally absorb and neutralize odors. Some use activated carbon (like Purrify additives), enzyme action, or natural absorption properties of materials like wood and corn.',
    },
    {
      question: 'Can I flush natural cat litter?',
      answer: 'Some natural litters are marketed as flushable, but we recommend checking local regulations first. Many municipalities advise against flushing any cat waste due to concerns about Toxoplasma parasites affecting water supplies.',
    },
  ];
</script>

<svelte:head>
  <title>Natural Cat Litter Guide | Chemical-Free, Plant-Based Options</title>
  <meta name="description" content="Discover the best natural cat litter options. Compare wood, corn, wheat, and paper-based litters that are safe for your cat and the environment." />
  <meta property="og:title" content="Natural Cat Litter Guide | Chemical-Free, Plant-Based Options" />
  <meta property="og:description" content="Your complete guide to natural, chemical-free cat litter options for eco-conscious cat parents." />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://thenaturalcatlitter.com" />
  <link rel="canonical" href="https://thenaturalcatlitter.com" />
</svelte:head>

<WebsiteSchema />
<FAQSchema {faqs} />

<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-forest-50 via-sand-50 to-earth-50 py-16 md:py-24 overflow-hidden">
  <div class="absolute inset-0 bg-natural-pattern opacity-50"></div>
  <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="natural-badge mb-4">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
          100% Natural Solutions
        </span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-forest-900 leading-tight mb-6">
          The Best <span class="text-gradient-natural">Natural Cat Litter</span> for Your Feline Friend
        </h1>
        <p class="text-lg md:text-xl text-earth-700 mb-8 leading-relaxed">
          Discover chemical-free, plant-based cat litter options that are better for your cat, your home, and the planet. Make the switch to natural today.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a href="/guide" class="btn-primary">
            Read Our Guide
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <a href="/types" class="btn-outline">
            Explore Litter Types
          </a>
        </div>
      </div>
      <div class="relative">
        <div class="aspect-square rounded-2xl bg-gradient-to-br from-forest-200 to-earth-200 shadow-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=600&h=600&fit=crop"
            alt="Happy cat in natural environment"
            class="w-full h-full object-cover"
            loading="eager"
          />
        </div>
        <div class="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 border border-sand-200">
          <div class="flex items-center gap-3">
            <div class="w-12 h-12 bg-forest-100 rounded-full flex items-center justify-center text-2xl">
              🌱
            </div>
            <div>
              <p class="font-semibold text-forest-900">Eco-Friendly</p>
              <p class="text-sm text-earth-600">Biodegradable options</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- Features Section -->
<section class="py-16 md:py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="section-heading">Why Choose Natural Cat Litter?</h2>
      <p class="section-subheading mx-auto">
        Natural litters offer benefits that go beyond just filling a litter box.
      </p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each features as feature}
        <div class="card-natural text-center hover:shadow-lg transition-shadow">
          <div class="text-4xl mb-4">{feature.icon}</div>
          <h3 class="font-display font-semibold text-lg text-forest-900 mb-2">{feature.title}</h3>
          <p class="text-earth-600 text-sm">{feature.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>

<!-- Litter Types Preview -->
<section class="py-16 md:py-20 bg-sand-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="section-heading">Types of Natural Litter</h2>
      <p class="section-subheading mx-auto">
        From wood pellets to corn-based, find the perfect natural litter for your cat.
      </p>
    </div>
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {#each litterTypes as type}
        <a href={type.href} class="card group hover:shadow-lg hover:border-forest-300 transition-all">
          <div class="text-4xl mb-3">{type.icon}</div>
          <h3 class="font-display font-semibold text-lg text-forest-900 group-hover:text-forest-700">
            {type.name}
          </h3>
          <p class="text-sm text-earth-500 mt-1 flex items-center gap-1">
            Learn more
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </p>
        </a>
      {/each}
    </div>
    <div class="text-center mt-8">
      <a href="/types" class="btn-secondary">
        View All Litter Types
      </a>
    </div>
  </div>
</section>

<!-- Purrify CTA Section -->
<section class="py-16 md:py-20 bg-gradient-to-br from-forest-700 to-forest-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div>
        <span class="inline-flex items-center gap-2 px-3 py-1 bg-forest-600 rounded-full text-sm font-medium mb-4">
          <span class="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
          Featured Solution
        </span>
        <h2 class="text-3xl md:text-4xl font-display font-bold mb-4">
          Boost Any Natural Litter with Purrify
        </h2>
        <p class="text-lg text-forest-100 mb-6 leading-relaxed">
          Purrify uses activated carbon technology to supercharge your natural litter's odor-fighting power. Simply sprinkle it in for up to 72-hour odor control—naturally.
        </p>
        <ul class="space-y-3 mb-8">
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Works with any natural litter type</span>
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>100% natural activated carbon</span>
          </li>
          <li class="flex items-center gap-3">
            <svg class="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            <span>Safe for cats and the environment</span>
          </li>
        </ul>
        <div class="flex flex-col sm:flex-row gap-4">
          <a
            href={purrifyLinks.products('homepage-cta')}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 bg-white text-forest-700 font-semibold rounded-lg hover:bg-sand-100 transition-colors"
          >
            Shop Purrify
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={purrifyLinks.howItWorks('homepage-cta')}
            target="_blank"
            rel="noopener noreferrer"
            class="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
          >
            Learn How It Works
          </a>
        </div>
      </div>
      <div class="relative">
        <div class="aspect-square rounded-2xl bg-forest-600 shadow-xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1495360010541-f48722b34f7d?w=600&h=600&fit=crop"
            alt="Clean litter box with natural litter"
            class="w-full h-full object-cover opacity-80"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ Section -->
<section class="py-16 md:py-20 bg-white">
  <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="section-heading">Frequently Asked Questions</h2>
      <p class="section-subheading mx-auto">
        Common questions about natural cat litter answered.
      </p>
    </div>
    <div class="space-y-4">
      {#each faqs as faq, i}
        <details class="group card hover:shadow-md transition-shadow" open={i === 0}>
          <summary class="flex items-center justify-between cursor-pointer list-none font-display font-semibold text-forest-900">
            {faq.question}
            <svg class="w-5 h-5 text-earth-500 group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </summary>
          <p class="mt-4 text-earth-700 leading-relaxed">
            {faq.answer}
          </p>
        </details>
      {/each}
    </div>
  </div>
</section>

<!-- Final CTA -->
<section class="py-16 md:py-20 bg-sand-100">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="section-heading mb-4">Ready to Go Natural?</h2>
    <p class="section-subheading mx-auto mb-8">
      Explore our comprehensive guides to find the perfect natural litter for your cat.
    </p>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <a href="/guide" class="btn-primary">
        Complete Buying Guide
      </a>
      <a href="/benefits" class="btn-secondary">
        Health Benefits
      </a>
    </div>
  </div>
</section>
