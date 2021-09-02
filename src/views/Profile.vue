<template>
  <div>
    <loader v-if="loader" />
    <div v-else>
      <Header />
      <section class="container my-4">
        <div
          class="title d-flex justify-content-between align-items-center px-2"
        >
          <h1 class="py-3 my-2">Профиль пользователя</h1>
          <router-link :to="{name: 'AddUser'}" class="btn btn-primary"
            ><b-icon
              icon="pencil-square"
              class="mr-2"
              font-scale="1.5"
            ></b-icon>
            Изменить профиль</router-link
          >
        </div>
        <div class="row mb-4">
          <div class="col-12">
            <div class="card px-3 py-3">
              <h3 class="text-uppercase font-weight-bold mb-0"></h3>
              <p class="light-gray-text mb-1"></p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from '../components/Header/Header'
  import Loader from '../components/Loader'
  import {actionTypes} from '../store/modules/profiles/getUser'

  export default {
    name: 'Profile',
    components: {Loader, Header},
    data: () => ({
      loader: true
    }),
    computed: {
      ...mapState({
        isSubmitting: (state) => state.getUser.isSubmitting,
        user: (state) => state.getUser.user,
        errors: (state) => state.getUser.errors
      })
    },
    mounted() {
      this.$store.dispatch(actionTypes.getUser, {
        id: this.$route.params.id
      })
      this.loader = false
    }
  }
</script>

<style scoped></style>
