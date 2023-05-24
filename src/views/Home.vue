<template>
    <div flex="1">
        <v-app-bar
            justify="center"
            align-center
            :height="250"
            :image= imageBackground
            cover
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
                    class="colorfonttitle"
                >
                    Gustavo da Silva Chiroli
                </v-card-title>
                <v-card-subtitle
                    class="colorfontsubtitle"
                >
                    Desenvolvedor Front-End
                </v-card-subtitle>
            </v-col>
        </v-app-bar>
        
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
        }
    }
}
</script>

<style scopped>
.colorfonttitle {
  color:azure !important;
  font-size: 28px !important;

}

.colorfontsubtitle {
    color:azure;
    font-size: 18px !important;
}
</style>