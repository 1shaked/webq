<template>
  <div>
    <h1>Select</h1>
    <adding-options />
  </div>
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
