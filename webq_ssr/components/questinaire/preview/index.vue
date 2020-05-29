<template>
  <v-container>
    index preview
    <content-maneger />
  </v-container>
</template>

<script>
const contentManeger = () => import('./contentManeger')
export default {
  components: {
    'content-maneger': contentManeger
  }
}
</script>

<style lang="scss" scoped>

</style>
