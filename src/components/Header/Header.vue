<template>
  <header v-if="currentUser">
    <section class="bg-primary">
      <div class="container py-3">
        <div class="d-flex justify-content-between align-items-center">
          <Logo />
          <div
            class="
              pl-3
              d-flex
              justify-content-between
              align-items-center
              position-relative
              border-left
            "
            id="profile"
          >
            <img
              class="rounded-circle"
              :src="currentUser.image"
              style="width: 40px"
              alt="Profile Image"
            />
            <div>
              <a
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
              <small class="text-muted pl-3">{{ currentUser.position }}</small>
            </div>

            <div
              class="menu card position-absolute p-1"
              id="profileMenu"
              style="top: 100%; right: -15px"
              v-if="profileMenu"
            >
              <div class="d-flex justify-content-center">
                <ul class="list-unstyled m-0">
                  <li class="py-2 px-2">
                    <NavItem
                      logo="person-circle"
                      name="Профиль"
                      link=""
                      size="2"
                    />
                  </li>
                  <li class="py-2 px-2" v-if="currentUser.id_role === 1">
                    <NavItem
                      logo="people"
                      name="Пользователи"
                      link="Users"
                      size="2"
                    />
                  </li>
                  <li class="py-2 px-2">
                    <a
                      class="d-flex align-items-center"
                      href=""
                      @click.prevent="logout"
                    >
                      <b-icon icon="box-arrow-right" :font-scale="2"></b-icon>
                      Выход
                    </a>
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
        <NavItem link="Home" name="Домой" logo="house" />
        <NavItem link="" name="Выполнение" logo="clipboard-data" />
        <NavItem link="" name="Договоры" logo="file-earmark-text" />
        <NavItem link="" name="Акты сдачи" logo="file-check" />
        <NavItem link="" name="Подрядчики" logo="people" />
        <NavItem link="" name="Объекты" logo="building" />
        <NavItem link="Tasks" name="Задачи" logo="list-task" />
      </div>
    </section>
  </header>
</template>

<script>
  import {mapState} from 'vuex'
  import {actionTypes} from '@/store/modules/auth'
  import Logo from '../Logo'
  import NavItem from './NavItem'

  export default {
    name: 'Header',
    components: {NavItem, Logo},
    data: () => ({
      profileMenu: false,
      token: localStorage.getItem('lstToken')
    }),
    methods: {
      openProfileMenu() {
        this.profileMenu = !this.profileMenu
      },
      isLoggedInCheck() {
        if (!this.isLoggedIn) {
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
        validationErrors: (state) => state.auth.validationErrors,
        currentUser: (state) => state.auth.currentUser,
        isLoggedIn: (state) => state.auth.isLoggedIn
      })
    },
    mounted() {
      this.isLoggedInCheck()
    }
  }
</script>

<style lang="scss">
  .menu {
    svg {
      margin-right: 0.5rem;
      fill: #fff;
      fill-opacity: 0.6;
    }
    .active {
      svg > path {
        fill: #5985ee;
        fill-opacity: 1;
      }
    }
  }
</style>
