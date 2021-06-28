<template>
  <router-link
    :to="{name: link}"
    exact
    class="d-flex align-items-center"
    active-class="active"
    @click.prevent="onClick"
  >
    <b-icon :icon="logo" :font-scale="size"></b-icon>
    <p class="m-0">{{ name }}</p>
  </router-link>
</template>

<script>
  export default {
    name: 'NavItem',
    props: {
      link: {
        type: String,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      logo: {
        type: String,
        required: true
      },
      size: {
        type: String,
        required: false,
        default: '1'
      },
      onClick: {
        type: Function,
        required: false
      }
    }
  }
</script>

<style scoped></style>
