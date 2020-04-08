<template>
  <v-card class="mx-auto">
    <v-list>
      <v-list-group prepend-icon="mdi-pizza" value="true">
        <template v-slot:activator>
          <v-list-item-title>Pizzas</v-list-item-title>
        </template>

        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Salgadas<br> (molho de tomate mussarela e orégano)</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-group  color="#B71C1C" no-action sub-group v-for="(salgada, index) in salgadas" :key="index">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{salgada.nome}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item type="#B71C1C" link>
              <v-list-item-title>{{salgada.ingredientes}}</v-list-item-title>
            </v-list-item>
          </v-list-group>
        </v-list-group>
        <!-- End salgada -->

        <!-- Start doce -->
        <v-list-group no-action sub-group>
          <template v-slot:activator>
            <v-list-item-content>
              <v-list-item-title>Doces <br> (leite condensado e mussarela)</v-list-item-title>
            </v-list-item-content>
          </template>

          <v-list-group color="#B71C1C" no-action sub-group v-for="(doce, index) in doces" :key="index">
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>{{doce.nome}}</v-list-item-title>
              </v-list-item-content>
            </template>

            <v-list-item link>
              <v-list-item-title>{{doce.ingredientes}}</v-list-item-title>
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
    salgadas: [
      { nome: "Alcapone", ingredientes: "filé grelhado, 4 queijos" },
      { nome: "Alemã", ingredientes: "califórnia, frango" },
      { nome: "Alho e óleo", ingredientes: "alho e óleo e catupiry" },
      { nome: "Americana", ingredientes: "presunto, calabresa" },
      { nome: "Argentina", ingredientes: "calabresa e milho" },
      { nome: "Atum", ingredientes: "atum e orégano" },
      { nome: "Bacon", ingredientes: "bacon" },
      { nome: "Bagunça", ingredientes: "frango e bacon" },
      {
        nome: "Brasileira",
        ingredientes: "tomate picado, ervilha, calabresa, bacon e palmito"
      },
      { nome: "Brócolis", ingredientes: "brócolis e catupiry" },
      { nome: "Calabresa", ingredientes: "calabresa" },
      {
        nome: "Camarão (será cobrado R$10,00 a mais)",
        ingredientes: "camarão ao molho"
      },
      { nome: "Carioca", ingredientes: "presunto e quatro queijos" },
      {
        nome: "Caseira",
        ingredientes: "carne moída ao molho, ervilha, ovo cozido e pimentão"
      },
      { nome: "Champignon", ingredientes: "champignon" },
      { nome: "Colonial", ingredientes: "salame colonial e azeitona" },
      { nome: "Coração", ingredientes: "coração ao molho" },
      { nome: "Corn/bacon", ingredientes: "bacon e milho" },
      { nome: "Espanhola", ingredientes: "cebola, milho e bacon" },
      { nome: "Frango grelhado", ingredientes: "frango grelhado" },
      {
        nome: "Frango grelhado ao alho e óleo",
        ingredientes: "frango grelhado e alho e óleo"
      },
      {
        nome: "Frango grelhado acebolado",
        ingredientes: "frango grelhado e cebola"
      },
      { nome: "Frango", ingredientes: "frango temperado" },
      { nome: "Frango crocante", ingredientes: "frango, catupiry e palha" },
      { nome: "Filé grelhado", ingredientes: "filé grelhado" },
      {
        nome: "Filé grelhado ao alho e óleo",
        ingredientes: "filé grelhado e alho e óleo"
      },
      { nome: "Havaiana", ingredientes: "frango e palmito" },
      { nome: "Lombo", ingredientes: "lombinho" },
      { nome: "Lombo com abacaxi", ingredientes: "lombinho e abacaxi" },
      {
        nome: "Mexicana",
        ingredientes:
          "calabresa picada, cebola, pimentão, tomate e molho de pimenta"
      },
      {
        nome: "Moda da casa",
        ingredientes: "frango, calabresa e califórnia (sabores separados)"
      },
      { nome: "Marguerita", ingredientes: "tomate e manjericão" },
      { nome: "Mussarela", ingredientes: "mussarela e orégano" },
      { nome: "Milho", ingredientes: "milho com creme de leite" },
      {
        nome: "Mista",
        ingredientes: "calabresa, milho e bacon (sabores separados)"
      },
      { nome: "Napolitana", ingredientes: "tomate e azeitona" },
      {
        nome: "Nobre",
        ingredientes:
          "strogonoff de filé, strogonoff de frango e coração (sabores separados)"
      },
      { nome: "Palmito", ingredientes: "palmito e orégano" },
      { nome: "Palmito a bolonhesa", ingredientes: "palmito e carne moída" },
      { nome: "Paraguaia", ingredientes: "milho, ervilha e palmito" },
      { nome: "Paulista", ingredientes: "milho e palmito" },
      {
        nome: "Portuguesa",
        ingredientes: "presunto, cebola refogada, ervilha e ovos cozidos"
      },
      { nome: "Presunto e queijo", ingredientes: "presunto e queijo" },
      {
        nome: "Quatro queijo",
        ingredientes: "mussarela, parmessão, provolone e catupiry"
      },
      { nome: "Siciliana", ingredientes: "cebola refogada e calabresa" },
      { nome: "Strogonoff", ingredientes: "strogonoff e orégano" },
      {
        nome: "Strogonoff com palha",
        ingredientes: "strogonoff com batata palha"
      },
      {
        nome: "Strogonoff com frango",
        ingredientes: "strogonoff com frango com milho verde"
      },
      {
        nome: "Super pizza",
        ingredientes: "presunto, frango, 4 queijos e palmito"
      },
      {
        nome: "Vegetariana",
        ingredientes: "milho, tomate, brócolis e catupiry"
      },
      { nome: "Veneza", ingredientes: "rúcula, 4 queijos e brócolis" }
    ],
    doces: [
      { nome: "Banana", ingredientes: "banana e canela" },
      {
        nome: "Califórnia",
        ingredientes: "molho de tomate, figo, pêssego e abacaxi"
      },
      { nome: "Coco", ingredientes: "coco" },
      { nome: "Choco preto", ingredientes: "chocolate preto" },
      { nome: "Choco branco", ingredientes: "chocolate branco" },
      { nome: "Charge", ingredientes: "amendoim e chocolate preto" },
      { nome: "Marmore", ingredientes: "chocolate preto e branco" },
      { nome: "Prestigio", ingredientes: "coco e chocolate preto" },
      {
        nome: "Tropical",
        ingredientes: "molho de tomate, califórnia, presunto e cerejas"
      }
    ]
  })
};
</script>