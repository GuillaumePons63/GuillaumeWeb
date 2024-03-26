// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    ['nuxt-mail', {
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
    }]
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/custom.scss'],


})
