<template>
  <div>
    <h1>Não encontrado</h1>
    <p>
      Oops  esta página não existe. Tente 
      <v-btn color="teal" @click="goBack">voltar</v-btn>
      <!-- <router-link :to="{ name: 'Dashboard' }">Dashboard</router-link> -->
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.go-back {
  display: flex;
  cursor: pointer;
}
button {
  border: 0;
}
</style>