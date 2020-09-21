<template>
  <v-container class="form_index">
    <name-questinaire />
    <content-questinaire />
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
