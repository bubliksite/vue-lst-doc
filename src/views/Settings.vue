<template>
  <div>
    <loader v-if="loader" />
    <div v-else>
      <Header />
      <section class="container my-4">
        <div
          class="title d-flex justify-content-between align-items-center px-2"
        >
          <h1 class="py-3 my-2">
            Управление пользователями
          </h1>
          <router-link :to="{name: 'AddUser'}" class="btn btn-primary"
            >+ Добавить нового</router-link
          >
        </div>
        <div class="row mb-4">
          <div class="col-12">
            <div class="card px-3 py-3">
              <div class="row">
                <div class="col-lg-4 col-md-6 col-12"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import Header from '../components/Header'
  import Loader from '../components/Loader'
  import {actionTypes} from '../store/modules/profiles/getAllUsers'

  export default {
    name: 'Settings',
    components: {Loader, Header},
    data: () => ({
      loader: true
    }),
    computed: {
      ...mapState({
        users: state => state.getAllUsers.users,
        errors: state => state.getAllUsers.users
      })
    },
    mounted() {
      this.$store.dispatch(actionTypes.getAllUsers)
      this.loader = false
    }
  }
</script>

<style scoped></style>
