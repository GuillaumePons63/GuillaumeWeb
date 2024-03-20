<template>
    <div>
        <h1>Tous les projets</h1>
        <ul>
            
        </ul>
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

<style scoped>
 

</style>