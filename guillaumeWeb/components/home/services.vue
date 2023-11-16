<template>
  <h2 class="text-center zoom">
    Mes services
  </h2>
  <div class="d-flex flex-column flex-md-row justify-content-md-evenly">
    <div v-for="service in services"
      class="col-12 col-md-3 my-3 card d-block d-flex flex-column justify-content-between zoom">
      <div class="card-header">
        <h4 class="my-0 fw-normal text-center mt-4"> {{ service.titre }}</h4>
      </div>
      <div class="card-body">
        <p class="m-3"> {{ service.description }} </p>
      </div>
      <div class="mb-0 card-footer">
        <button type="button" class="btn btn-lg btn-outline-primary m-auto d-block">En savoir + </button>
      </div>
    </div>
  </div>
</template>

<script setup>
const services = ref(getServices())



</script>

<style scoped>
.card-header {
  min-height: 80px;
}
</style>
