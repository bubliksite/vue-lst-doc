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
    name: 'Home',
    components: {Loader, Header},
    data: () => ({
      loader: true
    }),
    mounted() {
      this.loader = false
    }
  }
</script>
