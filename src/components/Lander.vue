<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                <img alt="Cyril Cordier - Web dev" class="rounded-circle" src="../images/Cyril_CORDIER.jpg" height="200">
                <br> <br>
                <h1>Cyril CORDIER</h1>
                <br>
                <h3>Développeur / Intégrateur Web Full Stack</h3>
                <p>Bienvenue sur mon portfolio où vous trouverez les sites que j'ai conçu ou les projets de groupe auquels j'ai participé 
                    <br>dans le cadre de ma formation en cursus intensif Dev&Go et Code&Go avec la Coding Academy by Epitech</p>
                    <a href="https://www.coding-academy.fr/dev-go/" target="blank"><img alt="logo epitech"  src="../images/CODING_LOGO.png" height="50"></a>
                <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button> -->
                <br><br> <br><br>
                <h5>J'ai vraiment apprécié travailler sur des projets MySql/Laravel/VueJs, MongoDB/ExpressJs/Nuxt, MongoDB/ExpressJs/VueJs <br>
                et je suis ouvert également à la découverte de nouvelles technos ! <br><br>
                Actuellement en projet de groupe en méthode agile pour un projet de sitr de partage de jeux de société en ligne avec MongoDB/ExpressJs/VueJs <br>
                Site en cours de construction disponible sur (<a href="https://gameproject.netlify.app/" target="blank">https://gameproject.netlify.app/</a>)</h5>
                <br><br>
                

                <button type="button" class="btn btn-primary btn-lg" onClick="location.href='mailto:cyril.cordier@gmail.com?subject=Contact depuis le site Portfolio'" style="margin-top:3rem">Contact</button>
                <a class="nav-link" href="https://1drv.ms/b/s!Aj3cHxC6MppjgpUq8G2O4qbAPOB47w" target="blank">
                <button type="button" class="btn btn-primary btn-lg"  style="margin-top:3rem">Consulter mon CV</button>
                </a>
                
            </div>
        </section>

        <!-- portfolio section -->
        <section class="protfolio">
            <h1>Portfolio</h1>
            <p>Voici quelques projets réalisés, actuellement en ligne. <br>
            Les projets deployés sont consultables sur mon github : <a href="https://github.com/cyril-cordier/" target="blank">https://github.com/cyril-cordier/</a>
            </p>
            <div class="container">
                <div class="row">

                    <div class="col-md-6">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="logos technos" src="../images/tcus/technos_tcus.png" style="width:20rem">
                                    <a href="https://tc95us.fr" target="blank"><img alt="logos technos" src="../images/tcus/accueil.png" style="width:20rem"></a>
                                    <h2 style="margin-top:2rem">Projet de fin de formation DEV&GO</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Pour mon projet de fin de formation DEV&GO, j'ai choisi de proposer à mon club de Tennis la rénovation du site internet.
                                        <br>Ce projet, développé seul avec un back-end Laravel et un front-end VueJs est amené à évoluer au fur et à mesure de l'apprentissage de nouvelles technologies, ou par l'ajout de contenus issus d'API externes (résultats de matchs internationnaux, articles spécialisés Tennis...).
                                    </p>
                                    <br>
                                    <button type="button" class="btn btn-outline-secondary" onClick="location.href='https://tc95us.fr'" target="blank" >Visiter le site</button>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-6">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="logos technos" src="../images/Gameproject/technos_gameproject.png" style="width:20rem">
                                    <a href="https://gameproject.netlify.app/" target="blank"><img alt="logos technos" src="../images/Gameproject/Gameproject.png" style="width:20rem"></a>
                                    <h2 style="margin-top:2rem">Projet de fin de formation CODE&GO</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Le projet de fin de formation Full stack DEV&GO est un projet de groupe en mode Agile. 3 groupes ont été définis, chacun étant à la fois Product Owner pour un second 
                                        groupe de dev, et dev pour le 3ème groupe. Nous avons hérité d'un projet de site de partage de jeux de société.
                                        <br>Le quatuor de technos : MongoDB (DB)/ ExpressJs (Backend) / VueJs (FrontEnd)/ Tailwind (CSS) ont été choisis par notre groupe pour élaborer ce projet. 
                                        Actuellmeent en cours de dev, le projet est toutefois dejà accessible sur <a href="https://gameproject.netlify.app/" target="blank">https://gameproject.netlify.app/</a>.
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary" onClick="location.href='https://gameproject.netlify.app/'" target="blank" >Visiter et tester le site</button>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-6">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="logos technos" src="../images/rotten_tomatoes/technos_RT.png" style="width:20rem">
                                    <a href="http://nuxt-tomatoes.herokuapp.com/" target="blank"><img alt="logos technos" src="../images/rotten_tomatoes/rotten_tomatoes.png" style="width:20rem"></a>
                                    <h2 style="margin-top:2rem">Projet NuxtJs - Rotten Tomatoes</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Pour ce projet NuxtJs, c'est en équipe de 4 dev que nous avons reproduit le site "Rotten Tomatoes", site de critiques de films, basé sur l'API 'The movie DataBase (TMDB)'.
                                        <br>
                                        <br>Pour ce projet, le back et le front sont intégrés dans Nuxt, avec un back ExpressJs et des données stockées via le cloud MongoDB (Atlas).
                                    </p>
                                    <br>
                                    <button type="button" class="btn btn-outline-secondary" onClick="location.href='http://nuxt-tomatoes.herokuapp.com/'" target="blank" >Visiter le site</button>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-6">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="logos technos" src="../images/myshop/technos_MyShop.png" style="width:20rem">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive1_pq7xre.jpg" alt="MyShop1">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive2_dffssf.jpg" alt="MyShop2">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive3_lppfbm.jpg" alt="MyShop3">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive4_llasjk.jpg" alt="MyShop4">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive5_xqwyqt.jpg" alt="MyShop5">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive6_nwhtag.jpg" alt="MyShop6">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924638/portfolio/MyShop/Diapositive7_lbrnej.jpg" alt="MyShop7">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924638/portfolio/MyShop/Diapositive8_zi5wuj.jpg" alt="MyShop8">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924638/portfolio/MyShop/Diapositive9_uqtbqe.jpg" alt="MyShop9">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924638/portfolio/MyShop/Diapositive10_tyrpjz.jpg" alt="MyShop10">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive11_b0cvpd.jpg" alt="MyShop11">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive12_j8pgol.jpg" alt="MyShop12">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive13_k66r9j.jpg" alt="MyShop13">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive14_jl0yky.jpg" alt="MyShop14">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" style="width:100%" src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602924637/portfolio/MyShop/Diapositive15_iymvqn.jpg" alt="MyShop15">
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        </div>
                                    <h2 style="margin-top:2rem">Projet My Shop</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Projet créé uniquement en Mysql/PHP/HTML/CSS sans framework, en équipe de 4 dev.
                                        <br>Un projet avec l'objectif de créer un webshop (sans tunnel de paiement) pour travailler les bases PHP/HTML/CSS avant de découvrir les framework...
                                    </p>
                                    
                                </div>
                            </div>
                            <br>
                    </div>

                    <div class="col-md-6">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="logos technos" src="../images/Laravel/technos_Laravel.png" style="width:20rem">
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                                            <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932056/portfolio/Laravel/Diapositive1_xkqoa3.jpg" alt="Laravel1">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932055/portfolio/Laravel/Diapositive2_bgqrse.jpg" alt="Laravel2">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932055/portfolio/Laravel/Diapositive3_vn39a7.jpg" alt="Laravel3">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932055/portfolio/Laravel/Diapositive4_eupec5.jpg" alt="Laravel4">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932055/portfolio/Laravel/Diapositive5_asyfyx.jpg" alt="Laravel5">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932055/portfolio/Laravel/Diapositive6_t1mpex.jpg" alt="Laravel6">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932055/portfolio/Laravel/Diapositive7_ukxr8c.jpg" alt="Laravel7">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932056/portfolio/Laravel/Diapositive8_asglg3.jpg" alt="Laravel8">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932056/portfolio/Laravel/Diapositive9_wcsaco.jpg" alt="Laravel9">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932056/portfolio/Laravel/Diapositive10_f4sqi8.jpg" alt="Laravel10">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932056/portfolio/Laravel/Diapositive11_gfftea.jpg" alt="Laravel11">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932056/portfolio/Laravel/Diapositive12_jncny7.jpg" alt="Laravel12">
                                            </div>
                                            <div class="carousel-item">
                                            <img class="d-block w-25rem" 
                                            style="width:100%" 
                                            src="https://res.cloudinary.com/dcp7bq2a1/image/upload/v1602932056/portfolio/Laravel/Diapositive13_v48pbi.jpg" alt="Laravel13">
                                            </div>
                                        </div>
                                        <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Previous</span>
                                        </a>
                                        <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span class="sr-only">Next</span>
                                        </a>
                                        </div>
                                    <h2 style="margin-top:2rem">Projet Laravel - Site de petites annonces</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Premier projet en solo uniquement avec Laravel, (DB Mysql).
                                        <br>Un projet avec pour objectif de découvrir le framework Laravel (créé à partir de Symphony), avec système d'authentification (Laravel Passport).
                                    </p>
                                    
                                </div>
                            </div>
                            <br>
                    </div>



                    
                    <div class="col-md-12">
                            <div class="card">
                                <div class="card-head">
                                    
                                    
                                    <h2 style="margin-top:2rem">Mes technologies</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <img alt="logos technos" src="../images/technos.png" style="width:100%">
                                    <!-- <a href="https://tc95us.fr" target="blank"><img alt="logos technos" src="../images/accueil.png" style="width:20rem"></a> -->
                                </div>
                            </div>
                            <br>
                    </div>

                    


                      

                    
                </div>
            </div>
        </section>

        <!-- modal for contact -->
        <!-- 
        <section class="">
            <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <talk/>
                    </div>
                </div>
            </div>
        </section> -->
        
    </div>
</template>

<script lang="ts">
//import talk from './Contact.vue'
export default {
    name:'Lander',
    components:{
        //talk
    }  
}
</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .protfolio{
        background-color: #34345238;
        padding-top: 8%;
        padding-bottom: 15%;
        /* padding:15% */
    }

    .img-custome{
        width: 140px;
        height: 140px;
        margin-top: 15px;
    }
    .carousel-control-prev-icon,
    .carousel-control-next-icon {
    height: 100px;
    width: 100px;
    outline: black;
    background-size: 100%, 100%;
    
    background-image: none;
    }

    .carousel-control-next-icon:after
    {
    content: '>';
    font-size: 35px;
    color: rgb(12, 25, 211);
    }

    .carousel-control-prev-icon:after {
    content: '<';
    font-size: 35px;
    color: rgb(12, 25, 211);
    }
</style>