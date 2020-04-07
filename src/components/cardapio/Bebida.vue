<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-group prepend-icon="mdi-beer">
        <template v-slot:activator>
          <v-list-item-title>Bebidas</v-list-item-title>
        </template>

        <v-list-group color="#B71C1C" no-action sub-group v-for="(bebida, index) in bebidas" :key="index">
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>{{bebida.nome}}</v-list-item-title>
              <v-list-item-title>{{bebida.preco}}</v-list-item-title>
            </v-list-item-content>
          </template>
        </v-list-group>
        <!-- End salgada -->
      </v-list-group>
    </v-list>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    bebidas: [
      {
        nome: "Cerveja litro",
        preco: "R$12,00"
      },
      {
        nome: "Cerveja 600ml",
        preco: "R$10,00"
      },
      {
        nome: "Cerveja lata",
        preco: "R$6,00"
      },
      {
        nome: "Refri lata",
        preco: "R$4,00"
      },
      {
        nome: "Refri 600ml",
        preco: "R$5,00"
      },
      {
        nome: "Refri litro",
        preco: "R$6,00"
      },
      {
        nome: "Refri 2 litro (todos)",
        preco: "R$8,00"
      },
      {
        nome: "Martine",
        preco: "R$5,00"
      },
      {
        nome: "Whisk",
        preco: "R$6,00"
      },
      {
        nome: "Vodka",
        preco: "R$4,00"
      },
      {
        nome: "Vinho taça",
        preco: "R$8,00"
      }
    ]
  })
};
</script>