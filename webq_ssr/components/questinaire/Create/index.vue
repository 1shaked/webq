<template>
  <v-container>
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
