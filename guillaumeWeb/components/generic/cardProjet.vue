<template>
    <div class="col-12 col-md-3 card d-block my-3 flex-column justify-content-between zoom">
        <div class="card-header">
            <h3 class="card-title text-center">{{ props.projet.title }}</h3>
        </div>
        <div class="card-body">
            <p class="m-3">{{ props.projet.description }}</p>
        </div>
        <div class="mb-0 card-footer">
            <nuxt-link :to="`/projets/${props.projet.title}`" type="button"
                class="btn btn-lg btn-outline-primary m-auto d-block"> En savoir + </nuxt-link>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps({
    projet: Object
})
</script>