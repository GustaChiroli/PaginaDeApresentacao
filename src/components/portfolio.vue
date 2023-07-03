<template>
  <v-container>
    <v-row>
      <v-col v-for="(item, index) in portfolioItems" :key="index" cols="12" sm="6" md="6">
        <v-card 
            :style="{ 'max-width': item.imageWidth + 'px' }" 
            class="portfolio-card" 
            :href="item.githubLink" 
            target="_blank" 
            color="#444444"
        >
            <v-row no-gutters>
                <v-col cols="12">
                    <v-img 
                        :src="item.image" 
                        aspect-ratio="1/1" 
                        class="portfolio-image" 
                        @mouseover="zoomImage(index)" 
                        @mouseleave="resetImage(index)"
                    >
                    </v-img>
                </v-col>
            </v-row>
            <v-row justify-content="space-between">
                <v-card-text class="textcolor">{{ item.title }}</v-card-text>
                <v-card-text class="text-end text-red text-h6">{{ item.language }}</v-card-text>
            </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import imgprojetoapresentacao from '../assets/projetoapresentacao.png'
import imgprojetomercado from '../assets/projetomercado.png'
import imgnaoencontrada from '../assets/imgnaoencontrada.png'
import imgprojetoclonedogoogle from '../assets/projetoclonedogoogle.png'
import imgprojetocloneresultadosgoogle from '../assets/projetocloneresultadosgoogle.png'
export default {
data() {
    return {
    imgprojetoapresentacao,
    imgprojetomercado,
    imgnaoencontrada,
    imgprojetoclonedogoogle,
    imgprojetocloneresultadosgoogle,
    portfolioItems: [
        {
            title: 'Projeto Pagina de Apresentação',
            image: imgprojetoapresentacao,
            githubLink: 'https://github.com/GustaChiroli/PaginaDeApresentacao',
            language: 'Vue.js'
        },
        {
            title: 'Projeto Sistema Mercado',
            image: imgprojetomercado,
            githubLink: 'https://github.com/GustaChiroli/SistemaMercado',
            language: 'Vue.js'
        },
        {
            title: 'BMI Calculator',
            image: imgnaoencontrada,
            githubLink: 'https://github.com/GustaChiroli/flutterbmicalculator',
            language: 'Flutter/Dart'
        },
        {
            title: 'Destiny Chalenge',
            image: imgnaoencontrada,
            githubLink: 'https://github.com/GustaChiroli/destinichalenge',
            language: 'Flutter/Dart'
        },
        {
            title: 'Clone do Google',
            image: imgprojetoclonedogoogle,
            githubLink: 'https://github.com/GustaChiroli/clone_do_google',
            language: 'Html/Css'
        },
        {
            title: 'Clone das pesquisas do Google',
            image: imgprojetocloneresultadosgoogle,
            githubLink: 'https://github.com/GustaChiroli/Clone_dos_resultados_do_google',
            language: 'Html/Css'
        },
    ]
    };
},
methods: {
    zoomImage(index) {
    this.portfolioItems[index].hover = true;
    },
    resetImage(index) {
    this.portfolioItems[index].hover = false;
    }
}
};
</script>

<style>
.portfolio-card {
margin: 0px;
color: #444444;
}

.portfolio-image {
transition: transform 0.3s;
}

.portfolio-image:hover {
transform: scale(1.2);
}
.language-tag {
  position: absolute;
  top: 20px;
  left: 20px;
  color: rgb(223, 28, 28);
}

.textcolor {
  color: white;
}
</style>
