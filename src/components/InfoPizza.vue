<template>
  <v-card class="bg">
    <v-tabs vertical>
      <v-tab>
        <v-icon left>mdi-pizza</v-icon>Gigante
      </v-tab>
      <v-tab>
        <v-icon left>mdi-pizza</v-icon>Grande
      </v-tab>
      <v-tab>
        <v-icon left>mdi-pizza</v-icon>Média
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Pedaços: 24</p>
            <v-divider></v-divider>
            <p>Sabores: 4</p>
            <v-divider></v-divider>
            <p class="mb-0">R$: 70,00</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Pedaços: 12</p>
            <v-divider></v-divider>
            <p>Sabores: 3</p>
            <v-divider></v-divider>
            <p class="mb-0">R$: 50,00</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>Pedaços: 8</p>
            <v-divider></v-divider>
            <p>Sabores: 2</p>
            <v-divider></v-divider>
            <p class="mb-0">R$: 40,00</p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
</template>

<script>
export default {};
</script>
