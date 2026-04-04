<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'py-3 bg-ink/90 backdrop-blur-md border-b border-white/5' : 'py-6'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <NuxtLink to="/" class="font-display font-bold text-lg tracking-tight group">
        <span class="text-accent">M</span>AK
        <span class="text-white/20 group-hover:text-accent transition-colors">.</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-8">
        <li v-for="link in links" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="font-mono text-xs tracking-widest uppercase text-white/50 hover:text-accent transition-colors duration-200"
            :class="{ 'text-accent': $route.path === link.to }"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA -->
      <a href="mailto:ashiq5566.k@gmail.com" class="btn-primary hidden md:inline-flex">
        Hire Me
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <path d="M7 17L17 7M17 7H7M17 7v10" />
        </svg>
      </a>

      <!-- Mobile hamburger -->
      <button @click="mobileOpen = !mobileOpen" class="md:hidden text-paper">
        <svg v-if="!mobileOpen" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M3 12h18M3 6h18M3 18h18" />
        </svg>
        <svg v-else width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 6L6 18M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <Transition name="mobile-menu">
      <div v-if="mobileOpen" class="md:hidden bg-ink/95 backdrop-blur-xl border-t border-white/10 px-6 py-8">
        <ul class="flex flex-col gap-6">
          <li v-for="link in links" :key="link.to">
            <NuxtLink
              :to="link.to"
              class="font-display text-2xl font-bold text-white/70 hover:text-accent transition-colors"
              @click="mobileOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>
        <a href="mailto:ashiq5566.k@gmail.com" class="btn-primary mt-8 w-full justify-center">
          Hire Me
        </a>
      </div>
    </Transition>
  </nav>
</template>

<script setup>
const scrolled = ref(false)
const mobileOpen = ref(false)

const links = [
  { label: 'About', to: '/about' },
  { label: 'Experience', to: '/experience' },
  { label: 'Projects', to: '/projects' },
  { label: 'Skills', to: '/skills' },
  { label: 'Contact', to: '/contact' },
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrolled.value = window.scrollY > 40
  })
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: opacity 0.25s, transform 0.25s;
}
.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
