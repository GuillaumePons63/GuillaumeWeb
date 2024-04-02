<template>
    <h1> {{ projet.title }}</h1>
</template>

<script setup>

const route = useRoute()
const projet = ref()



projet.value = await $fetch(`/api/projet/${route.params.titre}`)
if (!projet.value) {
    throw createError({
        statusCode: 404,
        statusMessage: 'Page Not Found'
    })
}



</script>