<template>
    <div flex="1"
        class="bgcolor"
    >
        <v-app-bar
            justify="center"
            align-center
            :height="250"
            :image= imageBackground
            cover
            absolute="false"
        >
            <v-col
                cols="12"
                align="center"
            >
                <v-avatar
                    class="center-avatar"
                    alt="Profile Image"
                    :image= imageProfile
                    size="145"
                ></v-avatar>
                <v-card-title
                    class="colorfonttitle fontsizetitle"
                >
                    Gustavo da Silva Chiroli
                </v-card-title>
                <v-card-subtitle
                    class="colorfontsubtitle fontsizesubtitle"
                >
                    Front-End Web Developer
                </v-card-subtitle>
            </v-col>
        </v-app-bar>
        <v-app class="bgcolor">

            <v-row
                class="px-2 pt-5"
            >
    
                <v-col
                    cols="12"
                    xxl="3"
                    xl="3"
                    lg="3"
                    md="3"
                    sm="12"
                    xs="12"
                    class="pr-2 teste"
                >
                    <div class="fixheight fill-height">

                        <v-card
                            class="bg-basil rounded-xl pa-4 mb-7"
                        >
                            <a href="https://github.com/GustaChiroli/MyFilesDownload/files/11951019/curriculum.desenvolvedor.WEB.Gustavo.Chiroli.att.docx.pdf">
        
                                <v-row class="d-flex justify-space-around">
                                    <v-col
                                        cols="3"
                                        class="iconcenter d-flex ma-0 pa-0"
                                    >
                                        <v-icon icon="mdi-download-box-outline" size="x-large"/>
            
                                    </v-col>
                                    <v-col
                                        cols="9"
                                    >
                                        <v-card-title class="ma-0 pa-0">Download Curriculum</v-card-title>
                                    </v-col>
                                </v-row>
                            </a>
                        </v-card>
                        <v-card
                            class="bg-basil rounded-xl pa-3"
                        >
                            <v-row class="d-flex justify-space-around">
        
                                <v-col
                                    cols="3"
                                    class="iconcenter d-flex ma-0 pa-0"
                                >
                                    <v-icon icon="mdi-email-open" size="x-large"/>
        
                                </v-col>
                                <v-col
                                    cols="9"
                                >
                                    <v-card-title class="ma-0 pa-0">Email Address</v-card-title>
                                    <v-card-text class="ma-0 pa-0">gustavochiroli@hotmail.com</v-card-text>
                                </v-col>
                            </v-row>
                            <v-divider class="my-1"/>
                            <v-row class="d-flex justify-space-around">
        
                                <v-col
                                    cols="3"
                                    class="iconcenter d-flex ma-0 pa-0"
                                >
                                    <v-icon icon="mdi-translate-variant" size="x-large"/>
        
                                </v-col>
                                <v-col
                                    cols="9"
                                >
                                    <v-card-title class="ma-0 pa-0">Language</v-card-title>
                                    <v-card-text class="ma-0 pa-0">Portugues/Inglês</v-card-text>
                                </v-col>
                            </v-row>
                            <v-divider class="my-1"/>
                            <v-row class="d-flex justify-space-around">
        
                                <v-col
                                    cols="3"
                                    class="iconcenter d-flex ma-0 pa-0"
                                >
                                    <v-icon icon="mdi-map-marker" size="x-large"/>
        
                                </v-col>
                                <v-col
                                    cols="9"
                                >
                                    <v-card-title class="ma-0 pa-0">Location</v-card-title>
                                    <v-card-text class="ma-0 pa-0">Florianópolis, Brasil</v-card-text>
                                </v-col>
                            </v-row>
                            <v-divider class="my-1"/>
                            <v-row class="d-flex justify-space-around">
        
                                <v-col
                                    cols="3"
                                    class="iconcenter d-flex ma-0 pa-0"
                                >
                                    <v-icon icon="mdi-linkedin" size="x-large"/>
        
                                </v-col>
                                <v-col
                                    cols="9"
                                >
                                    <v-card-title class="ma-0 pa-0">Linkedin</v-card-title>
                                    <a 
                                        href="https://www.linkedin.com/in/gustavo-da-silva-chiroli-7788ba212/" target="_blank"
                                    >
                                        Check out my Linkedin
                                    </a>
                                </v-col>
                            </v-row>
                            <v-divider class="my-1"/>
                            <v-row class="d-flex justify-space-around">
        
                                <v-col
                                    cols="3"
                                    class="iconcenter d-flex ma-0 pa-0"
                                >
                                    <v-icon icon="mdi-github" size="x-large"/>
        
                                </v-col>
                                <v-col
                                    cols="9"
                                >
                                    <v-card-title class="ma-0 pa-0">GitHub</v-card-title>
                                    <a 
                                        href="https://github.com/GustaChiroli" 
                                        target="_blank"
                                    >
                                        Check out my GitHub
                                    </a>
                                </v-col>
                            </v-row>
                                                        
        
                        </v-card>
                    </div>
                </v-col>
                <v-col
                    cols="12"
                    xxl="9"
                    xl="9"
                    lg="9"
                    md="9"
                    sm="12"
                    xs="12"
                    class="pl-2 teste"
                >
                    <div class="fixheight">

                        <v-card 
                            color="basil" 
                            class="rounded-xl"
                        >
                            <v-tabs
                                v-model="tab"
                                bg-color="transparent"
                                color="basil"
                                grow
                            >
                                <v-tab
                                    v-for="item in items"
                                    :key="item"
                                    :value="item"
                                    class="colormenu fontsizemenu"
                                >
                                    {{ item }}
                                </v-tab>
                            </v-tabs>
                
                            <v-window 
                                v-model="tab"
                            >
                                <v-window-item
                                    v-for="item in items"
                                    :key="item"
                                    :value="item"
                                >
                                    <v-card
                                        color="basil"
                                        flat
                                        class="ml-5 mt-5 mb-5 mr-0 rounded-xl scrollable-card"
                                    >
                                        <v-scroll-y>
                                            <resume 
                                                v-if="item == 'Resume' ? true : false"
                                            />
                                            <aboutme
                                                v-if="item == 'About'? true : false"
                                            />
                                            <portfolio
                                                v-if="item == 'Portfolio'? true : false"
                                            />
                                            <contact
                                                v-if="item == 'Contact'? true : false"
                                            />
                                        </v-scroll-y>
                                    </v-card>
                                </v-window-item>
                            </v-window>
                        </v-card>
                    </div>
                </v-col>
            </v-row>
        </v-app>
    </div>
</template>

<script>
import imageProfile from '../assets/fotogusta.jpeg'
import imageBackground from '../assets/mesa-programador2.jpg'
import resume from '../components/Resume.vue'
import aboutme from '../components/Aboutme.vue'
import portfolio from '../components/portfolio.vue'
import contact from '../components/Contact.vue'

export default {
    components: {
        resume,
        aboutme,
        portfolio,
        contact,
    },
    data() {
        return {
            imageProfile,
            imageBackground,
            tab: 'About',
            items: [
                'About', 'Resume', 'Portfolio', 'Contact',
            ],
            text: "Hello! My name is Gustavo, and I am a programming enthusiast, primarily focused on web development using the Vue.js framework. Currently, I am in the penultimate semester of my degree in Analysis and Systems Development, and I'm excited to share a bit about myself and my passion for software development. Throughout my learning journey, I have had the opportunity to explore different languages and technologies. Vue.js has become my primary language, and I have been fascinated by its intuitive and efficient approach to building interactive web interfaces. In addition to Vue.js, I have acquired knowledge in other popular tools such as React, Flutter, JavaScript, and C#. During my internship, I had the chance to apply my skills to practical projects, working with Vue.js, Flutter, Dart, and JavaScript. These experiences provided me with a rich learning environment where I could enhance my problem-solving, teamwork, and communication skills. I am always striving for continuous improvement and expanding my knowledge in web development and related areas. I dedicate time to staying up-to-date with the latest trends and innovations in the technology world by participating in developer communities, reading articles, and working on personal projects. Apart from my passion for programming, I strongly believe in the power of collaboration. I think the best way to achieve exceptional results is through teamwork, sharing knowledge and ideas. I am proactive and always willing to assist my teammates, contributing my technical skills and adaptability. I am excited about the possibilities that programming offers and how we can positively impact people's lives through technology. If you are looking for a developer who is passionate about Vue.js while also having knowledge in other relevant technologies, I am ready to take on challenges and collaborate on exciting projects. I am looking forward to being part of an innovative team where we can create creative and inspiring solutions together. Let's build a bright technological future!",
        }
    }
}
</script>

<style scopped>
.fixheight {
    height:500px;
}
.scrollable-card {
    max-height: 400px;
    overflow-y: auto !important;
    scrollbar-width: thin;
    scrollbar-color: #808080 #121212;
}
.scrollable-card::-webkit-scrollbar {
    width: 8px;
}

.scrollable-card::-webkit-scrollbar-track {
    background-color: #121212;
}

.scrollable-card::-webkit-scrollbar-thumb {
    background-color: #808080;
    border-radius: 4px;
}

.bgcolor {
    background-color: #121212 !important;
}
.colorfonttitle {
    color:azure !important;
}
.fontsizetitle {
    font-size: 28px !important;
}

.colorfontsubtitle {
    color:white;
    
}
.fontsizesubtitle {
    font-size: 18px !important;
}

.colormenu {
    background-color: #1b1b1b !important;
}

.fontsizemenu {
    font-size: 16px !important;
}

.bg-basil {
    background-color: #212121 !important;
    color:#B6B6B6 !important;
}
.text-basil {
    color: #feffff !important;
}

.iconcenter {
    align-items: center !important;
    justify-content: center !important;
}
a {
    text-decoration: none;
    color:inherit;
}


</style>