<template>
  <loader v-if="loader" />
  <div v-else>
    <Header />
    <section class="container my-4">
      <div class="title d-flex justify-content-between align-items-center px-2">
        <h1 class="py-3 my-2">
          Добавить нового пользователя
        </h1>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <div class="card px-3 py-4">
            <div class="row">
              <div class="col-md-8 col-12">
                <form @submit.prevent="" class="row px-3">
                  <div class="col-12 col-md-6">
                    <div
                      class="form-group d-flex align-items-center font-weight-bold mb-5"
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="fullName"
                        >Имя</label
                      >
                      <input
                        class="form-control"
                        type="text"
                        id="fullName"
                        name="fullName"
                        v-model="fullName"
                        placeholder="Имя Фамилия"
                      />
                      <div class="icon-clear-input" @click="fullName = ''">
                        <img src="@/assets/img/icon-clear-input.svg" alt="" />
                      </div>
                    </div>
                    <div
                      class="form-group d-flex align-items-center font-weight-bold mb-5"
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="email"
                        >Email</label
                      >
                      <input
                        class="form-control"
                        type="email"
                        id="email"
                        name="email"
                        v-model="email"
                        placeholder="Email"
                      />
                      <div class="icon-clear-input" @click="email = ''">
                        <img src="@/assets/img/icon-clear-input.svg" alt="" />
                      </div>
                    </div>
                    <div
                      class="form-group d-flex align-items-center font-weight-bold mb-5"
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="password"
                        >Пароль</label
                      >
                      <input
                        class="form-control"
                        type="password"
                        id="password"
                        name="password"
                        v-model="password"
                        placeholder="Пароль"
                      />
                      <div class="icon-clear-input" @click="password = ''">
                        <img src="@/assets/img/icon-clear-input.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div
                      class="form-group d-flex align-items-center font-weight-bold mb-5"
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="role">
                        Права
                      </label>
                      <select
                        class="form-control"
                        id="role"
                        name="role"
                        v-model="role"
                      >
                        <option
                          v-for="role in roles"
                          :value="role.id"
                          :key="role.id"
                        >
                          {{ role.value }}
                        </option>
                      </select>
                    </div>
                    <div
                      class="form-group d-flex align-items-center font-weight-bold mb-5"
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="object">
                        Объект
                      </label>
                      <select
                        class="form-control"
                        id="object"
                        name="object"
                        v-model="object"
                      >
                        <option
                          v-for="object in objects"
                          :value="object.id"
                          :key="object.id"
                        >
                          {{ object.title }}
                        </option>
                      </select>
                    </div>
                    <div
                      class="form-group d-flex align-items-center justify-content-between font-weight-bold mb-5"
                    >
                      <button
                        class="btn btn-success mr-3 w-50 d-flex align-items-center justify-content-center position-relative"
                        @click.prevent="registration"
                      >
                        <img
                          class="mr-2"
                          src="@/assets/img/icon-done.svg"
                          alt=""
                        />
                        Принять
                        <img
                          v-if="isSubmitting"
                          class="mr-2 small-loader position-absolute"
                          src="@/assets/img/spinner.svg"
                          style="right:0"
                        />
                      </button>
                      <button
                        class="btn btn-danger w-50 d-flex align-items-center justify-content-center"
                        @click.prevent="clearForm"
                      >
                        <img
                          class="mr-2"
                          src="@/assets/img/icon-cancell.svg"
                          alt=""
                        />
                        Отменить
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-12 col-md-4">
                <Alert
                  v-if="validationErrors"
                  :validationErrors="validationErrors"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Header from '@/components/Header'
  import Loader from '@/components/Loader'
  import Alert from '@/components/Alert'
  import {actionTypes as rolesActionTypes} from '../store/modules/profiles/getRoles'
  import {actionTypes as objectsActionTypes} from '../store/modules/objects/getObjects'
  import {actionTypes as authActionTypes} from '../store/modules/auth'

  export default {
    name: 'AddUSer',
    components: {Alert, Loader, Header},
    data: () => ({
      loader: true,
      fullName: '',
      email: '',
      password: '',
      role: '',
      object: ''
    }),
    computed: {
      ...mapState({
        roles: state => state.getRoles.roles,
        objects: state => state.getObjects.objects,
        validationErrors: state => state.auth.validationErrors,
        isSubmitting: state => state.auth.isSubmitting
      }),
      firstName() {
        return this.fullName
          .toString()
          .slice(0, this.fullName.toString().indexOf(' '))
      },
      lastName() {
        return this.fullName
          .toString()
          .slice(this.fullName.toString().indexOf(' ') + 1)
      }
    },
    mounted() {
      this.$store.dispatch(rolesActionTypes.getRoles)
      this.$store.dispatch(objectsActionTypes.getObjects)
      this.loader = false
    },
    methods: {
      clearForm() {
        this.fullName = ''
        this.email = ''
        this.password = ''
        this.role = ''
        this.object = ''
        this.$router.push({name: 'Settings'})
      },
      registration() {
        this.$store.dispatch(authActionTypes.registration, {
          email: this.email,
          password: this.password,
          firstname: this.firstName,
          lastname: this.lastName,
          id_role: this.role,
          id_object: this.object
        })
      }
    }
  }
</script>

<style scoped></style>
