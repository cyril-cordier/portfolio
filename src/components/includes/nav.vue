<template>
    <div class="">
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary fix-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <a class="navbar-brand" href="/"><img alt="Logo_CC" src="../../images/logo_CC_carre.png" height="35rem"></a>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                <li class="nav-item active">
                    <a class="nav-link" href="https://1drv.ms/b/s!Aj3cHxC6MppjgpUq8G2O4qbAPOB47w" target="blank">Télécharger mon CV <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.linkedin.com/in/cyril-cordier-a32451b3/" target="blank">Linkedin</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/cyril-cordier/" target="blank">Github</a>
                </li>
                <li class="nav-item">
                    <router-link to="/newsletters" class="nav-link">Newsletters</router-link>
                </li>
                <li class="nav-item">
                    <router-link to="/" class="nav-link">Portfolio</router-link>
                </li>
                
                </ul>
            </div>
        </nav>
    </div>
</template>

<style scoped>
    .fix-top{
        margin-top: -63px; 
    }
</style>

