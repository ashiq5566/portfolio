<template>
  <div class="pt-32 pb-20 px-6">
    <div class="max-w-7xl mx-auto">
      <div class="mb-20">
        <p class="section-label reveal">Get In Touch</p>
        <h1 class="font-display text-6xl md:text-8xl font-bold leading-none tracking-tighter reveal">
          Let's build<br />
          <span class="font-serif italic font-light text-accent">together</span>
        </h1>
      </div>

      <div class="grid md:grid-cols-2 gap-16">
        <!-- Left: Info -->
        <div>
          <p class="text-white/60 leading-relaxed text-lg mb-10 reveal">
            I'm currently open to full-time Software Engineer roles, especially in the aviation, SaaS, and fintech sectors.
            If you have an interesting project or opportunity, I'd love to hear from you.
          </p>

          <!-- Contact options -->
          <div class="space-y-4 reveal">
            <a
              v-for="contact in contacts"
              :key="contact.label"
              :href="contact.href"
              :target="contact.external ? '_blank' : undefined"
              :rel="contact.external ? 'noopener' : undefined"
              class="flex items-center gap-4 p-4 rounded-xl border border-white/10 hover:border-accent/40 hover:bg-accent/5 group transition-all duration-200"
            >
              <div class="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors" v-html="contact.icon"></div>
              <div class="flex-1">
                <p class="font-mono text-xs text-white/30 tracking-widest uppercase mb-0.5">{{ contact.label }}</p>
                <p class="font-display font-semibold text-sm group-hover:text-accent transition-colors">{{ contact.value }}</p>
              </div>
              <svg class="text-white/20 group-hover:text-accent transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M7 17L17 7M17 7H7M17 7v10" />
              </svg>
            </a>
          </div>

          <!-- Availability badge -->
          <div class="mt-10 reveal">
            <div class="inline-flex items-center gap-3 border border-accent/20 rounded-2xl px-5 py-3 bg-accent/5">
              <span class="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
              <p class="font-mono text-sm text-accent/80">Available for new opportunities</p>
            </div>
          </div>
        </div>

        <!-- Right: Contact form -->
        <div class="card-base reveal">
          <h2 class="font-display text-2xl font-bold mb-6">Send a message</h2>

          <form @submit.prevent="submitForm" class="space-y-5">
            <div>
              <label class="font-mono text-xs text-white/40 tracking-widest uppercase block mb-2">Your Name</label>
              <input
                v-model="form.name"
                type="text"
                required
                placeholder="John Smith"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-paper placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            <div>
              <label class="font-mono text-xs text-white/40 tracking-widest uppercase block mb-2">Email Address</label>
              <input
                v-model="form.email"
                type="email"
                required
                placeholder="john@company.com"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-paper placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            <div>
              <label class="font-mono text-xs text-white/40 tracking-widest uppercase block mb-2">Subject</label>
              <input
                v-model="form.subject"
                type="text"
                placeholder="Job opportunity / Project collaboration"
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-paper placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors"
              />
            </div>

            <div>
              <label class="font-mono text-xs text-white/40 tracking-widest uppercase block mb-2">Message</label>
              <textarea
                v-model="form.message"
                required
                rows="5"
                placeholder="Tell me about your project or opportunity..."
                class="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-paper placeholder-white/20 focus:outline-none focus:border-accent/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              :disabled="sending"
              class="btn-primary w-full justify-center py-3.5 text-sm"
            >
              <span v-if="!sending">Send Message</span>
              <span v-else>Sending...</span>
              <svg v-if="!sending" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />
              </svg>
            </button>

            <p v-if="submitted" class="text-center font-mono text-xs text-accent tracking-widest">
              ✓ Message sent! I'll get back to you soon.
            </p>
          </form>

          <p class="font-mono text-xs text-white/20 mt-4 text-center">
            * Wire up to Formspree, EmailJS, or Netlify Forms to activate form submission.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
useReveal()
useHead({ title: 'Contact — Mohammed Ashiq Ali K' })

const form = reactive({ name: '', email: '', subject: '', message: '' })
const sending = ref(false)
const submitted = ref(false)

// Wire this up to your preferred form service (Formspree, EmailJS, Netlify Forms, etc.)
async function submitForm() {
  sending.value = true
  await new Promise((r) => setTimeout(r, 1000)) // Replace with actual API call
  sending.value = false
  submitted.value = true
  Object.keys(form).forEach((k) => (form[k] = ''))
}

const contacts = [
  {
    label: 'Email',
    value: 'ashiq5566.k@gmail.com',
    href: 'mailto:ashiq5566.k@gmail.com',
    icon: `<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="#c8f04a" stroke-width="1.5"><path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/></svg>`,
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/ashiqali-k',
    href: 'https://www.linkedin.com/in/ashiqali-k',
    external: true,
    icon: `<svg width="18" height="18" fill="#c8f04a" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
  },
  {
    label: 'Phone',
    value: '+91 79023 33397',
    href: 'tel:+917902333397',
    icon: `<svg width="18" height="18" fill="#c8f04a" viewBox="0 0 24 24"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>`,
  },
]
</script>
