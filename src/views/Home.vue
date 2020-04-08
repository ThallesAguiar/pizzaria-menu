<template>
  <div>
    <Aviso />
    <Carrossel />
    <InfoPizza/>
  </div>
</template>

<script>
import Aviso from "@/components/Aviso.vue";
import Carrossel from "@/components/Carrossel.vue";
import InfoPizza from "@/components/InfoPizza.vue";
export default {
  components: {
    Carrossel,
    InfoPizza,
    Aviso,
  }
};
</script>
