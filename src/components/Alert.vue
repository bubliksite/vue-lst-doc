<template>
  <div class="alert" :class="validationErrors.type">
    {{ validationErrors.message }}
  </div>
</template>

<script>
  export default {
    name: 'Alert',
    props: {
      validationErrors: {
        type: Object,
        require: false
      }
    }
  }
</script>

<style scoped></style>
