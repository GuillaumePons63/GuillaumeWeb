<template>
    <div class="row">
        <div class="col-12 col-md-3 animate__animated animate__zoomIn animate__delay-500ms">
            <div id="carousel" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="~/assets/images/logo.png" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="~/assets/images/coding.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="~/assets/images/code.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="~/assets/images/puy.jpg" class="d-block w-100" alt="...">
                    </div>
                    <div class="carousel-item">
                        <img src="~/assets/images/rasta.jpeg" class="d-block w-100" alt="...">
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 col-md-9 mt-5 m-auto">
            <h1 class="text-center"> J'aide les gens avec l'informatique </h1>
            <p class="m-4"> J’ai commencé l’informatique quand j’avais 15 ans, grâce à mes grand parents, qui m’ont
                offert
                mon premier
                PC à
                Noël. Déjà passionné de jeux vidéos, j’ignorais à cet instant que le temps que j’allais perdre à
                m’amuser à
                tester
                des choses me permettrait de vivre aujourd’hui. </p>
            <p class="text-center">
                <nuxt-link to="/parcours"> Lire mon parcours </nuxt-link>
            </p>

        </div>
    </div>
</template>

<script setup>


</script>