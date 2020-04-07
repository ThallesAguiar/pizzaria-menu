<template>
  <div>
    <v-toolbar color="#F44336" :src="require('../assets/logo-cia.png')" flat>
      <template v-slot:img="{ props }">
        <v-img v-bind="props" gradient="to top right, rgba(19,84,122,.2), rgba(128,208,199,.4)"></v-img>
      </template>

      <template v-slot:extension></template>
    </v-toolbar>
    <v-tabs grow color="#B71C1C" dark>
      <v-tabs-slider color="#FFEE58"></v-tabs-slider>
      <v-tab color="#FFEE58" :to="item.route" v-for="item in items" :key="item.route"><strong>{{ item.name }}</strong></v-tab>
    </v-tabs>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: [
        { name: "Home", route: "home" },
        { name: "Cardárpio", route: "cardapio" },
        { name: "Como chegar", route: "comoChegar" }
      ]
    };
  }
};
</script>