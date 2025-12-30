<script lang="ts">
  import { page } from '$app/stores';

  let mobileMenuOpen = false;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/why-natural', label: 'Why Natural?' },
    { href: '/types', label: 'Litter Types' },
    { href: '/guide', label: 'Buying Guide' },
    { href: '/benefits', label: 'Health Benefits' },
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
  }
</script>

<header class="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sand-200 shadow-sm">
  <nav class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <!-- Logo -->
      <a href="/" class="flex items-center gap-2 group" on:click={closeMobileMenu}>
        <svg class="w-8 h-8 text-forest-600 group-hover:text-forest-700 transition-colors" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C21,5 14,5.25 9,6.25C4,7.25 2,11.5 2,13.5C2,15.5 3.75,17.25 3.75,17.25C7,8 17,8 17,8Z"/>
        </svg>
        <span class="font-display font-bold text-xl text-forest-900">
          The Natural<span class="text-earth-600">CatLitter</span>
        </span>
      </a>

      <!-- Desktop Navigation -->
      <div class="hidden md:flex items-center gap-1">
        {#each navLinks as link}
          <a
            href={link.href}
            class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 {$page.url.pathname === link.href
              ? 'bg-forest-100 text-forest-700'
              : 'text-earth-700 hover:bg-sand-100 hover:text-forest-700'}"
          >
            {link.label}
          </a>
        {/each}
      </div>

      <!-- CTA Button -->
      <a
        href="https://purrify.ca/products?utm_source=thenaturalcatlitter&utm_medium=header"
        target="_blank"
        rel="noopener noreferrer"
        class="hidden md:inline-flex btn-primary text-sm"
      >
        Try Purrify
      </a>

      <!-- Mobile Menu Button -->
      <button
        type="button"
        class="md:hidden p-2 rounded-lg text-earth-600 hover:bg-sand-100"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {#if mobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>

    <!-- Mobile Menu -->
    {#if mobileMenuOpen}
      <div class="md:hidden py-4 border-t border-sand-200">
        <div class="flex flex-col gap-2">
          {#each navLinks as link}
            <a
              href={link.href}
              class="px-4 py-2 rounded-lg font-medium transition-colors {$page.url.pathname === link.href
                ? 'bg-forest-100 text-forest-700'
                : 'text-earth-700 hover:bg-sand-100'}"
              on:click={closeMobileMenu}
            >
              {link.label}
            </a>
          {/each}
          <a
            href="https://purrify.ca/products?utm_source=thenaturalcatlitter&utm_medium=header-mobile"
            target="_blank"
            rel="noopener noreferrer"
            class="btn-primary text-center mt-2"
            on:click={closeMobileMenu}
          >
            Try Purrify
          </a>
        </div>
      </div>
    {/if}
  </nav>
</header>
