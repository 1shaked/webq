<template>
  <div>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
          <!-- TODO: loop throhu the content -->
          <create-card :content="0" />
        </v-col>
        <v-col cols="12" md="6">
          <create-card :content="1" />
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
