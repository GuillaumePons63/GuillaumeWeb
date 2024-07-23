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
  }], "@nuxt/content", "@nuxt/image"],
  devtools: { enabled: true },
  css: ['~/assets/css/custom.scss'],
  nitro: {
    preset: 'node-server'
  },
  experimental: {
    writeEarlyHints: false,
  }
})