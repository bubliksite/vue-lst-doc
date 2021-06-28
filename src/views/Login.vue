<template>
  <section>
    <Loader v-if="loader" />
    <div v-else>
      <div class="d-flex justify-content-center align-items-center h-100vh">
        <div class="card p-5" style="width: 390px">
          <div class="d-flex justify-content-between align-items-center mb-5">
            <img src="../assets/img/Logo.svg" alt="Logo" />
            <h2
              class="gray-color-text text-capitalize"
              style="margin-bottom: 0; line-height: 0.7"
            >
              Вход
            </h2>
          </div>

          <form @submit.prevent="login">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                id="email"
                name="email"
                v-model="email"
                placeholder="Email"
              />
            </div>

            <div class="form-group">
              <input
                v-model.trim="password"
                class="form-control"
                type="password"
                id="password"
                name="password"
                placeholder="Пароль"
              />
            </div>
            <Alert
              v-if="validationErrors"
              :validationErrors="validationErrors"
            />
            <button
              class="
                btn btn-primary btn-block
                d-flex
                justify-content-center
                align-items-center
                position-relative
              "
              type="submit"
              :disabled="isSubmitting"
            >
              Войти<img
                v-if="isSubmitting"
                class="mr-2 small-loader position-absolute"
                src="@/assets/img/spinner.svg"
                style="right: 0"
              />
            </button>
          </form>
          <p class="text-center small text-muted mb-0 mt-3">
            <router-link :to="{name: 'RequestPassword'}" class="text-muted">
              Забыли пароль
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {actionTypes} from '../store/modules/auth'
  import Loader from '../components/Loader'
  import Alert from '../components/Alert'

  export default {
    name: 'Login',
    components: {Alert, Loader},
    data() {
      return {
        email: '',
        password: '',
        loader: true
      }
    },
    computed: {
      ...mapState({
        isSubmitting: (state) => state.auth.isSubmitting,
        validationErrors: (state) => state.auth.validationErrors
      })
    },
    mounted() {
      this.$store.dispatch(actionTypes.clearValidationError)
      this.loader = false
    },
    methods: {
      login() {
        this.$store
          .dispatch(actionTypes.login, {
            password: this.password,
            email: this.email
          })
          .then(() => {
            this.$router.push({name: 'Home'})
          })
      }
    }
  }
</script>

<style scoped></style>
