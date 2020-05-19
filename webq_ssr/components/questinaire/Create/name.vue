<template>
  <div>
    {{ questinaireName }}
  </div>
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
