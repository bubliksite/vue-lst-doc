<template>
  <div>
    <loader v-if="loader" />
    <div v-else>
      <Header />
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header'
  import Loader from '../components/Loader'
  export default {
    name: 'Tasks',
    components: {Loader, Header}
  }
</script>

<style scoped></style>
