<template>
    <h2 class="text-center zoom">Mes projets</h2>
    <div class="d-flex flex-column flex-md-row justify-content-md-evenly">
        <div v-for="projet in projets" class="col-12 col-md-3 card d-block my-3 flex-column justify-content-between zoom">
            <div class="card-header">
                <h3 class="card-title text-center">{{ projet.title }}</h3>
            </div>
            <div class="card-body">
                <p class="m-3">{{ projet.description }}</p>
            </div>
            <div class="mb-0 card-footer">
                <nuxt-link :to="`/projets/${projet.title}`" type="button"
                    class="btn btn-lg btn-outline-primary m-auto d-block"> En savoir + </nuxt-link>
            </div>
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