<template>
  <v-container class="bv-example-row">
    <v-row>
      <v-col cols="12" md="8">
        <create-questinaire />
      </v-col>
      <v-col cols="12" md="4">
        לוח שליטה
        {{ $route.params }}
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import Create from '~/components/questinaire/create/index'
export default {
  layout: 'questinaire',
  components: {
    'create-questinaire': Create
  }
}
</script>
