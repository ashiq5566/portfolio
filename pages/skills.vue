<template>
  <div class="pt-32 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-20">
        <p class="section-label reveal">Tech Stack</p>
        <h1 class="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter reveal">
          Skills &<br />
          <span class="font-serif italic font-light text-accent">expertise</span>
        </h1>
      </div>

      <!-- Main skills layout -->
      <div class="grid md:grid-cols-2 gap-16 mb-24">
        <div
          v-for="(cat, ci) in skillCategories"
          :key="cat.name"
          class="reveal"
          :style="{ transitionDelay: ci * 0.1 + 's' }"
        >
          <!-- Category header -->
          <div class="flex items-center gap-4 mb-8">
            <span class="font-mono text-xs text-accent tracking-widest uppercase">{{ String(ci + 1).padStart(2, '0') }}</span>
            <div class="flex-1 h-px bg-white/10"></div>
            <h2 class="font-display text-lg font-bold tracking-wide">{{ cat.name }}</h2>
          </div>

          <!-- Skills list -->
          <div class="space-y-px">
            <div
              v-for="(skill, si) in cat.skills"
              :key="skill.name"
              class="group flex items-center justify-between py-4 px-4 rounded-xl hover:bg-white/[0.04] transition-all duration-200 border border-transparent hover:border-white/10 cursor-default"
            >
              <div class="flex items-center gap-4">
                <span class="font-mono text-xs text-white/20 group-hover:text-accent transition-colors duration-200">
                  {{ String(si + 1).padStart(2, '0') }}
                </span>
                <span class="font-display font-semibold text-base text-paper/70 group-hover:text-paper transition-colors duration-200">
                  {{ skill.name }}
                </span>
              </div>
              <span class="font-mono text-xs text-white/20 group-hover:text-accent/60 transition-colors duration-200 tracking-widest uppercase">
                {{ skill.tag }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Divider -->
      <div class="h-px bg-white/10 mb-24"></div>

      <!-- Soft skills -->
      <div class="reveal">
        <p class="section-label">Beyond Code</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div
            v-for="(soft, i) in softSkills"
            :key="soft.title"
            class="group relative border border-white/10 rounded-2xl p-8 bg-white/[0.02] hover:border-accent/30 transition-all duration-300 overflow-hidden reveal"
            :style="{ transitionDelay: i * 0.1 + 's' }"
          >
            <div
              class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style="background: radial-gradient(ellipse at bottom left, rgba(200,240,74,0.05), transparent 70%)"
            ></div>
            <span class="font-mono text-xs text-accent/60 tracking-widest uppercase block mb-4">
              {{ String(i + 1).padStart(2, '0') }}
            </span>
            <h3 class="font-display font-bold text-xl mb-3 group-hover:text-accent transition-colors">
              {{ soft.title }}
            </h3>
            <p class="text-white/50 text-sm leading-relaxed">{{ soft.desc }}</p>
          </div>
        </div>
      </div>

      <!-- Also worked with marquee -->
      <div class="mt-24 reveal">
        <p class="section-label mb-8">Also worked with</p>
        <div class="overflow-hidden border border-white/10 rounded-2xl py-5 bg-white/[0.02]">
          <div class="flex animate-marquee whitespace-nowrap">
            <span
              v-for="(tech, i) in [...extraTech, ...extraTech]"
              :key="i"
              class="font-mono text-xs tracking-widest text-white/30 mx-8 uppercase hover:text-accent transition-colors cursor-default"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

useReveal()
useHead({ title: 'Skills — Mohammed Ashiq Ali K' })

const skillCategories = [
  {
    name: 'Backend',
    skills: [
      { name: 'Python', tag: 'Core' },
      { name: 'Django', tag: 'Framework' },
      { name: 'Django REST Framework', tag: 'APIs' },
      { name: 'Django Channels', tag: 'WebSockets' },
      { name: 'Unit Testing', tag: 'Quality' },
      { name: 'Machine Learning', tag: 'Data' },
    ],
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'Vue.js', tag: 'Framework' },
      { name: 'Nuxt.js', tag: 'SSR / SSG' },
      { name: 'JavaScript', tag: 'ES6+' },
      { name: 'Tailwind CSS', tag: 'Styling' },
    ],
  },
  {
    name: 'Database & Cloud',
    skills: [
      { name: 'PostgreSQL', tag: 'Primary DB' },
      { name: 'Database Design', tag: 'Modeling' },
      { name: 'Microsoft Azure', tag: 'Cloud' },
      { name: 'Git', tag: 'Version Control' },
    ],
  },
  {
    name: 'Integrations',
    skills: [
      { name: 'DHL Shipping API', tag: 'Logistics' },
      { name: 'UPS Shipping API', tag: 'Logistics' },
      { name: 'REST API Design', tag: 'Architecture' },
      { name: 'WebSocket Protocol', tag: 'Real-time' },
    ],
  },
]

const softSkills = [
  {
    title: 'Problem Solving',
    desc: 'Breaking down complex engineering challenges into clean, maintainable solutions across full-stack domains.',
  },
  {
    title: 'Collaboration',
    desc: 'Working across design, QA, and product teams — aligning on delivery, integration, and seamless functionality.',
  },
  {
    title: 'Continuous Learning',
    desc: 'Committed to growth — from NPTEL certifications to hands-on exploration of emerging frameworks and patterns.',
  },
]

const extraTech = [
  'Redis', 'Celery', 'Docker', 'Linux', 'Nginx',
  'Pinia', 'Vue Router', 'Vite', 'GitHub Actions', 'Postman',
]
</script>

<style scoped>
.skill-card {
  animation: skillFadeUp 0.5s ease both;
}

@keyframes skillFadeUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>