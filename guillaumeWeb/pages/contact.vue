<template>
    <main class="container bg-secondary animate__animated animate__backInUp">
        <Contact />
    </main>
</template>

<script setup>
const description = "Contactez-moi dès aujourd'hui via notre formulaire de contact simple et rapide. Que vous ayez des questions, besoin de conseils, ou souhaitez démarrer un projet, je suis prêt à vous écouter et à répondre à vos besoins. Je ne fature pas la conseil, donc n'hésitez pas à me contacter dès maintenant."

useSeoMeta({
    title: 'Contactez Guillaume Web | Développeur web freelance',
    description: description,
    image: '../assets/images/logo.png',
    url: 'https://guillaumeweb.fr/contact'
})

</script>

<style scoped>
main {
    min-height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>