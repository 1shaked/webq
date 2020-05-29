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
        <v-container class="toggleDisplay">
          preview
        </v-container>
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
const controlPanelHeader = () => import('./controlPanelHeader')
export default {
  components: {
    'control-panel-header': controlPanelHeader
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
