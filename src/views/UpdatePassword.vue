<template>
  <section>
    <section>
      <Loader v-if="loader" />
      <div v-else>
        <div class="d-flex justify-content-center align-items-center h-100vh">
          <div
            v-if="validationErrors"
            class="card p-5"
            style="width:390px"
            :class="validationErrors.type"
          >
            {{ validationErrors.message }}
            <br />
            <p class="mb-0 mt-3">
              <router-link
                class="small"
                :to="{name: 'RequestPassword'}"
                v-if="validationErrors.type === 'invalid'"
              >
                Запросить повторно
              </router-link>
              <router-link
                class="small"
                :to="{name: 'Login'}"
                v-if="validationErrors.type === 'valid'"
              >
                На страницу входа
              </router-link>
            </p>
          </div>
          <div class="card p-5" style="width:390px" v-else>
            <div class="d-flex justify-content-between align-items-center mb-5">
              <img src="@/assets/img/Logo.svg" />
              <h2
                class="gray-color-text text-capitalize"
                style="margin-bottom: 0;line-height:0.7"
              >
                Обновить пароль
              </h2>
            </div>
            <form @submit.prevent="updatePassword">
              <div class="form-group">
                <input
                  class="form-control"
                  type="text"
                  id="email_placeholder"
                  name="email_placeholder"
                  :value="currentUser.email"
                  disabled
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  :class="message.class"
                  type="password"
                  id="password"
                  name="password"
                  v-model="password"
                  placeholder="Новый пароль"
                />
              </div>
              <div class="form-group">
                <input
                  class="form-control"
                  :class="message.class"
                  type="password"
                  id="passwordCheck"
                  name="passwordCheck"
                  v-model="passwordCheck"
                  placeholder="Повторить пароль"
                />
              </div>
              <Alert v-if="message.type" :validationErrors="message" />
              <button
                class="btn btn-primary btn-block d-flex justify-content-center align-items-center position-relative"
                type="submit"
                :disabled="isSubmitting"
              >
                Обновить пароль<img
                  v-if="isSubmitting"
                  class="mr-2 small-loader position-absolute"
                  src="@/assets/img/spinner.svg"
                  style="right:0"
                />
              </button>
            </form>
            <p class="text-center small text-muted mb-0 mt-3">
              <router-link :to="{name: 'Login'}" class="text-muted">
                На страницу входа
              </router-link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {actionTypes} from '@/store/modules/auth'
  import Loader from '@/components/Loader'
  import Alert from '../components/Alert'

  export default {
    name: 'UpdatePassword',
    components: {Alert, Loader},
    data: () => ({
      password: '',
      passwordCheck: '',
      loader: true,
      message: {}
    }),
    computed: {
      ...mapState({
        isSubmitting: state => state.auth.isSubmitting,
        validationErrors: state => state.auth.validationErrors,
        currentUser: state => state.auth.currentUser
      })
    },
    mounted() {
      this.getUpdatedEmail()
      this.loader = false
    },
    methods: {
      updatePassword() {
        if (this.password.length < 1) {
          this.message = {
            type: 'invalid',
            message: 'Пароль не может быть пустым',
            class: 'is-invalid'
          }
        } else if (this.password.length < 6) {
          this.message = {
            type: 'invalid',
            message: 'Длина пароля должна быть не менее 6 символов',
            class: 'is-invalid'
          }
        } else if (this.password != this.passwordCheck) {
          this.message = {
            type: 'invalid',
            message: 'Пароли не совпадают',
            class: 'is-invalid'
          }
        } else {
          this.$store.dispatch(actionTypes.updatePassword, {
            token: this.$route.params.token,
            email: this.currentUser.email,
            password: this.password
          })
        }
      },
      getUpdatedEmail() {
        this.$store.dispatch(actionTypes.getUpdatedEmail, {
          token: this.$route.params.token
        })
      }
    }
  }
</script>

<style scoped></style>
