<template>
  <v-container class="bv-example-row">
    <v-row>
      <v-col cols="12" md="8">
        <create-questinaire />
      </v-col>
      <v-col cols="12" md="4">
        <control-panel />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapMutations } from 'vuex'
const Create = () => import('~/components/questinaire/create/index')
const ControlPanel = () => import('~/components/questinaire/controlPanel/index')
export default {
  layout: 'questinaire',
  components: {
    'create-questinaire': Create,
    'control-panel': ControlPanel
  },
  mounted () {
    this.SET_QUESTINAIRE_NAME(this.$route.params.id)
  },
  methods: {
    ...mapMutations('Questinaire', [
      'SET_QUESTINAIRE_NAME'
    ])
  }
}
</script>
