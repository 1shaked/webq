<template>
  <v-container>
    index preview
    <v-container>
      <content-maneger v-for="index in questinaireContentItemsLen" :key="index" :index="index" />
    </v-container>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
const contentManeger = () => import('./contentManeger')
export default {
  components: {
    'content-maneger': contentManeger
  },
  computed: {
    ...mapGetters('Questinaire', [
      'questinaireContentItemsLen'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
