<template>
  <b-container class="bv-example-row">
    <v-row>
      <v-col cols="12" md="8">
        <create-questinaire />
      </v-col>
      <v-col cols="12" md="4">
        control panel
        {{ $route.params }}
      </v-col>
    </v-row>
  </b-container>
</template>
<script>
import Create from '../../../components/questinaire/Create/index'
export default {
  layout: 'questinaire',
  components: {
    'create-questinaire': Create
  }
}
</script>
