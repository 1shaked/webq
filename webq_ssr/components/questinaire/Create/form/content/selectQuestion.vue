<template>
  <div>
    <h1>Select</h1>
    <adding-options :index="index" />
  </div>
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
