<template>
  <div>
    <!-- Hero -->
    <section class="relative min-h-screen flex flex-col justify-center px-6 pt-32 pb-20 overflow-hidden">
      <!-- Background grid -->
      <div class="absolute inset-0 opacity-[0.04]" style="background-image: linear-gradient(#c8f04a 1px, transparent 1px), linear-gradient(90deg, #c8f04a 1px, transparent 1px); background-size: 60px 60px;"></div>

      <!-- Glowing orb -->
      <div class="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl" style="background: radial-gradient(circle, #c8f04a, transparent 70%);"></div>

      <div class="max-w-7xl mx-auto w-full relative z-10">
        <!-- Status badge -->
        <div class="inline-flex items-center gap-2 border border-accent/30 rounded-full px-4 py-1.5 mb-10 animate-fade-in">
          <span class="w-1.5 h-1.5 rounded-full bg-accent animate-pulse"></span>
          <span class="font-mono text-xs text-accent/80 tracking-widest">AVAILABLE FOR NEW ROLES</span>
        </div>

        <!-- Headline -->
        <div class="overflow-hidden mb-4">
          <h1 class="font-display text-6xl sm:text-8xl md:text-[10rem] font-bold leading-none tracking-tighter animate-fade-up">
            Mohammed
          </h1>
        </div>
        <div class="overflow-hidden mb-4">
          <h1 class="font-display text-6xl sm:text-8xl md:text-[10rem] font-bold leading-none tracking-tighter animate-fade-up" style="animation-delay: 0.1s; opacity: 0; animation-fill-mode: forwards;">
            <span class="text-accent">Ashiq</span> Ali K
          </h1>
        </div>

        <div class="mt-10 flex flex-col md:flex-row items-start md:items-end justify-between gap-10">
          <div class="animate-fade-up" style="animation-delay: 0.25s; opacity: 0; animation-fill-mode: forwards;">
            <p class="font-mono text-sm text-white/40 mb-2 tracking-widest uppercase">/ Software Engineer</p>
            <p class="text-white/60 max-w-md leading-relaxed">
              3 years building scalable web platforms with Python, Django, Vue.js & Nuxt.js. 
              Currently crafting aviation-grade software at GI Corporation.
            </p>
          </div>

          <div class="flex items-center gap-4 animate-fade-up" style="animation-delay: 0.35s; opacity: 0; animation-fill-mode: forwards;">
            <NuxtLink to="/projects" class="btn-primary">
              View Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </NuxtLink>
            <a href="/Resume_Ashiq.pdf" download class="btn-outline">
              Download CV
            </a>
          </div>
        </div>

        <!-- Stats row -->
        <div class="mt-20 grid grid-cols-3 gap-6 max-w-lg animate-fade-up" style="animation-delay: 0.45s; opacity: 0; animation-fill-mode: forwards;">
          <div v-for="stat in stats" :key="stat.label">
            <p class="font-serif text-4xl font-light text-accent">{{ stat.value }}</p>
            <p class="font-mono text-xs text-white/30 tracking-wider mt-1">{{ stat.label }}</p>
          </div>
        </div>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 animate-bounce">
        <span class="font-mono text-xs tracking-widest">SCROLL</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>

    <!-- Marquee tech strip -->
    <div class="border-y border-white/10 py-4 overflow-hidden bg-white/[0.02]">
      <div class="flex animate-marquee whitespace-nowrap">
        <span v-for="tech in [...techs, ...techs]" :key="Math.random()" class="font-mono text-xs tracking-widest text-white/30 mx-8 uppercase">
          {{ tech }}
        </span>
      </div>
    </div>

    <!-- Featured work teaser -->
    <section class="py-28 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="flex items-end justify-between mb-16">
          <div class="reveal">
            <p class="section-label">Featured Work</p>
            <h2 class="font-display text-5xl md:text-6xl font-bold leading-tight">
              Things I've<br /><span class="text-accent font-serif italic font-light">built</span>
            </h2>
          </div>
          <NuxtLink to="/projects" class="btn-outline hidden md:inline-flex reveal">
            All Projects →
          </NuxtLink>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="(project, i) in featuredProjects"
            :key="project.title"
            class="card-base group cursor-pointer reveal"
            :style="{ transitionDelay: i * 0.1 + 's' }"
          >
            <div class="flex items-start justify-between mb-4">
              <span class="font-mono text-xs text-accent/60 tracking-widest uppercase">{{ project.type }}</span>
              <span class="text-white/20 group-hover:text-accent transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M7 17L17 7M17 7H7M17 7v10" />
                </svg>
              </span>
            </div>
            <h3 class="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">{{ project.title }}</h3>
            <p class="text-white/50 text-sm leading-relaxed mb-6">{{ project.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span v-for="tag in project.tags" :key="tag" class="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-white/40">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Banner -->
    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="reveal border border-accent/20 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden" style="background: radial-gradient(ellipse at center, rgba(200, 240, 74, 0.06) 0%, transparent 70%);">
          <p class="section-label justify-center flex">Let's work together</p>
          <h2 class="font-display text-5xl md:text-7xl font-bold mb-6">
            Got a project <span class="text-accent font-serif italic font-light">in mind?</span>
          </h2>
          <p class="text-white/50 max-w-md mx-auto mb-10 leading-relaxed">
            I'm currently open to full-time roles and freelance opportunities. Let's build something great together.
          </p>
          <a href="mailto:ashiq5566.k@gmail.com" class="btn-primary text-base px-8 py-4">
            Get in Touch
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
useReveal()

useHead({
  title: 'Mohammed Ashiq Ali K — Software Engineer',
})

const stats = [
  { value: '3+', label: 'Years Exp.' },
  { value: '10+', label: 'Projects' },
  { value: '3', label: 'Companies' },
]

const techs = [
  'Python', 'Django', 'Vue.js', 'Nuxt.js', 'REST APIs', 'PostgreSQL',
  'Django Channels', 'Tailwind CSS', 'Microsoft Azure', 'Git', 'JavaScript', 'Machine Learning',
]

const featuredProjects = [
  {
    type: 'E-Commerce Platform',
    title: 'Aircraft Assembly Tools Shop',
    desc: 'Full-stack e-commerce platform for aviation-grade tools, featuring complex product catalogs, multi-carrier shipping integration (DHL/UPS), automated label generation, and real-time shipment tracking.',
    tags: ['Django', 'Vue.js', 'DHL API', 'UPS API', 'PostgreSQL'],
  },
  {
    type: 'SaaS Platform',
    title: 'E-Learning Management System',
    desc: 'Robust API-driven e-learning platform with real-time communication features built with Django Channels and WebSockets, supporting live sessions and instant notifications.',
    tags: ['Django REST', 'Django Channels', 'WebSockets', 'Nuxt.js'],
  },
  {
    type: 'Business Tool',
    title: 'Customer Relationship App',
    desc: 'CRM platform with robust REST APIs, scalable backend architecture, and a responsive Vue.js frontend designed for cross-functional team collaboration.',
    tags: ['Django', 'Vue.js', 'DRF', 'PostgreSQL'],
  },
  {
    type: 'Infrastructure',
    title: 'Scalable REST API Architecture',
    desc: 'Designed and maintained RESTful APIs enabling efficient CRUD operations, custom Django migrations for schema evolution, and backward-compatible deployment processes.',
    tags: ['Django REST Framework', 'Python', 'Azure', 'Git'],
  },
]
</script>
