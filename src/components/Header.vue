<template>
  <header v-if="currentUser">
    <section class="bg-primary">
      <div class="container py-3">
        <div class="d-flex justify-content-between align-items-center">
          <div id="logo">
            <router-link :to="{name: 'Home'}"
              ><img src="@/assets/img/Logo-white.svg"
            /></router-link>
          </div>

          <div
            class="pl-3 d-flex justify-content-between align-items-center position-relative border-left"
            id="profile"
          >
            <img
              class="rounded-circle"
              :src="currentUser.image"
              style="width:40px"
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
                    <router-link
                      :to="{name: 'Settings'}"
                      class="d-flex align-items-center"
                      href=""
                      ><img
                        class="mr-2"
                        src="@/assets/img/icon-settings.svg"
                        style="width:24px"
                      />Настройки</router-link
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
        <router-link
          :to="{name: 'Home'}"
          exact
          class="d-flex align-items-center p-2"
          active-class="active"
          href="#"
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.64225 15V10.5H10.6991V15H14.5203V9H16.813L9.1707 2.25L1.52844 9H3.82112V15H7.64225Z"
            />
          </svg>
          <p class="m-0">Домой</p>
        </router-link>
        <router-link
          :to="{name: ''}"
          v-if="currentUser.id_role === 1 || currentUser.id_role === 2"
          class="d-flex align-items-center p-2"
          href="#"
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0)">
              <path
                d="M13.3628 9C11.2535 9 9.54163 10.68 9.54163 12.75C9.54163 14.82 11.2535 16.5 13.3628 16.5C15.472 16.5 17.1839 14.82 17.1839 12.75C17.1839 10.68 15.472 9 13.3628 9ZM14.6237 14.5125L12.9806 12.9V10.5H13.7449V12.5925L15.1587 13.98L14.6237 14.5125ZM14.127 2.25H11.6967C11.3758 1.38 10.5351 0.75 9.54163 0.75C8.54814 0.75 7.70749 1.38 7.38651 2.25H4.95628C4.11563 2.25 3.42783 2.925 3.42783 3.75V15C3.42783 15.825 4.11563 16.5 4.95628 16.5H9.62569C9.1748 16.0725 8.80797 15.5625 8.54049 15H4.95628V3.75H6.48473V6H12.5985V3.75H14.127V7.56C14.6696 7.635 15.1816 7.7925 15.6554 8.01V3.75C15.6554 2.925 14.9676 2.25 14.127 2.25ZM9.54163 3.75C9.12131 3.75 8.7774 3.4125 8.7774 3C8.7774 2.5875 9.12131 2.25 9.54163 2.25C9.96195 2.25 10.3059 2.5875 10.3059 3C10.3059 3.4125 9.96195 3.75 9.54163 3.75Z"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect
                  width="18.3414"
                  height="18"
                  transform="translate(0.370911)"
                />
              </clipPath>
            </defs>
          </svg>
          <p class="m-0">Выполнение</p>
        </router-link>
        <router-link
          :to="{name: ''}"
          v-if="currentUser.id_role === 1 || currentUser.id_role === 2"
          class="d-flex align-items-center p-2"
          href="#"
        >
          <svg
            width="13"
            height="15"
            viewBox="0 0 13 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.08589 0H1.97208C1.13144 0 0.451276 0.675 0.451276 1.5L0.443634 13.5C0.443634 14.325 1.12379 15 1.96444 15H11.1428C11.9834 15 12.6712 14.325 12.6712 13.5V4.5L8.08589 0ZM9.61434 12H3.50054V10.5H9.61434V12ZM9.61434 9H3.50054V7.5H9.61434V9ZM7.32166 5.25V1.125L11.5249 5.25H7.32166Z"
            />
          </svg>
          <p class="m-0">Договоры</p>
        </router-link>
        <router-link
          :to="{name: ''}"
          class="d-flex align-items-center p-2"
          v-if="currentUser.id_role === 1 || currentUser.id_role === 2"
          href="#"
        >
          <svg
            width="14"
            height="15"
            viewBox="0 0 14 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.3646 1.5H9.17014C8.84916 0.63 8.00852 0 7.01502 0C6.02153 0 5.18088 0.63 4.85991 1.5H1.66544C0.824796 1.5 0.136993 2.175 0.136993 3V13.5C0.136993 14.325 0.824796 15 1.66544 15H12.3646C13.2052 15 13.8931 14.325 13.8931 13.5V3C13.8931 2.175 13.2052 1.5 12.3646 1.5ZM7.01502 1.5C7.43535 1.5 7.77925 1.8375 7.77925 2.25C7.77925 2.6625 7.43535 3 7.01502 3C6.5947 3 6.2508 2.6625 6.2508 2.25C6.2508 1.8375 6.5947 1.5 7.01502 1.5ZM5.48657 12L2.42967 9L3.50723 7.9425L5.48657 9.8775L10.5228 4.935L11.6004 6L5.48657 12Z"
            />
          </svg>
          <p class="m-0">Акты сдачи</p>
        </router-link>
        <router-link
          :to="{name: ''}"
          class="d-flex align-items-center p-2"
          href="#"
        >
          <svg
            width="17"
            height="11"
            viewBox="0 0 17 11"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.3045 0V10.5H16.833V0H15.3045ZM12.2476 10.5H13.7761V0H12.2476V10.5ZM9.95495 0H0.784245C0.363921 0 0.0200195 0.3375 0.0200195 0.75V9.75C0.0200195 10.1625 0.363921 10.5 0.784245 10.5H9.95495C10.3753 10.5 10.7192 10.1625 10.7192 9.75V0.75C10.7192 0.3375 10.3753 0 9.95495 0ZM5.3696 2.0625C6.31724 2.0625 7.08911 2.82 7.08911 3.75C7.08911 4.68 6.31724 5.4375 5.3696 5.4375C4.42196 5.4375 3.65009 4.68 3.65009 3.75C3.65009 2.82 4.42196 2.0625 5.3696 2.0625ZM8.80861 9H1.93058V8.4375C1.93058 7.3125 4.22326 6.75 5.3696 6.75C6.51594 6.75 8.80861 7.3125 8.80861 8.4375V9Z"
            />
          </svg>
          <p class="m-0">Подрядчики</p>
        </router-link>
        <router-link
          :to="{name: ''}"
          class="d-flex align-items-center p-2"
          href="#"
        >
          <svg
            width="19"
            height="18"
            viewBox="0 0 19 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.1225 8.25V2.25H5.48024V5.25H2.42334V15.75H8.53714V12.75H10.0656V15.75H16.1794V8.25H13.1225ZM5.48024 14.25H3.95179V12.75H5.48024V14.25ZM5.48024 11.25H3.95179V9.75H5.48024V11.25ZM5.48024 8.25H3.95179V6.75H5.48024V8.25ZM8.53714 11.25H7.00869V9.75H8.53714V11.25ZM8.53714 8.25H7.00869V6.75H8.53714V8.25ZM8.53714 5.25H7.00869V3.75H8.53714V5.25ZM11.594 11.25H10.0656V9.75H11.594V11.25ZM11.594 8.25H10.0656V6.75H11.594V8.25ZM11.594 5.25H10.0656V3.75H11.594V5.25ZM14.6509 14.25H13.1225V12.75H14.6509V14.25ZM14.6509 11.25H13.1225V9.75H14.6509V11.25Z"
            />
          </svg>
          <p class="m-0">Объекты</p>
        </router-link>
        <router-link
          :to="{name: 'Tasks'}"
          class="d-flex align-items-center p-2"
          href="#"
          active-class="active"
        >
          <svg
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.04083 9.75H4.56928V8.25H3.04083V9.75ZM3.04083 12.75H4.56928V11.25H3.04083V12.75ZM3.04083 6.75H4.56928V5.25H3.04083V6.75ZM6.09773 9.75H16.7969V8.25H6.09773V9.75ZM6.09773 12.75H16.7969V11.25H6.09773V12.75ZM6.09773 5.25V6.75H16.7969V5.25H6.09773Z"
            />
          </svg>
          <p class="m-0">Задачи</p>
        </router-link>
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
        validationErrors: state => state.auth.validationErrors,
        currentUser: state => state.auth.currentUser,
        isLoggedIn: state => state.auth.isLoggedIn
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
