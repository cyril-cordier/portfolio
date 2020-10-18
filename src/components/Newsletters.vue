<template>
    <div>
        <!-- lander section -->
        <section class="section">
            <div class="container-fliud">
                
                <h1>Mes newsletters</h1>
                <br>
                
                <h5>Par curiosité pour la technologie d'envoi de newsletters professionnelles ou par intérêt associatif... 
                    <br>Voici quelques-unes des newsletters créées à l'aide du site Sendinblue, et bien souvent aidé par l'utilisation de montages avec Photoshop.</h5>
                

                <button type="button" class="btn btn-primary btn-lg" onClick="location.href='mailto:cyril.cordier@gmail.com?subject=Contact depuis le site Portfolio'" style="margin-top:1rem">Contact</button>
                <a class="nav-link" href="https://1drv.ms/b/s!Aj3cHxC6MppjgpUq8G2O4qbAPOB47w" target="blank">
                <button type="button" class="btn btn-primary btn-lg"  style="margin-top:1rem">Consulter mon CV</button>
                </a>
                
            </div>
        </section>

        <!-- portfolio section -->
        <section class="portfolio">
            <h1>Portfolio Newsletters</h1>
            <p>Voici quelques newsletters réalisées en 2020. <br>
           
            </p>
            <div class="container">
                <div class="row">

                    <TCus />
                    <MondeSelect />
                    <Vinagora />
                    <VinagoraResults />
                    

                    



                    
                    <div class="col-md-12">
                            <div class="card">
                                <div class="card-head">
                                    
                                    
                                    <h2 style="margin-top:2rem">Mes technologies</h2>
                                </div>
                                <hr>
                                <div class="card-body">
                                    <img alt="logos technos" src="../images/newsletters/technos_newsletters.png" style="width:100%">
                                    
                                </div>
                            </div>
                            <br>
                    </div>

                    


                      

                    
                </div>
            </div>
        </section>
        
    </div>
</template>

<script lang="ts">
//import talk from './Contact.vue'
import MondeSelect from './newsletters/MondeSelect.vue'
import Vinagora from './newsletters/Vinagora.vue'
import VinagoraResults from './newsletters/VinagoraResults.vue'
import TCus from './newsletters/TCus.vue'

export default {
    name:'Newsletters',
    components:{
        //talk,
        MondeSelect,
        Vinagora,
        VinagoraResults,
        TCus
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