<template>
    <header class="bg-secondary animate__animated animate__zoomInDown">
        <Nav />
    </header>
  
    <main v-if="service" class="container bg-secondary">
        <h1 class="mt-5 animate__animated animate__bounce"> {{service.titre}} </h1>
        <div v-html="service.mainContent"></div>
    </main> 

</template>

<script setup>
const route = useRoute()
const services = ref(getServices())

const service = ref(services.value.find(service => service.navSlug == route.params.name))



</script>