<template>
  <div id="logo">
    <router-link :to="{name: 'Home'}">
      <img src="../assets/img/Logo-white.svg" alt="Logo" />
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'Logo'
  }
</script>

<style scoped></style>
