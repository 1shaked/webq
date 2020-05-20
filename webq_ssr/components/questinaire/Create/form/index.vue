<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <create-card />
        </v-col>
        <v-col cols="12" md="6">
          <create-card />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapState } from 'vuex'
const createCard = () => import('./createCard')
export default {
  components: {
    'create-card': createCard
  },
  computed: {
    ...mapState('Questinaire', [
      'questinaire'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import '~/style/card.scss';
</style>
