<template>
  <v-app>
    <v-main class="justify-center">
      <!-- <nav class="my-3 d-flex justify-space-around">
        |<router-link :to="{ name: 'home' }">Home</router-link> |
      </nav> -->
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: 'https://gustachiroli.github.io/portfolio/'
    }
  },
  computed: {
    // oculta o nav quando for pagina de login
    haveNoNav() {
      if (this.$router.name !== 'login')
      {
        return false;
      }
      else{
        return true;
      }
    }
  }
}
</script>

<style scopped>
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background-color: #121212;
}

::-webkit-scrollbar-thumb {
  background-color: #808080;
  border-radius: 4px;
}
</style>
