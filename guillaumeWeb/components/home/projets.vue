<template>
    <h2 class="text-center">Mes projets</h2>
    <div class="container d-flex flex-row justify-content-between">
        <div v-for="projet in projets" class="col-12 col-md-4">

            <h3>{{ projet.title }}</h3>
            <p>{{ projet.description }}</p>

        </div>
    </div>
</template>

<script setup>

const projets = ref()

onMounted(async () => {
    try {
        projets.value = await $fetch('/api/projets')
    } catch (e) {
        console.error(e)
    }

})



</script>