<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-group prepend-icon="mdi-food" value="true">
        <template v-slot:activator>
          <v-list-item-title>Lanches</v-list-item-title>
        </template>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Xis</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-group color="#B71C1C" no-action sub-group v-for="(x, index) in xis" :key="index">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{x.nome}}</v-list-item-title>
                <v-list-item-title>{{x.preco}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link>
              <v-list-item-title>{{x.ingredientes}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <!-- End salgada -->

        <!-- Start doce -->
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Picados</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-group  color="#B71C1C" no-action sub-group v-for="(picado, index) in picados" :key="index">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{picado.nome}}</v-list-item-title>
                <v-list-item-title>{{picado.preco}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link>
              <v-list-item-title>{{picado.ingredientes}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
      </v-list-group>
    </v-list>
  </v-card>
</template>


<script>
export default {
  data: () => ({
    xis: [
      {
        nome: "Bagunça",
        ingredientes: "salada, molho, bacon, frango, corção e queijo",
        preco: "R$18,00"
      },
      {
        nome: "Frango",
        ingredientes: "frango, molho, salada e ovo",
        preco: "R$15,00"
      },
      {
        nome: "Carne",
        ingredientes: "bife, ovo, molho e salada",
        preco: "R$13,00"
      },
      {
        nome: "Baccon",
        ingredientes: "bacon, ovo, molho e salada",
        preco: "R$16,00"
      },
      {
        nome: "Calabresa",
        ingredientes: "calabresa, ovo, molho e salada",
        preco: "R$16,00"
      },
      {
        nome: "Califórnia",
        ingredientes: "bife, presunto, queijo, frutas ao molho",
        preco: "R$16,00"
      },
      {
        nome: "Tropical",
        ingredientes: "frango desfiado, presunto, queijo, frutas e molho",
        preco: "R$16,00"
      },
      {
        nome: "Especial",
        ingredientes: "bife, frango, ovo, presunto, queijo, salada e molho",
        preco: "R$18,00"
      },
      {
        nome: "Strogonoff de filé",
        ingredientes: "filé, ovo, salada, quijo e mostarda",
        preco: "R$18,00"
      },
      {
        nome: "Strogonoff de frango",
        ingredientes: "frango, ovo, salada e queijo",
        preco: "R$18,00"
      },
      {
        nome: "Super",
        ingredientes: "bacon, calabresa, frango, bife, ovo e salada",
        preco: "R$18,00"
      },
      {
        nome: "Lombinho",
        ingredientes: "lombinho, ovo, molho e salada",
        preco: "R$18,00"
      },
      {
        nome: "Coração",
        ingredientes: "coração de frango, ovo, molho e salada",
        preco: "R$18,00"
      },
      {
        nome: "Palmito",
        ingredientes: "bife, ovo, queijo, molho e salada",
        preco: "R$16,00"
      },
      {
        nome: "Português",
        ingredientes: "bife, ovo, presunto, queijo, salada, molho e cebola",
        preco: "R$16,00"
      },
      {
        nome: "5 estrelas",
        ingredientes:
          "bacon, calabresa, frango, bife, coração, ovo, salada e molho",
        preco: "R$20,00"
      },
      {
        nome: "Prensado",
        ingredientes: "presunto, queijo, salada e molho",
        preco: "R$12,00"
      },
      {
        nome: "cachorrão",
        ingredientes: "salsicha, molho vermelho, molho e salada",
        preco: "R$12,00"
      }
    ],
    picados: [
      {
        nome: "Super picadinho",
        ingredientes: "pepino, presunto, queijo, azeitona, calabresa",
        preco: "R$23,00"
      },
      {
        nome: "Picadinho",
        ingredientes: "pepino, presunto, queijo",
        preco: "R$13,00"
      },
      {
        nome: "Combo",
        ingredientes: "pepino, presunto, queijo, azeitona, calabresa, fritas",
        preco: "R$35,00"
      },
      { nome: "Fritas", ingredientes: "porção de 200gr", preco: "R$15,00" }
    ]
  })
};
</script>