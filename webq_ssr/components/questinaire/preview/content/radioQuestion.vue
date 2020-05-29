<template>
  <v-container>
    <h1>radio</h1>
  </v-container>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters('Questinaire', [
      'questinaireContentByIndex'
    ])
  },
  methods: {
    ...mapMutations('Questinaire', [

    ])
  }
}
</script>

<style lang="scss">

</style>
