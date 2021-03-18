<template>
  <header>
    <section class="bg-primary">
      <div class="container py-3">
        <div class="d-flex justify-content-between align-items-center">
          <div id="logo"><img src="@/assets/img/Logo-white.svg" /></div>

          <div
            class="pl-3 d-flex justify-content-between align-items-center position-relative border-left"
            id="profile"
          >
            <img
              class="rounded-circle"
              :src="currentUser.image"
              style="width:40px"
            /><a
              class="d-flex"
              id="openProfileMenu"
              href=""
              @click.prevent="openProfileMenu"
            >
              <p class="m-0 pl-3">
                {{ currentUser.firstname }} {{ currentUser.lastname }}
              </p>
              <img src="@/assets/img/icon-chevron-down.svg"
            /></a>

            <div
              class="menu card position-absolute p-1"
              id="profileMenu"
              style="top:100%;right:-15px"
              v-if="profileMenu"
            >
              <div class="d-flex justify-content-center">
                <ul class="list-unstyled m-0">
                  <li class="py-2 px-2">
                    <a class="d-flex align-items-center" href=""
                      ><img
                        class="mr-2"
                        src="@/assets/img/icon-profile.svg"
                        style="width:24px"
                      />Профиль</a
                    >
                  </li>
                  <li class="py-2 px-2" v-if="currentUser.id_role === 1">
                    <a class="d-flex align-items-center" href=""
                      ><img
                        class="mr-2"
                        src="@/assets/img/icon-settings.svg"
                        style="width:24px"
                      />Настройки</a
                    >
                  </li>
                  <li class="py-2 px-2">
                    <a
                      class="d-flex align-items-center"
                      href=""
                      @click.prevent="logout"
                      ><img
                        class="mr-2"
                        src="@/assets/img/icon-logout.svg"
                        style="width:24px;transform: rotate(180deg);"
                      />Выход</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="bg-medium">
      <div class="menu container py-3">
        <a class="d-flex align-items-center p-2 active" href="#"
          ><img class="mr-2" src="@/assets/img/icon-menu-home.svg" />

          <p class="m-0">Домой</p></a
        ><a class="d-flex align-items-center p-2" href="#"
          ><img class="mr-2" src="@/assets/img/icon-menu-acceptance.svg" />

          <p
            class="m-0"
            v-if="currentUser.id_role === 1 || currentUser.id_role === 2"
          >
            Выполнение
          </p></a
        ><a class="d-flex align-items-center p-2" href="#"
          ><img class="mr-2" src="@/assets/img/icon-menu-contract.svg" />

          <p
            class="m-0"
            v-if="currentUser.id_role === 1 || currentUser.id_role === 2"
          >
            Договоры
          </p></a
        ><a class="d-flex align-items-center p-2" href="#"
          ><img class="mr-2" src="@/assets/img/icon-menu-end-act.svg" />

          <p
            class="m-0"
            v-if="currentUser.id_role === 1 || currentUser.id_role === 2"
          >
            Акты сдачи
          </p></a
        ><a class="d-flex align-items-center p-2" href="#"
          ><img class="mr-2" src="@/assets/img/icon-menu-contractor.svg" />

          <p class="m-0">Подрядчики</p></a
        ><a class="d-flex align-items-center p-2" href="#"
          ><img class="mr-2" src="@/assets/img/icon-menu-object.svg" />

          <p class="m-0">Объекты</p></a
        ><a class="d-flex align-items-center p-2" href="#"
          ><img class="mr-2" src="@/assets/img/icon-menu-task.svg" />

          <p class="m-0">Задачи</p></a
        >
      </div>
    </section>
  </header>
</template>

<script>
  import {mapState} from 'vuex'
  import {actionTypes} from '@/store/modules/auth'

  export default {
    name: 'Header',
    data: () => ({
      profileMenu: false,
      token: localStorage.getItem('lstToken')
    }),
    methods: {
      openProfileMenu() {
        this.profileMenu = !this.profileMenu
      },
      isLoggedInCheck() {
        if (
          this.token != null ||
          this.$router.currentRoute.name === 'Login' ||
          this.$router.currentRoute.name === 'UpdatePassword' ||
          this.$router.currentRoute.name === 'RequestPassword'
        ) {
          this.$store.dispatch(actionTypes.isLoggedIn, {
            token: this.token
          })
        } else {
          this.$router.push({name: 'Login'})
        }
      },
      logout() {
        this.$store.dispatch(actionTypes.logout, {
          token: this.token
        })
        localStorage.removeItem('lstToken')
        this.token = ''
        this.$router.push({name: 'Login'})
      }
    },
    computed: {
      ...mapState({
        currentUser: state => state.auth.currentUser,
        isLoggedIn: state => state.auth.isLoggedIn
      })
    },
    mounted() {
      this.isLoggedInCheck()
    }
  }
</script>

<style scoped></style>
