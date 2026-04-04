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

      <!-- Categories -->
      <div class="space-y-16">
        <div v-for="(category, i) in skillCategories" :key="category.name" class="reveal" :style="{ transitionDelay: i * 0.1 + 's' }">
          <div class="flex items-center gap-4 mb-8">
            <div class="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center text-accent text-lg">
              {{ category.icon }}
            </div>
            <div>
              <h2 class="font-display text-2xl font-bold">{{ category.name }}</h2>
              <p class="font-mono text-xs text-white/30 tracking-widest">{{ category.subtitle }}</p>
            </div>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              v-for="skill in category.skills"
              :key="skill.name"
              class="card-base group flex flex-col gap-3"
            >
              <div class="flex items-center justify-between">
                <span class="font-display font-semibold text-sm group-hover:text-accent transition-colors">{{ skill.name }}</span>
                <span class="font-mono text-xs text-white/30">{{ skill.level }}%</span>
              </div>
              <!-- Progress bar -->
              <div class="h-0.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  class="h-full bg-accent rounded-full transition-all duration-1000"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
              <span class="font-mono text-xs text-white/30">{{ skill.tag }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Soft skills -->
      <div class="mt-24 reveal">
        <p class="section-label">Beyond Code</p>
        <div class="grid md:grid-cols-3 gap-6">
          <div v-for="soft in softSkills" :key="soft.title" class="card-base">
            <div class="text-2xl mb-3">{{ soft.emoji }}</div>
            <h3 class="font-display font-bold text-lg mb-2">{{ soft.title }}</h3>
            <p class="text-white/50 text-sm leading-relaxed">{{ soft.desc }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useReveal()
useHead({ title: 'Skills — Mohammed Ashiq Ali K' })

const skillCategories = [
  {
    name: 'Backend Development',
    subtitle: 'Server-side & APIs',
    icon: '⚙️',
    skills: [
      { name: 'Python', level: 92, tag: 'Primary language' },
      { name: 'Django', level: 90, tag: 'Web framework' },
      { name: 'Django REST Framework', level: 88, tag: 'API development' },
      { name: 'Django Channels', level: 78, tag: 'WebSockets / async' },
      { name: 'Unit Testing', level: 75, tag: 'pytest / Django test' },
      { name: 'Machine Learning', level: 60, tag: 'Scikit-learn / NPTEL' },
    ],
  },
  {
    name: 'Frontend Development',
    subtitle: 'UI & User Experience',
    icon: '🎨',
    skills: [
      { name: 'Vue.js', level: 88, tag: 'Component framework' },
      { name: 'Nuxt.js', level: 85, tag: 'SSR / SSG' },
      { name: 'JavaScript', level: 82, tag: 'ES6+' },
      { name: 'Tailwind CSS', level: 85, tag: 'Utility-first CSS' },
    ],
  },
  {
    name: 'Data & Infrastructure',
    subtitle: 'Databases & Cloud',
    icon: '🗄️',
    skills: [
      { name: 'PostgreSQL', level: 80, tag: 'Primary database' },
      { name: 'Database Design', level: 78, tag: 'Schema modeling' },
      { name: 'Microsoft Azure', level: 60, tag: 'Cloud platform' },
      { name: 'Git', level: 85, tag: 'Version control' },
    ],
  },
]

const softSkills = [
  {
    emoji: '🧠',
    title: 'Problem Solving',
    desc: 'Adept at breaking down complex engineering problems into clean, maintainable solutions across full-stack domains.',
  },
  {
    emoji: '🤝',
    title: 'Cross-functional Collaboration',
    desc: 'Experienced working in team environments spanning design, QA, and product — aligning on delivery and functionality.',
  },
  {
    emoji: '📈',
    title: 'Continuous Learning',
    desc: 'Committed to staying current — from NPTEL certifications to hands-on exploration of new frameworks and patterns.',
  },
]
</script>
