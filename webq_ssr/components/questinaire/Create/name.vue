<template>
  <v-container class="display-3 questinaireName">
    {{ questinaireName }}
  </v-container>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters('Questinaire', [
      'questinaireName'
    ])
  }
}
</script>
<style lang="scss">
@import '~/style/variables.scss';
.questinaireName {
  align-content: center;
  text-align: center;
  background-color: $accent;
  border-radius: 20px;
  box-shadow: 3px 3px $info;
}
</style>
