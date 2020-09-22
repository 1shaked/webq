<template>
  <v-row cols="12" md="3">
    <v-col>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-btn fab @click="DELETE_QUESTION(index)">
          <v-icon v-if="!hover">
            mdi-delete-circle
          </v-icon>
          <span v-if="hover">
            מחק
          </span>
        </v-btn>
      </v-hover>
    </v-col>
    <v-col>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-btn fab>
          <v-icon v-if="!hover">
            mdi-content-copy
          </v-icon>
          <span v-if="hover">
            העתק
          </span>
        </v-btn>
      </v-hover>
    </v-col>
    <v-col>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-btn fab class="mx-2" @click="ADD_QUESTION(index)">
          <v-icon v-if="!hover">
            mdi-plus
          </v-icon>
          <span v-if="hover">
            הוסף
          </span>
        </v-btn>
      </v-hover>
    </v-col>
  </v-row>
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
  methods: {
    ...mapMutations('Questinaire', [
      'ADD_QUESTION',
      'DELETE_QUESTION'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>
