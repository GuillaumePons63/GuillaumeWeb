// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'


export default defineNuxtConfig({
  modules: [['nuxt-mail', {
    message: {
      to: 'site@guillaumeweb.fr',
    },
    smtp: {
      host: process.env.MAIL_HOST,
      port: process.env.MAIL_PORT,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASSWORD
      }
    }
  }], "@nuxt/content", "@nuxt/image",'@nuxt/content'],
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      // Utile sur hébergement "custom" (o2switch) pour aider Studio à te reconnaître :
      gitInfo: {
        name: 'GuillaumeWeb',           // ex: 'site-vitrine'
        owner: 'GuillaumePons63',    // ex: 'guillaumeweb'
        url: 'https://github.com/GuillaumePons63/GuillaumeWeb'
      }
    }
  },
  devtools: { enabled: true },
  css:  [
    '@/assets/css/custom.scss',
    'animate.css/animate.min.css', // en tant que CSS, pas SCSS
    '@/assets/css/animation.css'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
           silenceDeprecations: [
            'import',
            'mixed-decls',
            'color-functions',
            'global-builtin',
          ],
        }
      }
    }
  },
  nitro: {
    preset: 'node-server'
  },
  experimental: {
    writeEarlyHints: false,
  }
})