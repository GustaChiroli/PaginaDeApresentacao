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
body {
  height: 100vh;

}
</style>
