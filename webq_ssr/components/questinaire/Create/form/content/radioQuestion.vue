<template>
  <v-container>
    <h1>radio</h1>
    <adding-options />
  </v-container>
</template>

<script>
const addingOptions = () => import('./addingOptions')
export default {
  components: {
    'adding-options': addingOptions
  }
}
</script>

<style lang="scss">

</style>
