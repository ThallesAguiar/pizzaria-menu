<template>
  <v-card>
    <v-toolbar color="#F9A825" flat>
      <!-- <v-text-field class="mx-4" flat hide-details label="Procurar" solo-inverted></v-text-field> -->

      <template>
        <v-tabs v-model="tabs" centered grow>
          <v-tabs-slider color="#B71C1C"></v-tabs-slider>
          <v-tab
            :to="cardapio.rota"
            v-for="(cardapio, index) in cardapios"
            :key="index"
          ><strong>{{ cardapio.nome }}</strong></v-tab>
        </v-tabs>
      </template>
    </v-toolbar>
    <router-view />
  </v-card>
</template>


<script>
export default {
  data() {
    return {
      procurar: "",
      tabs: null,
      cardapios: [
        { nome: "pizza", rota: "pizza" },
        { nome: "lanche", rota: "lanche" },
        { nome: "bebida", rota: "bebida" }
      ]
    };
  }
};
</script>