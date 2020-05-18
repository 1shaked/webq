<template>
  <v-app id="inspire">
    <v-container>
      <NavBar></NavBar>
      <QuestionnairesNames></QuestionnairesNames>
    </v-container>
    <v-footer
      color="dark"
      app
    >
    </v-footer>
  </v-app>
</template>

<script>
import QuestionnairesNames from '../components/QuestionnairesNames'
import { mapActions } from 'vuex'
import NavBar from '../components//NavBar'

  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    components : {
      QuestionnairesNames,
      NavBar
    },
    methods : {
      ...mapActions(
        {
          SetQuestionnaire     : 'SetQuestionnaire'
        }
      )
    },
    beforeMount()
    {
      if ( Object.keys( this.$route.query ).indexOf('name') != -1 )
      {
        console.log( this.$route.query);
        this.SetQuestionnaire(this.$route.query.name);
        this.$router.push({ path: 'questionnaire' });
      } 
    }
  }
</script>
