<template>
    <main class="container bg-secondary">   
        <section class="animate__animated animate__backInUp animate__delay-800ms">            
            <ContentRenderer :value="data" />             
        </section>
    </main>
</template>

<script setup>
const route = useRoute()
const router = useRouter()


const {data} = await useAsyncData('projets',async()=> queryContent(`/projet/${route.params.name}`).findOne(0))


if (!data) {
    console.log('no data')
    router.push('/404')
}

useSeoMeta({
    title: data.value.title,
    description: data.value.description,
    url: 'https://guillaumeweb.fr/service/' + route.params.name
})
</script>