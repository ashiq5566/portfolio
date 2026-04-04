<template>
  <div class="pt-32 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <!-- Header -->
      <div class="mb-24">
        <p class="section-label reveal">About Me</p>
        <h1 class="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter reveal">
          The engineer<br />
          <span class="font-serif italic font-light text-accent">behind the code</span>
        </h1>
      </div>

      <div class="grid md:grid-cols-2 gap-16 items-start">
        <!-- Left: Bio -->
        <div class="reveal">
          <div class="prose prose-invert max-w-none">
            <p class="text-white/70 text-lg leading-relaxed mb-6">
              I'm <strong class="text-paper">Mohammed Ashiq Ali K</strong>, a Software Engineer based in Kerala, India with over 3 years of experience building production-grade web applications.
            </p>
            <p class="text-white/60 leading-relaxed mb-6">
              My stack is centered around <span class="text-accent font-medium">Python & Django</span> on the backend and <span class="text-accent font-medium">Vue.js & Nuxt.js</span> on the frontend — a combination I've used to ship e-commerce platforms, CRM tools, real-time systems, and SaaS products across multiple industries.
            </p>
            <p class="text-white/60 leading-relaxed mb-6">
              Currently at <strong class="text-paper">GI Corporation</strong>, I've had the rare opportunity to build aviation-sector software — including an aircraft assembly tools platform with multi-carrier logistics integration. My background spans e-learning, CRM, and e-commerce domains.
            </p>
            <p class="text-white/60 leading-relaxed">
              I hold an <strong class="text-paper">MCA from APJ Abdul Kalam Technological University</strong> and am certified in Data Mining from IIT Kharagpur via NPTEL. I care deeply about code quality, maintainability, and shipping software that actually works.
            </p>
          </div>

          <div class="mt-10 flex flex-wrap gap-4">
            <a href="mailto:ashiq5566.k@gmail.com" class="btn-primary">
              Email Me
            </a>
            <a href="https://www.linkedin.com/in/ashiqali-k" target="_blank" class="btn-outline">
              LinkedIn →
            </a>
          </div>
        </div>

        <!-- Right: Details card -->
        <div class="space-y-6">
          <div class="card-base reveal">
            <h3 class="font-mono text-xs text-accent/60 tracking-widest uppercase mb-4">Location & Contact</h3>
            <ul class="space-y-3">
              <li class="flex items-center gap-3 text-sm text-white/60">
                <svg class="text-accent shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor" />
                </svg>
                Malappuram, Kerala 676503
              </li>
              <li class="flex items-center gap-3 text-sm text-white/60">
                <svg class="text-accent shrink-0" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                ashiq5566.k@gmail.com
              </li>
              <li class="flex items-center gap-3 text-sm text-white/60">
                <svg class="text-accent shrink-0" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                (+91) 79023 33397
              </li>
            </ul>
          </div>

          <div class="card-base reveal">
            <h3 class="font-mono text-xs text-accent/60 tracking-widest uppercase mb-4">Education</h3>
            <div class="space-y-4">
              <div>
                <p class="font-display font-semibold text-sm">Masters in Computer Application</p>
                <p class="font-mono text-xs text-white/40 mt-1">APJ Abdul Kalam Technological University · 2021–2023</p>
              </div>
              <div class="border-t border-white/10 pt-4">
                <p class="font-display font-semibold text-sm">Bachelors in Computer Application</p>
                <p class="font-mono text-xs text-white/40 mt-1">Calicut University · 2018–2021</p>
              </div>
            </div>
          </div>

          <div class="card-base reveal">
            <h3 class="font-mono text-xs text-accent/60 tracking-widest uppercase mb-4">Certifications</h3>
            <div class="flex items-start gap-3">
              <div class="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c8f04a" stroke-width="2">
                  <path d="M12 15l-3.5 2 1-3.5L6 11l3.5-.5L12 8l2.5 2.5 3.5.5-3.5 2.5 1 3.5z" />
                </svg>
              </div>
              <div>
                <p class="font-display font-semibold text-sm">NPTEL Data Mining</p>
                <p class="font-mono text-xs text-white/40 mt-1">IIT Kharagpur · Online Certification</p>
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
useHead({ title: 'About — Mohammed Ashiq Ali K' })
</script>
