<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                <img alt="Cyril Cordier - Web dev" class="rounded-circle" src="../images/Cyril_CORDIER.jpg" height="200">
                <h1>Cyril CORDIER</h1>
                <h3>Developeur / Intégrateur Web Full Stack</h3>
                <p>Bienvenue sur mon portfolio où vous trouverez les sites que j'ai conçu ou les projets de groupe auquels j'ai participé 
                    <br>dans le cadre de ma formation en cursus intensif Dev&Go avec la Coding Academy by Epitech</p>
                    <a href="https://www.coding-academy.fr/dev-go/" target="blank"><img alt="logo epitech"  src="../images/CODING_LOGO.png" height="50"></a>
                <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button> -->
                <br>
                <button type="button" class="btn btn-primary btn-lg" onClick="location.href='mailto:cyril.cordier@gmail.com?subject=Contact depuis le site Portfolio'" style="margin-top:3rem">Contact</button>

            </div>
        </section>

        <!-- portfolio section -->
        <section class="protfolio">
            <h1>Portfolio</h1>
            <p>Voici quelques projets réalisés, actuellement en ligne. <br>
            Les projets sont consultables sur mon github : <a href="https://github.com/cyril-cordier/" target="blank">https://github.com/cyril-cordier/</a>
                
            </p>
            <div class="container">
                <div class="row">

                    <div class="col-md-12">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="logos technos" src="../images/technos_tcus.png" style="width:20rem">
                                    <a href="https://tc95us.fr" target="blank"><img alt="logos technos" src="../images/accueil.png" style="width:20rem"></a>
                                    <h2>Projet de fin de formation DEV&Go</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        Pour mon projet de fin de formation, j'ai choisi de proposer à mon club de Tennis la rénovation du site internet.
                                        <br>Ce projet, développé avec un back-end Laravel et un front-end VueJs est amené à évoluer au fur et à mesure de l'apprentissage de nouvelles technologies.
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary" onClick="location.href='https://tc95us.fr'" target="blank" >Visiter le site</button>
                                </div>
                            </div>
                            <br>
                    </div>
                    <div class="col-md-12">
                            <div class="card">
                                <div class="card-head">
                                    <img alt="logos technos" src="../images/technos_tcus.png" style="width:20rem">
                                    <a href="https://tc95us.fr" target="blank"><img alt="logos technos" src="../images/accueil.png" style="width:20rem"></a>
                                    <h2>Mes technologies</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <p>
                                        VueJs / Laravel
                                    </p>
                                    <button type="button" class="btn btn-outline-secondary" onClick="location.href='https://tc95us.fr'" target="blank" >Visiter le site</button>
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

</style>