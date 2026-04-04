// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  app: {
    head: {
      title: 'Mohammed Ashiq Ali K — Software Engineer',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Software Engineer specializing in Python, Django, Vue.js, and Nuxt.js. Building scalable, high-performance web applications.',
        },
        { property: 'og:title', content: 'Mohammed Ashiq Ali K — Software Engineer' },
        {
          property: 'og:description',
          content: 'Software Engineer specializing in Python, Django, Vue.js, and Nuxt.js.',
        },
        { name: 'theme-color', content: '#0a0a0a' },
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,600&display=swap',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
})
