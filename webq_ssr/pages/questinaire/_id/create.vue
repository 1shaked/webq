<template>
  <v-container class="bv-example-row">
    <v-row>
      <v-col cols="12" md="8">
        <create-questinaire v-if="view === 'edit'" />
        <preview-questinaire v-if="view === 'preview'" />
      </v-col>
      <v-col cols="12" md="4">
        <control-panel />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { mapState } from 'vuex'
const create = () => import('~/components/questinaire/create/index')
const controlPanel = () => import('~/components/questinaire/controlPanel/index')
const preview = () => import('~/components/questinaire/preview/index')
export default {
  layout: 'questinaire',
  components: {
    'create-questinaire': create,
    'control-panel': controlPanel,
    'preview-questinaire': preview
  },
  computed: {
    ...mapState('Questinaire', [
      'view'
    ])
  }
}
</script>
