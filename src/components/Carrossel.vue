<template>
  <v-carousel :show-arrows="false">
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          src:
            "https://raw.githubusercontent.com/ThallesAguiar/Cia-das-pizzas/master/imagens/fundo1.jpg"
        },
        {
          src:
            "https://raw.githubusercontent.com/ThallesAguiar/Cia-das-pizzas/master/imagens/promocao.jpg"
        },
        {
          src:
            "https://img.stpu.com.br/?img=https://s3.amazonaws.com/pu-mgr/default/a0R0f000010xA7GEAU/5c489cd8e4b0842c9b1b6c10.jpg&w=710&h=462"
        }
      ]
    };
  }
};
</script>