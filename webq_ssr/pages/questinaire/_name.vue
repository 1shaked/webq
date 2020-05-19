<template>
  <div>
    {{ questinaire.name }}
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  layout: 'questinaire',
  data () {
    return {

    }
  },
  computed: {
    ...mapState('Questinaire', [
      'questinaire'
    ])
  }
}
</script>
