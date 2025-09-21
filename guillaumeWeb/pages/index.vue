<template>
    <HomeBienvenue />
    <hr class="solid">
    <div class="animate__animated animate__zoomIn animate__delay-1s">
        <HomeServices />
        <hr class="solid">
        <Contact />
    </div>
</template>

<script setup>

const description = 'Offrant des services de développement web full stack dans toute la France, je transforme vos idées en solutions digitales innovantes. Découvrez comment nous pouvons aider votre entreprise à se développer en ligne. Basé à côté de Clermont-Ferrand, en Auvergne'

const imageLink = '../public/logo.png';

useSeoMeta({
    title: 'Développeur web full stack freelance | Guillaume Web',
    description: description,
    image: imageLink,
    url: 'https://guillaumeweb.fr'
})
</script>