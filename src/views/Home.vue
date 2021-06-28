<template>
  <div>
    <loader v-if="loader" />
    <div v-else>
      <Header />
      <section class="container my-4">
        <h1 class="py-3 mb-3">
          Рабочий стол
        </h1>
        <div class="row mb-4">
          <Tasks />
          <Agents />
          <Contracts />
          <Objects />
          <Acceptances />
          <Endacts />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header/Header'
  import Loader from '../components/Loader'
  import Tasks from '../components/Home/Tasks'
  import Agents from '../components/Home/Agents'
  import Contracts from '../components/Home/Contracts'
  import Objects from '../components/Home/Objects'
  import Acceptances from '../components/Home/Acceptances'
  import Endacts from '../components/Home/Endacts'
  export default {
    name: 'Home',
    components: {
      Loader,
      Header,
      Tasks,
      Agents,
      Contracts,
      Objects,
      Acceptances,
      Endacts
    },
    data: () => ({
      loader: true
    }),
    mounted() {
      this.loader = false
    }
  }
</script>
