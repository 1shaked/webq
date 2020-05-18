<template>
  <v-app-bar app dark class="no-print">
    <v-toolbar-title class="headline text-uppercase">
      <router-link to='/'>עמוד הבית</router-link>
    </v-toolbar-title>
    <v-spacer>
    </v-spacer>
    <router-link to='/archive'>ארכיון</router-link>
    <v-toolbar-items>
    </v-toolbar-items>
  </v-app-bar>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {

    }
  },
  methods: {
    ...mapActions([
      'SetQuestionnairesNames'
    ]),
    DashBoredLog: function ()
    {
      this.SetQuestionnairesNames();
      this.$router.push({ path: 'dashbored' });
    },
    ToCreateQ: function()
    {
      this.$router.push({ path: 'create' });
    }
  },
  computed: {

  },
}
</script>
<style scoped>
@media print
{
  .no-print 
  {
    display: none !important;
  }
}
</style>
