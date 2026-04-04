<template>
  <div class="pt-32 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-20">
        <p class="section-label reveal">Portfolio</p>
        <h1 class="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter reveal">
          Selected<br />
          <span class="font-serif italic font-light text-accent">projects</span>
        </h1>
      </div>

      <!-- Filter -->
      <div class="flex flex-wrap gap-3 mb-16 reveal">
        <button
          v-for="f in filters"
          :key="f"
          @click="activeFilter = f"
          class="font-mono text-xs px-4 py-2 rounded-full border transition-all duration-200"
          :class="
            activeFilter === f
              ? 'bg-accent text-ink border-accent'
              : 'border-white/20 text-white/40 hover:border-accent hover:text-accent'
          "
        >
          {{ f }}
        </button>
      </div>

      <!-- Projects grid -->
      <div class="grid md:grid-cols-2 gap-6">
        <div
          v-for="(project, i) in filteredProjects"
          :key="project.title"
          class="card-base group"
          :style="{ transitionDelay: i * 0.08 + 's' }"
        >
          <!-- Top area -->
          <div class="flex items-start justify-between mb-4">
            <span class="font-mono text-xs text-accent/60 tracking-widest uppercase">{{ project.type }}</span>
            <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c8f04a" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </div>
          </div>

          <h3 class="font-display text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
            {{ project.title }}
          </h3>
          <p class="text-white/50 text-sm leading-relaxed mb-6">{{ project.desc }}</p>

          <ul v-if="project.highlights" class="space-y-1.5 mb-6">
            <li
              v-for="h in project.highlights"
              :key="h"
              class="text-xs text-white/40 flex items-start gap-2"
            >
              <span class="text-accent/60 mt-0.5">·</span> {{ h }}
            </li>
          </ul>

          <div class="flex flex-wrap gap-2 mt-auto">
            <span v-for="tag in project.tags" :key="tag" class="font-mono text-xs px-3 py-1 rounded-full bg-white/5 text-white/40">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import computed and ref from Vue
import { computed, ref } from 'vue'

useReveal()
useHead({ title: 'Projects — Mohammed Ashiq Ali K' })

const activeFilter = ref('All')
const filters = ['All', 'E-Commerce', 'SaaS', 'API', 'Real-time']

const projects = [
  {
    type: 'E-Commerce · Aviation',
    title: 'Aircraft Assembly Tools Platform',
    desc: 'End-to-end e-commerce platform designed specifically for aviation-grade tools. Built from scratch covering both frontend and backend workflows.',
    highlights: [
      'Complex product catalogs with multiple part numbers',
      'Multi-carrier logistics (DHL + UPS) with rate calculation',
      'Automated label generation & real-time shipment tracking',
      'Custom product configuration engine',
    ],
    tags: ['Django', 'Vue.js', 'DHL API', 'UPS API', 'PostgreSQL', 'Azure'],
    category: 'E-Commerce',
  },
  {
    type: 'SaaS · E-Learning',
    title: 'Learning Management System',
    desc: 'Full-featured LMS with real-time communication, live sessions, and robust API layer powering an engaging e-learning experience.',
    highlights: [
      'Real-time communication via Django Channels + WebSockets',
      'RESTful API design for course management and progress tracking',
      'Scalable backend architecture for concurrent users',
    ],
    tags: ['Django REST', 'Django Channels', 'WebSockets', 'Nuxt.js', 'PostgreSQL'],
    category: 'SaaS',
  },
  {
    type: 'Business · CRM',
    title: 'Customer Relationship Application',
    desc: 'CRM platform with robust REST API layer, supporting customer pipeline management and cross-functional team collaboration.',
    highlights: [
      'Robust API design enabling efficient CRUD operations',
      'Responsive Vue.js frontend with modular components',
      'Cross-functional team integration workflows',
    ],
    tags: ['Django', 'Vue.js', 'DRF', 'PostgreSQL'],
    category: 'SaaS',
  },
  {
    type: 'API · Backend',
    title: 'Scalable REST API Architecture',
    desc: 'Designed and maintained RESTful APIs with emphasis on scalability, backward compatibility, and smooth database schema evolution.',
    highlights: [
      'Custom Django migrations for schema evolution',
      'Backward-compatible deployment processes',
      'Efficient CRUD architecture patterns',
    ],
    tags: ['Django REST Framework', 'Python', 'PostgreSQL', 'Git'],
    category: 'API',
  },
  {
    type: 'Real-time · Comms',
    title: 'WebSocket Communication System',
    desc: 'Real-time communication infrastructure using Django Channels, enabling instant notifications, live updates, and chat features across web apps.',
    highlights: [
      'Django Channels for async WebSocket handling',
      'Low-latency message delivery',
      'Scalable connection management',
    ],
    tags: ['Django Channels', 'WebSockets', 'Python', 'Redis'],
    category: 'Real-time',
  },
  {
    type: 'Frontend · UI',
    title: 'Frontend Build Optimization',
    desc: 'Performance engineering work across Nuxt.js and Vue.js applications — significantly reducing load times and improving user experience.',
    highlights: [
      'Modern build optimization techniques',
      'Responsive, production-ready UI components',
      'Improved Core Web Vitals metrics',
    ],
    tags: ['Nuxt.js', 'Vue.js', 'Tailwind CSS', 'Vite'],
    category: 'SaaS',
  },
]

const filteredProjects = computed(() => {
  console.log('Filtering projects for category:', activeFilter.value)
  if (activeFilter.value == 'All') return projects
  return projects.filter((p) => p.category == activeFilter.value)
})
</script>

<style scoped>
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: scale(0.95);
}
</style>
