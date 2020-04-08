<template>
  <div align="center" class="mt-2">
    <v-alert v-model="alert" dismissible prominent type="warning" color="#F9A825" dark >
      <v-row align="center">
        <v-col class="grow">
          A Cia das Pizzas agora esta em novo endereço.
          <br />
          <strong>Rua Marechal Floriano, 2069, Centro, próximo ao CFC São Luiz.</strong>
        </v-col>
        <!-- <v-col class="shrink">
          <v-btn to="/comoChegar" color="#F9A825">Como chegar</v-btn>
        </v-col>-->
      </v-row>
    </v-alert>
  </div>
</template>

<script>
export default {
  data() {
    return {
      alert: true
    };
  }
};
</script>>

<style>
</style>