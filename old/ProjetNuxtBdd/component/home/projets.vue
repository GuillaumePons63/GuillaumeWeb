<template>
    <h2 class="text-center zoom">Mes projets</h2>
    <div class="d-flex flex-column flex-md-row justify-content-md-evenly">
        <GenericCardProjet
            v-for="projet in projets"
            :key="projet.id"
            :projet="projet"
        />
    </div>
    <div>
        <nuxt-link to="/allProjets" type="button"
                    class="btn btn-lg btn-outline-primary m-auto d-block"> Découvrir tout mes projets </nuxt-link>
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