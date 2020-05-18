<template>
  <v-container>
    <v-row>
      <v-col cols="1">
        <v-btn dark v-on:click="ToCreateQ">
          צור שאלון
        </v-btn>
      </v-col>
      <v-col cols="3">
        <v-btn v-on:click="GetQuestionsersNames" class="exsisting_q">השאלונים הקיימים</v-btn>
      </v-col>
      <v-col cols="12" md="4" sm="12" v-for="(questionnaire_name , index) in questionnaires_names" :key="index">
        <v-card dark>
          <v-card-title>
            <span :class="questionnaire_name" 
            v-on:click="SelectQuestionnaire(questionnaire_name)">
              {{ questionnaire_name }}
            </span>
            <v-spacer>
            </v-spacer>
            <v-btn v-on:click="ChooseToDel(questionnaire_name)">
              מחק
              <i class="fas fa-trash-alt"></i>
            </v-btn>
            <v-btn v-on:click="EditQuestionnaire(questionnaire_name)">
              ערוך
              <i class="fas fa-edit"></i>
            </v-btn>
            <v-btn v-on:click="ToArchive(questionnaire_name)">
              ארכיון
              <i class="fas fa-edit"></i>
            </v-btn>
          </v-card-title>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="dialog_duplicate = true">
          שכפל שאלון
        </v-btn>
      </v-col>
    </v-row>
    <v-dialog
    v-model="dialog_del"
    max-width="450">
      <v-container>
        <h3>האם אתה בטוח שאתה רוצה למחוק??</h3>
        <v-btn v-on:click="DelQuestionnaire">
          רוצה למחוק עזוב אותי השטויות שלך!
        </v-btn>
        <v-btn v-on:click="dialog_del = false">
          שיט טעות לא למחוק!!!!!
        </v-btn>
      </v-container>
    </v-dialog>
    <v-dialog
    v-model="dialog_duplicate"
    max-width="450">
      <h2>שכפל את השאלונים שאתה רוצה</h2>
      <v-container class="dialog_duplicate">
        <v-autocomplete
        :items="questionnaires_names"
        label="שם שאלון"
        v-model="source">

        </v-autocomplete>
        <v-text-field
        label="שם שאלון חדש"
        v-model="q_name_duplicate">

        </v-text-field>
      </v-container>
      <v-btn @click="dialog_duplicate = false">
        לא רוצה לשכפל
      </v-btn>
      <v-btn @click="DuplicateQuestionnaireDialog">
        שכפל ותפסיק לבלבל לי את המוח!
      </v-btn>

    </v-dialog>
  </v-container>
</template>
<script>
import { mapActions , mapState } from 'vuex'
export default {
  data() {
    return {
      dialog_del : false,
      q_name_del : false,
      dialog_duplicate : false,
      q_name_duplicate : 'exe',
      source : null

    }
  },
  methods: {
    ...mapActions({
      GetQuestionsersNames   : 'SetQuestionnairesNames',
      SetQuestionnaire       : 'SetQuestionnaire',
      DeleteQuestionnaire    : 'DeleteQuestionnaire',
      DuplicateQuestionnaire : 'DuplicateQuestionnaire',
      ToArchive              : 'ToArchive'
    }),
    SelectQuestionnaire: function(q_name)
    {
      this.SetQuestionnaire(q_name);
      this.$router.push({ path: 'questionnaire' });
    },
    EditQuestionnaire: function (q_name)
    {
      this.SetQuestionnaire(q_name)
      .then(respond =>
      {
        console.log(respond);
        
        this.$router.push({ path: 'create' });
      })
      
      //this.$router.push({ path: 'edit' });
    },
    ChooseToDel(q_name)
    {
      this.dialog_del = true;
      this.q_name_del = q_name;
    },
    DelQuestionnaire()
    {
      this.DeleteQuestionnaire(this.q_name_del);
      this.dialog_del = false;
    },
    DuplicateQuestionnaireDialog()
    {
      //source, q_name_duplicate
      if (this.source != null)
      {
        this.DuplicateQuestionnaire({new_name : this.q_name_duplicate , source : this.source});
      }
      
    },
    ToCreateQ: function()
    {
      this.$router.push({ path: 'create' });
    }
  },
  computed: {
    ...mapState([
      'questionnaires_names'
    ])
  },
  beforeMount()
  {
    if ( Object.keys( this.$route.query ).indexOf('name') != -1 )
    {
      console.log( this.$route.query);
      this.SetQuestionnaire(this.$route.query.name);
      //this.$router.push({ path: 'questionnaire' });
    } 
  }
}
</script>
<style scoped>
.v-btn {
  margin-left: 5px;
  margin-bottom: 5px;
}
.dialog_duplicate {
  background-color: rgba(255, 255, 255, 0.959)
}
</style>
