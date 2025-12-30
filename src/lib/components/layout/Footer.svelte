<script lang="ts">
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    learn: [
      { href: '/why-natural', label: 'Why Go Natural?' },
      { href: '/types', label: 'Types of Natural Litter' },
      { href: '/guide', label: 'Complete Buying Guide' },
      { href: '/benefits', label: 'Health Benefits' },
    ],
    purrify: [
      { href: 'https://purrify.ca/products?utm_source=thenaturalcatlitter&utm_medium=footer', label: 'Shop Purrify', external: true },
      { href: 'https://purrify.ca/learn/how-it-works?utm_source=thenaturalcatlitter&utm_medium=footer', label: 'How It Works', external: true },
      { href: 'https://purrify.ca/learn/science?utm_source=thenaturalcatlitter&utm_medium=footer', label: 'The Science', external: true },
      { href: 'https://purrify.ca/learn/safety?utm_source=thenaturalcatlitter&utm_medium=footer', label: 'Safety Info', external: true },
    ],
    resources: [
      { href: 'https://purrify.ca/learn/cat-litter-guide?utm_source=thenaturalcatlitter&utm_medium=footer', label: 'Cat Litter Guide', external: true },
      { href: 'https://purrify.ca/learn/faq?utm_source=thenaturalcatlitter&utm_medium=footer', label: 'FAQ', external: true },
      { href: 'https://purrify.ca/contact?utm_source=thenaturalcatlitter&utm_medium=footer', label: 'Contact Us', external: true },
    ],
  };
</script>

<footer class="bg-forest-900 text-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <!-- Brand -->
      <div class="lg:col-span-1">
        <a href="/" class="flex items-center gap-2 mb-4">
          <svg class="w-8 h-8 text-forest-400" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
          </svg>
          <span class="font-display font-bold text-lg">
            The Natural<span class="text-earth-400">CatLitter</span>
          </span>
        </a>
        <p class="text-sand-300 text-sm leading-relaxed">
          Your guide to chemical-free, natural cat litter options. Because your cat deserves the best nature has to offer.
        </p>
      </div>

      <!-- Learn -->
      <div>
        <h3 class="font-display font-semibold text-lg mb-4 text-sand-100">Learn</h3>
        <ul class="space-y-2">
          {#each footerLinks.learn as link}
            <li>
              <a href={link.href} class="text-sand-300 hover:text-white text-sm transition-colors">
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Purrify -->
      <div>
        <h3 class="font-display font-semibold text-lg mb-4 text-sand-100">Purrify</h3>
        <ul class="space-y-2">
          {#each footerLinks.purrify as link}
            <li>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                class="text-sand-300 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                {#if link.external}
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h3 class="font-display font-semibold text-lg mb-4 text-sand-100">Resources</h3>
        <ul class="space-y-2">
          {#each footerLinks.resources as link}
            <li>
              <a
                href={link.href}
                target={link.external ? '_blank' : undefined}
                rel={link.external ? 'noopener noreferrer' : undefined}
                class="text-sand-300 hover:text-white text-sm transition-colors inline-flex items-center gap-1"
              >
                {link.label}
                {#if link.external}
                  <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                {/if}
              </a>
            </li>
          {/each}
        </ul>
      </div>
    </div>

    <!-- Bottom Bar -->
    <div class="mt-12 pt-8 border-t border-forest-800">
      <div class="flex flex-col md:flex-row justify-between items-center gap-4">
        <p class="text-sand-400 text-sm">
          &copy; {currentYear} TheNaturalCatLitter.com. All rights reserved.
        </p>
        <p class="text-sand-400 text-sm">
          Proudly supporting <a href="https://purrify.ca?utm_source=thenaturalcatlitter&utm_medium=footer-credit" target="_blank" rel="noopener noreferrer" class="text-forest-400 hover:text-forest-300">Purrify</a> - Natural Odor Control
        </p>
      </div>
    </div>
  </div>
</footer>
