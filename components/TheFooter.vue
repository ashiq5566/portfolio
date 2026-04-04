<template>
  <footer class="border-t border-white/10 py-12 px-6 mt-24">
    <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
      <div>
        <p class="font-display font-bold text-lg">
          <span class="text-accent">M</span>AK<span class="text-white/20">.</span>
        </p>
        <p class="font-mono text-xs text-white/30 mt-1">Mohammed Ashiq Ali K</p>
      </div>

      <p class="font-mono text-xs text-white/30 text-center">
        © {{ new Date().getFullYear() }} · Built with
        <span class="text-accent">Nuxt.js</span> & <span class="text-accent">Vue.js</span>
      </p>

      <div class="flex items-center gap-4">
        <a
          href="https://www.linkedin.com/in/ashiqali-k"
          target="_blank"
          rel="noopener"
          class="text-white/40 hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
        <a
          href="mailto:ashiq5566.k@gmail.com"
          class="text-white/40 hover:text-accent transition-colors"
          aria-label="Email"
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </a>
      </div>
    </div>
  </footer>
</template>
