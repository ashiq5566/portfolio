<template>
  <div class="pt-32 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-20">
        <p class="section-label reveal">Work History</p>
        <h1 class="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter reveal">
          Where I've<br />
          <span class="font-serif italic font-light text-accent">worked</span>
        </h1>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Vertical line -->
        <div class="hidden md:block absolute left-[220px] top-0 bottom-0 w-px bg-white/10"></div>

        <div class="space-y-20">
          <div
            v-for="(job, i) in jobs"
            :key="job.company"
            class="reveal md:grid md:grid-cols-[220px_1fr] gap-12"
            :style="{ transitionDelay: i * 0.12 + 's' }"
          >
            <!-- Left: Date + Company -->
            <div class="mb-6 md:mb-0 md:text-right md:pr-12 relative">
              <!-- Dot -->
              <div class="hidden md:block absolute right-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-accent ring-4 ring-ink z-10"></div>
              <p class="font-mono text-xs text-white/30 tracking-widest uppercase mb-1">{{ job.period }}</p>
              <p class="font-display font-bold text-lg text-paper">{{ job.company }}</p>
              <span class="inline-block font-mono text-xs text-accent/70 mt-1 px-2 py-0.5 rounded-full bg-accent/10">{{ job.type }}</span>
            </div>

            <!-- Right: Details -->
            <div>
              <div class="flex items-start gap-4 mb-6">
                <div>
                  <h3 class="font-display text-2xl font-bold">{{ job.role }}</h3>
                  <p class="text-white/40 text-sm mt-1">{{ job.location }}</p>
                </div>
              </div>

              <ul class="space-y-3 mb-6">
                <li
                  v-for="item in job.bullets"
                  :key="item"
                  class="flex items-start gap-3 text-white/60 text-sm leading-relaxed"
                >
                  <span class="text-accent mt-1 shrink-0">▸</span>
                  {{ item }}
                </li>
              </ul>

              <!-- Tech tags -->
              <div class="flex flex-wrap gap-2">
                <span
                  v-for="tech in job.tech"
                  :key="tech"
                  class="font-mono text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/40"
                >
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useReveal()
useHead({ title: 'Experience — Mohammed Ashiq Ali K' })

const jobs = [
  {
    role: 'Software Development Engineer I',
    company: 'GI Corporation',
    period: 'May 2024 – Present',
    type: 'Full-time',
    location: 'Kerala, India',
    bullets: [
      'Developed and maintained RESTful APIs using Django REST Framework, enabling efficient CRUD operations and scalable backend architecture.',
      'Built an e-commerce platform for managing complex product catalogs with multiple part numbers and custom product configurations.',
      'Integrated multiple shipping carriers including DHL and UPS, enabling automated label generation, rate calculation, and real-time shipment tracking.',
      'Designed and developed an aircraft assembly tools e-commerce platform from scratch, covering both frontend and backend workflows.',
      'Implemented modern frontend build optimization techniques to improve performance, reduce load times, and enhance overall user experience.',
      'Proficient in Vue.js and Nuxt.js, building responsive, modular, and production-ready UI components and pages.',
      'Created and applied custom Django migrations for smooth database updates, schema evolution, and backward-compatible deployment processes.',
    ],
    tech: ['Python', 'Django', 'Django REST Framework', 'Vue.js', 'Nuxt.js', 'PostgreSQL', 'DHL API', 'UPS API', 'Azure', 'Tailwind CSS'],
  },
  {
    role: 'Full Stack Developer',
    company: 'Ruppells Solutions',
    period: 'Jul 2023 – Apr 2024',
    type: 'Full-time',
    location: 'Kerala, India',
    bullets: [
      'Designed and implemented robust APIs for an E-Learning platform and a Customer Relationship Application.',
      'Utilized Django and Django Channels to incorporate real-time communication features including WebSocket-based live messaging.',
      'Demonstrated proficiency in crafting scalable solutions with attention to performance and reliability.',
      'Collaborated with cross-functional teams to ensure seamless integration and functionality.',
      'Maintained a commitment to high-quality code standards throughout the development process.',
    ],
    tech: ['Python', 'Django', 'Django Channels', 'WebSockets', 'Vue.js', 'PostgreSQL', 'REST APIs'],
  },
  {
    role: 'Software Engineer / QA',
    company: 'Talrop',
    period: 'Aug 2020 – May 2021',
    type: 'Full-time',
    location: 'Kerala, India',
    bullets: [
      'Performed Quality Assurance tasks to guarantee reliability and performance of software products.',
      'Ensured website functionality and performance through systematic testing.',
      'Contributed to the development of websites and web applications.',
    ],
    tech: ['Python', 'JavaScript', 'QA Testing', 'Web Development'],
  },
]
</script>
