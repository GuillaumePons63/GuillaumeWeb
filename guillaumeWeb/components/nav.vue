<template>
    <header class="bg-secondary ">
        <nav class="navbar navbar-expand-lg bg-body-primary bg-info rounded animate__animated animate__backInDown"
            aria-label="Thirteenth navbar example">
            <div class="container-fluid">
                <button class="navbar-toggler m-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarsExample11" aria-controls="navbarsExample11" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon text-center"></span>
                </button>

                <div class="collapse navbar-collapse d-lg-flex text-center" id="navbarsExample11">
                    <a class="navbar-brand col-lg-3 me-0 text-light" href="#">GuillaumeDev</a>
                    <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                        <li class="nav-item">
                            <NuxtLink class="nav-link text-light" aria-current="page" to="/">Accueil</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link text-light" aria-current="page" to="/parcours">Mon parcours
                            </NuxtLink>
                        </li>
                        <li class="nav-item">
                            <NuxtLink class="nav-link text-light" to="/services">Mes services</NuxtLink>
                        </li>
                        <li class="nav-item">
                        <NuxtLink class="nav-link text-light" to="/projets">Mes Projets</NuxtLink>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-light" href="https://www.malt.fr/profile/guillaumepons1"
                                target="_blank"> Mon profil sur
                                Malt </a>
                        </li>
                        <!-- <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown"
                                aria-expanded="false">Dropdown</a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">A propos</a></li>
                                <li><a class="dropdown-item" href="#">Mes projets</a></li>
                                <li><a class="dropdown-item" href="#">Mes services</a></li>
                            </ul>
                        </li> -->
                    </ul>
                    <div class="d-lg-flex col-lg-3 justify-content-lg-end">
                        <NuxtLink class="btn btn-success" to="/contact"> Me contacter </NuxtLink>
                    </div>
                </div>
            </div>
        </nav>
    </header>
</template>

<style>
.nav-link {
    transition: all 0.3s ease-in-out;
}

.nav-link:hover {
    transform: scale(1.1);

}
</style>