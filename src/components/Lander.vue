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
                <h5>Bienvenue sur mon portfolio où vous trouverez les sites que j'ai conçu ou les projets de groupe auquels j'ai participé 
                    <br>dans le cadre de ma formation en cursus intensif Dev&Go et Code&Go avec la Coding Academy by Epitech</h5>
                    <a href="https://www.coding-academy.fr/dev-go/" target="blank"><img alt="logo epitech"  src="../images/CODING_LOGO.png" height="70"></a>
                <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target=".bd-example-modal-lg">Contact</button> -->
                <br><br> <br><br>
                <h5>J'ai vraiment apprécié travailler sur des projets MySql/Laravel/VueJs, MongoDB/ExpressJs/Nuxt, MongoDB/ExpressJs/VueJs <br>
                et je suis ouvert également à la découverte de nouvelles technos ! <br><br>
                </h5>
                <br><br>
                

                <button type="button" class="btn btn-primary btn-lg" onClick="location.href='mailto:cyril.cordier@gmail.com?subject=Contact depuis le site Portfolio'" style="margin-top:3rem">Contact</button>
                <a class="nav-link" href="https://1drv.ms/b/s!Aj3cHxC6MppjgpUq8G2O4qbAPOB47w" target="blank">
                <button type="button" class="btn btn-primary btn-lg"  style="margin-top:3rem">Consulter mon CV</button>
                </a>
                
            </div>
        </section>

        <!-- portfolio section -->
        <section class="portfolio">
            <h1>Portfolio</h1>
            <p>Voici quelques projets réalisés, actuellement en ligne. <br>
            Les projets deployés sont consultables sur mon github : <a href="https://github.com/cyril-cordier/" target="blank">https://github.com/cyril-cordier/</a>
            </p>
            <div class="container">
                <div class="row">

                    
                    <TC95US />
                    <GameProject />
                    <RottenTomatoes />
                    <MyShop />
                    <Laravel />
                    
                    

                    



                    
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
import GameProject from './projects/GameProject.vue'
import TC95US from './projects/TC95US.vue'
import RottenTomatoes from './projects/RottenTomatoes.vue'
import MyShop from './projects/MyShop.vue'
import Laravel from './projects/Laravel.vue'


export default {
    name:'Lander',
    components:{
        //talk,
        GameProject,
        TC95US, 
        RottenTomatoes,
        MyShop,
        Laravel,
        
    }  
}
</script>

<style lang="css" scoped>
    .section{
        padding-top: 10%;
        padding-bottom: 10%;
    }

    .portfolio{
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