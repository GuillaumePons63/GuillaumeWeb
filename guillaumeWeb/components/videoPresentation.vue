<template>
    <h2 class="text-center zoom">
        Présentation Vidéo
    </h2>
    <div v-if="widthScreen < 560">
        <a href="https://www.youtube.com/watch?v=VkhznUdi_-E" class="btn yt d-block m-auto"> Voir la vidéo sur youtube </a>
    </div>
    <div v-else>
    <iframe class="my-5 m-auto d-block" width="560" height="315"
        src="https://www.youtube.com/embed/VkhznUdi_-E?si=Kam0zrE_8iY6UELL" title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
</template>

<script setup>


const widthScreen = ref();

onMounted(() => {
    widthScreen.value = window.innerWidth;
    window.addEventListener('resize', () => {
        widthScreen.value = window.innerWidth;
    })
})

</script>

<style scoped>

.yt {
    background-color: #ff0000;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    text-decoration: none;
}

.yt:hover {
    background-color: #ff3333;
}

</style>
