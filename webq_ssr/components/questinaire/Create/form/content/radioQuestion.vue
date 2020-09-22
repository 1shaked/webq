<template>
  <v-container>
    <h1>radio</h1>
    <adding-options :index="index" />
  </v-container>
</template>

<script>
const addingOptions = () => import('./addingOptions')
export default {
  components: {
    'adding-options': addingOptions
  },
  props: {
    index: {
      type: Number,
      reqired: true,
      default: 0
    }
  }
}
</script>

<style lang="scss">

</style>
