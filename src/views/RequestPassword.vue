<template>
  <section>
    <Loader v-if="loader" />
    <div v-else>
      <div class="d-flex justify-content-center align-items-center h-100vh">
        <div class="card p-5" style="width:390px">
          <div class="d-flex justify-content-between align-items-center mb-5">
            <img src="@/assets/img/Logo.svg" />
            <h2
              class="gray-color-text text-capitalize"
              style="margin-bottom: 0;line-height:0.7"
            >
              Восстановить пароль
            </h2>
          </div>
          <form @submit.prevent="requestPassword">
            <div class="form-group">
              <input
                class="form-control"
                type="text"
                id="emailForRequest"
                name="emailForRequest"
                v-model="emailForRequest"
                placeholder="Email"
              />
            </div>
            <Alert
              v-if="validationErrors"
              :validationErrors="validationErrors"
            />
            <button
              class="btn btn-primary btn-block d-flex justify-content-center align-items-center position-relative"
              type="submit"
              :disabled="isSubmitting"
            >
              Запросить пароль<img
                v-if="isSubmitting"
                class="mr-2 small-loader position-absolute"
                src="@/assets/img/spinner.svg"
                style="right:0"
              />
            </button>
          </form>
          <p class="text-center small text-muted mb-0 mt-3">
            <router-link
              :to="{name: 'Login'}"
              class="text-muted"
              @click.prevent="loginToggle"
            >
              На страницу входа
            </router-link>
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {actionTypes} from '@/store/modules/auth'
  import Loader from '@/components/Loader'
  import Alert from '../components/Alert'

  export default {
    name: 'RequestPassword',
    components: {Alert, Loader},
    data: () => ({
      emailForRequest: '',
      loader: true
    }),
    computed: {
      ...mapState({
        isSubmitting: state => state.auth.isSubmitting,
        validationErrors: state => state.auth.validationErrors
      })
    },
    mounted() {
      this.loader = false
    },
    methods: {
      requestPassword() {
        this.$store
          .dispatch(actionTypes.requestPassword, {
            email: this.emailForRequest
          })
          .then(response => {
            this.$store.dispatch(actionTypes.sendNewPassword, {
              email: this.emailForRequest,
              link: window.location.hostname + '/password/' + response.token
            })
          })
      }
    }
  }
</script>

<style scoped></style>
