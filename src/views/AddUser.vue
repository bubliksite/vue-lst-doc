<template>
  <loader v-if="loader" />
  <div v-else>
    <Header />
    <section class="container my-4">
      <div class="title d-flex justify-content-between align-items-center px-2">
        <h1 class="py-3 my-2">Добавить нового пользователя</h1>
      </div>
      <div class="row mb-4">
        <div class="col-12">
          <div class="card px-3 py-4">
            <div class="row">
              <div class="col-md-8 col-12 order-2 order-md-1">
                <form @submit.prevent="" class="row px-3">
                  <div class="col-12 col-md-6">
                    <div
                      class="
                        form-group
                        d-flex
                        align-items-center
                        font-weight-bold
                        mb-5
                      "
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="fullName"
                        >Имя</label
                      >
                      <input
                        :class="errorsFields.fullName"
                        class="form-control"
                        type="text"
                        id="fullName"
                        name="fullName"
                        v-model="fullName"
                        placeholder="Имя Фамилия"
                      />
                      <div class="icon-clear-input" @click="fullName = ''">
                        <img src="../assets/img/icon-clear-input.svg" alt="" />
                      </div>
                    </div>
                    <div
                      class="
                        form-group
                        d-flex
                        align-items-center
                        font-weight-bold
                        mb-5
                      "
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="email"
                        >Email</label
                      >
                      <input
                        :class="errorsFields.email"
                        class="form-control"
                        type="email"
                        id="email"
                        name="email"
                        v-model="email"
                        placeholder="Email"
                      />
                      <div class="icon-clear-input" @click="email = ''">
                        <img src="../assets/img/icon-clear-input.svg" alt="" />
                      </div>
                    </div>
                    <div
                      class="
                        form-group
                        d-flex
                        align-items-center
                        font-weight-bold
                        mb-5
                      "
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="password"
                        >Пароль</label
                      >
                      <input
                        :class="errorsFields.password"
                        class="form-control"
                        type="password"
                        id="password"
                        name="password"
                        v-model="password"
                        placeholder="Пароль"
                      />
                      <div class="icon-clear-input" @click="password = ''">
                        <img src="../assets/img/icon-clear-input.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div
                      class="
                        form-group
                        d-flex
                        align-items-center
                        font-weight-bold
                        mb-5
                      "
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="role">
                        Права
                      </label>
                      <select
                        :class="errorsFields.role"
                        class="form-control"
                        id="role"
                        name="role"
                        v-model="role"
                      >
                        <option value="" selected disabled>Выберите...</option>
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
                      class="
                        form-group
                        d-flex
                        align-items-center
                        font-weight-bold
                        mb-5
                      "
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="object">
                        Объект
                      </label>
                      <select
                        :class="errorsFields.object"
                        class="form-control"
                        id="object"
                        name="object"
                        v-model="object"
                      >
                        <option value="" selected disabled>Выберите...</option>
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
                      class="
                        form-group
                        d-flex
                        align-items-center
                        font-weight-bold
                        mb-5
                      "
                    >
                      <label class="mb-0 mr-3 text-uppercase" for="position"
                        >Должность</label
                      >
                      <input
                        :class="errorsFields.position"
                        class="form-control"
                        type="text"
                        id="position"
                        name="position"
                        v-model="position"
                        placeholder="Должность"
                      />
                      <div class="icon-clear-input" @click="position = ''">
                        <img src="../assets/img/icon-clear-input.svg" alt="" />
                      </div>
                    </div>
                  </div>
                  <div class="col-12 col-md-6">
                    <div
                      class="
                        form-group
                        d-flex
                        align-items-center
                        justify-content-between
                        font-weight-bold
                        mb-5
                      "
                    >
                      <button
                        class="
                          btn btn-success
                          mr-3
                          w-50
                          d-flex
                          align-items-center
                          justify-content-center
                          position-relative
                        "
                        @click.prevent="registration"
                      >
                        <img
                          class="mr-2"
                          src="../assets/img/icon-done.svg"
                          alt=""
                        />
                        Создать
                        <img
                          v-if="isSubmitting"
                          class="mr-2 small-loader position-absolute"
                          src="../assets/img/spinner.svg"
                          style="right: 0"
                        />
                      </button>
                      <button
                        class="
                          btn btn-danger
                          w-50
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                        @click.prevent="clearForm"
                      >
                        <img
                          class="mr-2"
                          src="../assets/img/icon-cancell.svg"
                          alt=""
                        />
                        Назад
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-12 col-md-4 order-1 order-md-2">
                <Alert
                  v-for="(error, index) in errors"
                  :key="index"
                  :validationErrors="error"
                />
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
  import Header from '../components/Header/Header'
  import Loader from '../components/Loader'
  import Alert from '../components/Alert'
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
      object: '',
      position: '',
      errors: [],
      errorsFields: {}
    }),
    computed: {
      ...mapState({
        roles: (state) => state.getRoles.roles,
        objects: (state) => state.getObjects.objects,
        validationErrors: (state) => state.auth.validationErrors,
        isSubmitting: (state) => state.auth.isSubmitting
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
      this.$store.dispatch(authActionTypes.clearValidationError)
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
        this.position = ''
        this.$router.push({name: 'Settings'})
      },
      validationForm() {
        this.errorsFields = {}
        this.errors = []
        this.validationFullName()
        this.validationEmail()
        this.validationPassword()
        this.validationPosition()
        this.validationRole()
        this.validationObject()
      },
      validationFullName() {
        if (this.fullName === '' || this.fullName.indexOf(' ') === -1) {
          this.errors.push({
            type: 'invalid',
            message: 'Введите имя и фамилию через пробел'
          })
          this.errorsFields.fullName = 'invalid'
        } else {
          this.errorsFields.fullName = 'valid'
        }
      },
      validationEmail() {
        if (
          this.email === '' ||
          this.email.indexOf('@') === -1 ||
          this.email.indexOf('.') === -1
        ) {
          this.errors.push({
            type: 'invalid',
            message: 'Введите корректный email'
          })
          this.errorsFields.email = 'invalid'
        } else {
          this.errorsFields.email = 'valid'
        }
      },
      validationPassword() {
        if (this.password === '' || this.password.length < 6) {
          this.errors.push({
            type: 'invalid',
            message: 'Введите пароль не менее 6 символов'
          })
          this.errorsFields.password = 'invalid'
        } else {
          this.errorsFields.password = 'valid'
        }
      },
      validationRole() {
        if (this.role === '') {
          this.errors.push({
            type: 'invalid',
            message: 'Выберите права сотрудника'
          })
          this.errorsFields.role = 'invalid'
        } else {
          this.errorsFields.role = 'valid'
        }
      },
      validationObject() {
        if (this.object === '') {
          this.errors.push({
            type: 'invalid',
            message: 'Выберите права сотрудника'
          })
          this.errorsFields.object = 'invalid'
        } else {
          this.errorsFields.object = 'valid'
        }
      },
      validationPosition() {
        if (this.position === '') {
          this.errors.push({
            type: 'invalid',
            message: 'Введите должность сотрудника'
          })
          this.errorsFields.position = 'invalid'
        } else {
          this.errorsFields.position = 'valid'
        }
      },
      registration() {
        this.validationForm()
        if (this.errors.length === 0) {
          this.$store.dispatch(authActionTypes.registration, {
            email: this.email,
            password: this.password,
            firstname: this.firstName,
            lastname: this.lastName,
            id_role: this.role,
            id_object: this.object,
            position: this.position
          })
        }
      }
    }
  }
</script>

<style scoped></style>
