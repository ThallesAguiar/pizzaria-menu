<template>
  <v-card>
    <v-toolbar color="#FBC02D" dark flat>
      <!-- <v-text-field class="mx-4" flat hide-details label="Procurar" solo-inverted></v-text-field> -->

      <template>
        <v-tabs v-model="tabs" centered grow>
          <v-tab
            :to="cardapio.rota"
            v-for="(cardapio, index) in cardapios"
            :key="index"
          >{{ cardapio.nome }}</v-tab>
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
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      cardapios: [
        { nome: "pizza", rota: "pizza" },
        { nome: "lanche", rota: "lanche" },
        { nome: "bebida", rota: "bebida" }
      ]
    };
  }
};
</script>