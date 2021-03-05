<template>
  <section>
    <section>
      <Loader v-if="loader" />
      <div v-else>
        <div class="d-flex justify-content-center align-items-center h-100vh">
          <div
            class="card p-5"
            style="width:390px"
            :class="validationErrors.type"
          >
            <div v-if="validationErrors">
              <strong>Ошибка!</strong>
              {{ validationErrors.message }}
              <br />
              <p class="mb-0 mt-3">
                <router-link class="small" :to="{name: 'RequestPassword'}">
                  Запросить повторно
                </router-link>
              </p>
            </div>
            <div v-else>
              <div
                class="d-flex justify-content-between align-items-center mb-5"
              >
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
                    type="password"
                    id="passwordCheck"
                    name="passwordCheck"
                    v-model="passwordCheck"
                    placeholder="Повторить пароль"
                  />
                </div>
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
      </div>
    </section>
  </section>
</template>

<script>
  import {mapState} from 'vuex'
  import {actionTypes} from '@/store/modules/auth'
  import Loader from '@/components/Loader'

  export default {
    name: 'UpdatePassword',
    components: {Loader},
    data: () => ({
      password: '',
      passwordCheck: '',
      loader: true
    }),
    computed: {
      ...mapState({
        isSubmitting: state => state.auth.isSubmitting,
        validationErrors: state => state.auth.validationErrors,
        message: state => state.auth.message
      })
    },
    mounted() {
      this.loader = false
      this.getUpdatedEmail()
    },
    methods: {
      updatePassword() {
        this.$store.dispatch(actionTypes.updatePassword, {
          password: this.password
        })
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
