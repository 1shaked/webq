<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col :cols="12" style="font-size : 28px">
        </v-col>
        <v-col v-for="(question , index) in questions" :key="index" :cols="question.rowSize" :ref="question.name">
          <div :style="{fontSize: question.textSize + 'px'}"
          :class="question.class">
            {{question.content}}
          </div>
          <v-textarea
          v-model="answers[question.name]"
          v-if="question.type == 'text'"
          :label="question.label"
          :rows="question.rows || 1"
          solo
          >
          </v-textarea>
        
          <v-select
            v-model="answers[question.name]"
            multiple
            v-else-if="question.type == 'check box'"
            :items="question.options"
            :rules="[v => !!v || 'Item is required']"
            :label="question.label"
          ></v-select>

          <v-radio-group
          v-else-if="question.type == 'radio'"
          v-model="answers[question.name]">
            <v-radio active-class='radioActive'
              v-for="(option , index) in question.options"
              :key="index"
              :label="`${option.text}`"
              :value="option.value"
            ></v-radio>
          </v-radio-group>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" v-show="questions != 0">
          <v-btn v-on:click="Submit">
            סיים
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script>
import { mapState, mapGetters, mapActions } from 'vuex'
import { log } from 'util';
export default {
  data() {
    return {
      answers : {},
      tried_to_submit : false
    }
  },
  computed: {
    ...mapState([
      'questionnaire'
    ]),
    ...mapGetters([
      'questions',
      'questionnaire_name'
    ]),
    questions_not_filled()
    {
      let questions_to_fill = [];
      for (let question of this.questions) {
        //console.log(question);
        //alert(`${question.name} ${this.answers[question.name] == '' || !(question.name  in this.answers)}`)
        if (question.required && 
        (this.answers[question.name] == '' || !(question.name  in this.answers))
        && question.type != 'header')
        {
          questions_to_fill.push(question.name);
        }
      }
      return questions_to_fill;
    }
  },
  methods: {
    ...mapActions([
      'SubmitQuestionnaire'
    ]),
    DataTypeConvertor(dataType)
    {
      switch(dataType) {
        case 'text':
          // code block
          return 'text';
        case 'int':
          // code block
          return 'number';
        case 'float':
          return 'float'
        default:
          return 'text';
      }
    },
    Submit()
    {
      let validate = this.Validation();
      if (validate)
      {
        //Submit the form
        for (let question_content in this.answers)
        {
          this.answers[question_content] = this.answers[question_content].replace(`'` , ` `);
        }
        this.SubmitQuestionnaire({name : this.questionnaire_name , answers : this.answers});
        this.$router.push({ path: '/AfterFilledWebQ' });
        //alert('תודה רב על מילוי השאלון');
        return true;
      }
      else
      {
        for (let question of this.questions) 
        {
          if (question.required && (this.answers[question.name] == '' || !(question.name  in this.answers) ))
          {
            console.log(question.name);
            this.$refs[question.name][0].classList.add('requiredToFill');
          }
        }
      }
    },
    Validation()
    {
      if (this.questions == 0) //when the question is empty
      {
        return false
      }
      for (let question of this.questions) {
        if (question.required && (this.answers[question.name] == '' || !(question.name  in this.answers) )
        && question.type != 'header')
        {
          return false;
        }
        else
        {
          continue;
        }
      }
      //console.log(this.questions);
      return true;
    }
  }
}
</script>
<style scoped>
.radioActive {
  background-color : rgba(255 , 0 , 0 , 0.5);
  /*border-radius : 100px;*/
}
.requiredToFill {
  border: 2px solid rgba(207, 42, 42, 0.329);
}
.notes {
  background-attachment: local;
  background-image: 
    linear-gradient(to right , white 10px , transparent 10px),
    linear-gradient(to left , white 10px , transparent 10px),
    repeating-linear-gradient(white, white 30px , #000 31px);
  line-height: 20px;
  padding: 8px 10px;
}
</style>
