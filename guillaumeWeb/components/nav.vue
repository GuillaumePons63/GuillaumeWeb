<template>
    <nav class="navbar navbar-expand-lg bg-body-primary bg-info rounded" aria-label="Thirteenth navbar example">
        <div class="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample11"
                aria-controls="navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse d-lg-flex" id="navbarsExample11">
                <a class="navbar-brand col-lg-3 me-0 text-light" href="#">GuillaumeDev</a>
                <ul class="navbar-nav col-lg-6 justify-content-lg-center">
                    <li class="nav-item">
                        <NuxtLink class="nav-link text-light" aria-current="page" to="/">Accueil</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link text-light" aria-current="page" to="/parcours">Mon parcours</NuxtLink>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-light" href="#">Mes services</a>
                    </li>
                    <li class="nav-item">
                        <NuxtLink class="nav-link text-light" to="/allProjets">Mes Projets</NuxtLink>
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
                    <button class="btn btn-success"> Me contacter </button>
                </div>
            </div>
        </div>
    </nav>
</template>