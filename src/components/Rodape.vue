<template>
  <v-footer bottom padless width="100%" dark>
    <v-card class="flex" flat tile color="#B71C1C">

      <v-card-text class="py-2 red--text text-center">
        {{ new Date().getFullYear() }} —
        <strong>Cia das pizzas</strong>
        <br />
        <small>Desenvolvido por Thalles Aguiar</small>
      </v-card-text>
    </v-card>
  </v-footer>
</template>


<script>
export default {
  data: () => ({
    icons: ["mdi-facebook", "mdi-google-maps", "mdi-instagram"]
  })
};
</script>