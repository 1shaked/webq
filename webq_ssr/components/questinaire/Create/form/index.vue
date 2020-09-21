<template>
  <div>
    <v-container>
      <v-row>
        <v-col v-for="( _ , index ) in questinaireContent" :key="index" cols="12" md="6">
          <create-card :content="index" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
const createCard = () => import('./createCard')
export default {
  components: {
    'create-card': createCard
  },
  computed: {
    ...mapGetters('Questinaire', [
      'questinaireContent'
    ])
  }
}
</script>
<style lang="scss" scoped>
@import '~/style/card.scss';
</style>
