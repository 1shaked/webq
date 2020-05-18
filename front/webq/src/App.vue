<template>
  <v-app>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
//import { mapState, mapGetters, mapActions } from 'vuex'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data: () => ({
    //
  }),
  methods: {
    /*
    ...mapAction([
      'SetQuestionnairesNames'
    ]),
    DashBoredLog: function ()
    {
      this.SetQuestionnairesNames();
      this.$router.push({ path: 'dashbored' });
    }
    */
  },
};
</script>
