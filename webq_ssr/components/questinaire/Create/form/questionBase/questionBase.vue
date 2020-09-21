<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="שם השאלה"
          placeholder="שאלה לדוגמא"
          outlined
        />
      </v-col>
      <v-col cols="12" md="8" lg="6">
        <v-text-field
          label="תוכן השאלה"
          placeholder="מה הגיל שלך?"
          outlined
        />
      </v-col>
      <v-col cols="12" md="8" lg="6">
        <v-text-field
          label="מידע לדוגמא:"
          placeholder="21"
          outlined
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
      default: 0,
      reqired: true
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
