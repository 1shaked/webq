<template>
  <v-app>
    <v-container>
      dash bored {{ questionnaires_names }}
      <v-row>
        <v-col cols="2" v-for="(q_name , index) in questionnaires_names" :key="index">
          <v-btn v-on:click="GetQuestionnaireAnswers(q_name)">
            {{q_name}}
          </v-btn>
        </v-col>
      </v-row>
      <!--table of the questionnaire that beeing fiiled-->
      <v-row>
        <v-col cols="12">

        </v-col>
      </v-row>
    </v-container>
  </v-app>
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

    ]),
    GetQuestionnaireAnswers: function (q_name)
    {
      console.log(q_name);

    }
  },
  computed: {
    ...mapState([
      'questionnaires_names'
    ])
  },
}
</script>
<style scoped>

</style>
