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
                    Desenvolvedor Front-End
                </v-card-subtitle>
            </v-col>
        </v-app-bar>
        <v-row
            class="px-3 pt-5"
        >

            <v-col
                cols="3"
                
            >
                    <v-card
                        class="bg-basil rounded-xl"
                    >
                        <v-row>

                            <v-col
                                cols="3"
                                class="ma-0 pa-0"
                                justify="center" 
                                align="center"
                            >
                                <v-icon icon="mdi-email-open">
    
                                </v-icon>
    
                            </v-col>
                            <v-col
                                cols="9"
                                class="ma-0 pa-0"
                            >
                                <v-card-title>Email Address</v-card-title>
                                <v-card-text>gustavochiroli@hotmail.com</v-card-text>
                            </v-col>
                        </v-row>
                        

                    </v-card>
            </v-col>
            <v-col
                cols="9"
            >
                <v-card 
                    color="basil" 
                    height="100vh"
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
        
                    <v-window v-model="tab">
                        <v-window-item
                            v-for="item in items"
                            :key="item"
                            :value="item"
                        >
                            <v-card
                                color="basil"
                                flat
                            >
                                <v-card-text class="text-center">{{ text }}</v-card-text>
                            </v-card>
                        </v-window-item>
                    </v-window>
                </v-card>
            </v-col>
        </v-row>
        
        <!-- <v-banner
            justify-center
            avatar="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
            color="error"
            icon="mdi-vuetify"
            lines="three"
            text="..."
            stacked
            >
            <template v-slot:actions>
                <v-btn>Click me</v-btn>
            </template>
        </v-banner> -->
    </div>
</template>

<script>
import imageProfile from '../assets/fotogusta.jpeg'
import imageBackground from '../assets/mesa-programador2.jpg'
export default {
    data() {
        return {
            imageProfile,
            imageBackground,
            teste: "500" ,
            tab: 'About',
            items: [
                'About', 'Resume', 'Portfolio', 'Contact',
            ],
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        }
    }
}
</script>

<style scopped>
.bgcolor {
    background-color: #121212;
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

.fontsizemenu {
    font-size: 18px !important;
}

.bg-basil {
    background-color: #212121 !important;
    color:#B6B6B6 !important;
}
.text-basil {
    color: #feffff !important;
}

</style>