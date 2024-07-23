<template>
    <main v-if="service" class="container bg-secondary">
        <h1 class="text-center animate__animated animate__bounce"> {{ service.titre }} </h1>
        <ContentRenderer :value="data" />      
    </main>

</template>

<script setup>
// import VueMarkdown from 'vue-markdown-render';

const route = useRoute()
const services = ref(getServices())

const service = ref(services.value.find(service => service.navSlug === route.params.name))

const {data} = await useAsyncData('services', async ()=> queryContent(`/service/${service.value.mainContent}`).findOne(0))





console.log(service.value)

// const {data} = await useAsyncData('services', ()=> queryContent('services').findOne(0))


// console.log(src.value)

useSeoMeta({
    title: service.value.titre,
    description: service.value.description,
    image: service.value.image,
    url: 'https://guillaumeweb.fr/service/' + service.value.navSlug
})



</script>