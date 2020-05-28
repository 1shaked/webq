<template>
  <v-row cols="12" md="3">
    <v-col>
      <v-hover
        v-slot:default="{ hover }"
      >
        <v-btn fab>
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
        <v-btn class="mx-2" fab>
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
export default {
  data () {
    return {
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
