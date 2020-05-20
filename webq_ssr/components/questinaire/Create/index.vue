<template>
  <v-container class="form_index">
    <v-container>
      <name-questinaire />
    </v-container>
    <v-container>
      <content-questinaire />
    </v-container>
  </v-container>
</template>
<script>
import name from './name'
import content from './form/index'
export default {
  components: {
    'name-questinaire': name,
    'content-questinaire': content
  }
}
</script>
<style lang="scss">
@import '~/style/variables.scss';
.form_index {
  border: 1px solid $accent;
}
</style>
