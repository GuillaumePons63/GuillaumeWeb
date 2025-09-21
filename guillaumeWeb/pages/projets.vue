<template>
  <main class="container bg-secondary ">
    <h1 class="animate__animated animate__flipInX text-center">Mes projets</h1>
    <section class="animate__animated animate__zoomIn animate__delay-500ms mx-md-5">
      <p> je vous présente ici tous les projets sur lesquelles j'ai travaillés depuis 2020. Ils sont soient des projets
        de création de site web, soit des formations, soit des applications.</p>
    </section>
    <div class="d-flex flex-column flex-md-row flex-wrap justify-content-md-evenly">
      <div v-for="element in data"
        class="col-12 col-md-5 my-3 card d-block d-flex flex-column justify-content-between  zoom">
        <div class="card-header">
          <h4 class="my-0 fw-normal text-center mt-4"> {{ element.title }}</h4>
        </div>
        <div class="card-body">
          <!-- <div v-html="service.image" class="img-thumbnail"> -->
          <!-- </div> -->
          <p class="m-3 text-center"> {{ element.description }} </p>
        </div>
        <div class="mb-0 card-footer">
          <nuxt-link :to="`${element._path}`" type="button" class="btn btn-lg btn-outline-primary m-auto d-block">En
            savoir + </nuxt-link>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
const description = "Découvrez les projets de Guillaume Web, expert en création de sites web et développement d'applications. Chaque réalisation reflète une approche sur-mesure, alliant passion et expertise technique. Explorez nos solutions numériques innovantes et contactez-nous pour transformer vos idées en succès."

const { data } = await useAsyncData(() =>
  queryCollection('projets').all()
)
console.log(data)


useSeoMeta({
  title: 'Mes Projets | Guillaume Web',
  description: description,
  image: '../assets/images/logo.png',
  url: 'https://guillaumeweb.fr/services'
})

</script>