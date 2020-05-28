<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field
          label="הכותרת"
          v-model="header"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
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
  }

}
</script>

<style lang="scss">

</style>
