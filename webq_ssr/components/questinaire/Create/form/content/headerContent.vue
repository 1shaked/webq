<template>
  <v-container>
    <v-row>
      <v-col cols="12" lg="6" md="8">
        <v-text-field
          v-model="header"
          label="הכותרת"
          @change="addHeaderText"
        />
      </v-col>
      <v-col cols="12" lg="6" md="8">
        {{ header }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  props: {
    index: {
      type: Number,
      reqired: true,
      default: 0
    }
  },
  data () {
    return {
      header: ''
    }
  },
  methods: {
    ...mapMutations('Questinaire', [
      'CHANGE_CONTENT_PARAMETER'
    ]),
    addHeaderText (params) {
      this.CHANGE_CONTENT_PARAMETER({
        index: this.index,
        contentParameters: {
          content: this.header
        }
      })
    }
  }

}
</script>

<style lang="scss">

</style>
