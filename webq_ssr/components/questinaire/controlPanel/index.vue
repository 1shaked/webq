<template>
  <v-container>
    <v-row>
      <v-col
        cols="12"
      >
        <control-panel-header />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn>
          <v-container class="toggleDisplay" @click="TOGGLE_VIEW_STATE">
            preview
          </v-container>
        </v-btn>
      </v-col>
      <v-col>
        <v-container class="toggleEdit">
          edit
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
const controlPanelHeader = () => import('./controlPanelHeader')
export default {
  components: {
    'control-panel-header': controlPanelHeader
  },
  methods: {
    ...mapMutations('Questinaire', [
      'TOGGLE_VIEW_STATE'
    ])
  }
}
</script>

<style lang="scss" scoped>
.toggleDisplay {
  text-align: center;
}
.toggleEdit {
  text-align: center;
}
</style>
