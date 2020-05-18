<template>
  <v-container>
    <v-container>
      <v-row class="float-left">
        <v-col cols="12">
          <v-row :align="'start'" :justify="'end'"
          style="position:fixed">
            <v-card class="ma-3 pa-6" v-on:click="change_questions = true">
                החלף שאלה
            </v-card>
            <v-card class="ma-3 pa-6" v-on:click="CreateQuestionnaires(false)">
                save
            </v-card>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
    <v-row>
      <v-col>
        <!--Create questionnaire-->
        <v-row>
          <v-col cols="12">
            <v-text-field 
            v-model="questionnaire.name "
            label="שם השאלון">
            </v-text-field>
          </v-col>
        </v-row>
        <!--Load questionnaire-->
        <v-row>
          <v-col v-for="(question , index) in  Questions" :key="index"
          cols="12" class="question_border">
          <v-btn v-on:click="DeleteQuestion(index)">
            <span style="margin-left : 5px;">
              מחק {{ index }}
            </span>
            <v-icon>fa-minus-square</v-icon>
          </v-btn>
          <v-text-field
            v-model="Questions[index].name"
            label="שם השאלה"
             v-show="question.type != 'header'"
          ></v-text-field>
          <v-autocomplete
             v-show="question.type != 'header'"
            :items="DataTypes"
            v-model="Questions[index].dataType"
            label="סוג מידע">
          </v-autocomplete>
          <v-text-field
             v-show="question.type != 'header'"
            v-model="Questions[index].content"
            label="תוכן השאלה"
          ></v-text-field>
          <v-text-field
            v-show="question.type == 'header'"
            v-model="Questions[index].content"
            label="הכותרת">
          </v-text-field>
          <v-text-field
            v-model="Questions[index].label"
            v-show="question.type != 'header'"
            label="תוכן השאלה השקוף"></v-text-field>
          <v-autocomplete
            :items="QuestionTypes"
            v-model="Questions[index].type"
            label="סוג שאלה">
          </v-autocomplete>
          <v-text-field 
            v-show="question.dataType == 'text' && question.type == 'text'"
            label="כמות השורות"
            v-model="Questions[index].rows"
            type="number">
          </v-text-field>
          <!--choose optioons-->
          <v-container v-if="question.type == 'radio' || question.type == 'check box'">
            <v-row v-for="(option , option_index) in question.options" :key="option_index">
              <v-col>
                <v-icon
                  v-on:click="DeleteOption(index , option_index)">fa-minus-square</v-icon>
                <v-text-field
                label="text"
                v-model="question.options[option_index].text">
                </v-text-field>
                <v-text-field
                label="value"
                v-model="question.options[option_index].value">
                </v-text-field>
                <v-icon v-on:click="AddOption(index)">fa-plus-square</v-icon>
              </v-col>
            </v-row>
          </v-container>
          <!--choose size-->
          <v-row>
            <v-col cols="8">
              <v-slider
                v-model="Questions[index].textSize"
                label="גודל טקסט"
                step="2"
                thumb-label="always"
                ticks
              ></v-slider>
            </v-col>
            <v-col cols="4">
              <v-btn @click="Questions[index].textSize = Questions[index].textSize + 2">
                הגדל
              </v-btn>
              <v-btn  @click="Questions[index].textSize = Questions[index].textSize - 2">
                הקטן
              </v-btn>
            </v-col>
          </v-row>
        <v-slider
          v-model="Questions[index].rowSize"
          min="1"
          max="12"
          label="אורך השורה עד 12"
          thumb-label="always"
          ticks
        ></v-slider>
        <v-row>
          <v-col>
            <v-switch v-model="Questions[index].required" 
            class="mx-2" label="חובה למלא"
            v-show="question.type != 'header'"></v-switch>
          </v-col>
          <v-col>
            <v-btn>
              Bold
            </v-btn>
          </v-col>
          <v-col>
            <v-btn>
              Under Line
            </v-btn>
          </v-col>
        </v-row>
          
    </v-col>
          <v-col v-on:click="AddQuestion">
            <v-btn>
              <span style="margin-left : 5px">
                הוסף שאלה
              </span>
              <v-icon>fa-plus-square</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
      <v-col>
        <v-row>
          <v-col cols="12">
            <div class="display-1">
              {{ Name }}
            </div>
          </v-col>
          <v-col v-for="(question , index) in Questions" :key="index"
          :cols="question.rowSize">
            <span>
              מספר שאלה
              {{ index }}
            </span>
            <v-list :style="{fontSize : question.textSize + 'px'}">
              <v-list-item>
                שם :
                {{ question.name }}
              </v-list-item>
              <v-list-item>
                סוג שאלה :
                {{ question.type }}
              </v-list-item>
              <v-list-item>
                סוג מידע :
                {{ question.dataType }}
              </v-list-item>
              <v-list-item>
                תוכן השאלה :
                {{ question.content }}
              </v-list-item>
              <v-list-item  v-if="question.type != 'text'">
                <v-container>
                  <v-list>
                    <v-list-item two-line v-for="(option , option_index) in question.options" :key="option_index">
                      <v-row space-around>
                        <v-col>
                          <v-icon>fa-circle</v-icon> {{ option_index + 1 }}
                        </v-col>
                        <v-col>
                          אופציה טקסט :
                        {{ option.text }}
                        </v-col>
                        <v-col>
                          אופציה ערך :
                        {{ option.value }}
                        </v-col>
                      </v-row>
                    </v-list-item>
                  </v-list>
                </v-container>
              </v-list-item>
            </v-list>
            <v-text-field v-if="question.type == 'text'"
              :label="question.label"
            ></v-text-field>
          </v-col>
        </v-row>
      </v-col>
      <!-- replace questions-->
      <v-col cols="2">
        <v-container>
          <v-dialog dark
          v-model='change_questions'>
          <v-row>
            <v-col>
              {{ question_to_replace }}
              <h1>
                מספר שאלה 
              </h1>
            </v-col>
            <v-col>
              <v-text-field
              label="שאלה להחלפה"
              v-model="question_to_replace.first"
              type="number">
            </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <h1>
                מספר שאלה
              </h1>
            </v-col>
            <v-col>
              <v-text-field
              label="שאלה להחלפה"
              v-model="question_to_replace.second"
              type="number">
            </v-text-field>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <v-btn v-on:click="ReplaceQuestions">
                החלף שאלות
              </v-btn>
              <v-btn v-on:click="PushQuestionToIndex">
                דחוף שאלה לאמצע
              </v-btn>
              <v-btn v-on:click="change_questions = false">
                close
              </v-btn>
            </v-col>
          </v-row>
          </v-dialog>
        </v-container>
      </v-col>
    </v-row>
    <!--Create Q-->
    <v-container>
      <v-btn v-on:click="CreateQuestionnaires">
        צור שאלון <v-icon right dark>mdi-cloud-upload</v-icon>
      </v-btn>
    </v-container>
  </v-container>
</template>
<script>
import { mapActions , mapState , mapGetters } from 'vuex'
import Vue from 'vue';

export default {
  data() {
    return {
      Name : "",
      question_to_replace : {first : null , second : null},
      change_questions : false,
      Questions : [
          {
          type : "text",
          content : "תוכן לדוגמא",
          name : "",
          dataType : '',
          required : true,
          label : "",
          textSize : 16,
          rowSize : 10,
          options : [
            {'text' : 'test' , 'value' : 'value'}
          ]
        }
      ],
      QuestionTypes : [{
        'text' : "כפתור בחירה",
        'value' : 'radio'
        },
        {
        'text' : 'בחירה מרובה',
        'value' : 'check box'
        },
        {
        'text' : 'שאלת טקסט',
        'value' : 'text'
        },
        {
          'text' : 'כותרת',
          'value': 'header'
        }],
      DataTypes : [{
        'text' : "מספר",
        'value' : 'int'
        },
        {
        'text' : 'מספר לא שלם',
        'value' : 'float'
        },
        {
        'text' : 'טקסט',
        'value' : 'text'
        }]
    }
  },
  methods: {
    ...mapActions([
      'submitForm'
    ]),
    AddQuestion : function ()
    {
      this.Questions.push({
          type : "text",
          content : "תוכן לדוגמא",
          name : "",
          dataType : '',
          required : true,
          textSize : 16,
          rowSize : 10,
          options : [
            {'text' : '' , 'value' : ''}
          ]
        })
      console.log(this.Questions);
    },
    DeleteQuestion : function (index)
    {
      if (this.Questions.length > 1)
      {
        this.Questions.splice(index , 1)
      }
      else
      {
        alert('you can not have 0 question')
      }
    },
    AddOption : function (index)
    {
      this.Questions[index].options.push({'text' : 'test' , 'value' : 'value'})
    },
    DeleteOption: function (question_index , option_index)
    {
      if (this.Questions[question_index].options.length > 1)
      {
        this.Questions[question_index].options.splice(option_index , 1)
      }
      else
      {
        alert('you can not have 0 options')
      }
    },
    CreateQuestionnaires: function()
    {
      let form_questions = this.Questions.map((question) =>
      {
        if (question.type == 'text')
        {
          delete question.options
        }
        console.log(question);
        return question
      });
      let form = {name : this.Name ,questions : form_questions}
      console.log('the form is');
      console.log(form);
      this.submitForm(form);
      this.$router.push({ path: '/' });
    },
    ReplaceQuestions: function()
    {
      //this.Questions
      let first_question_index = this.question_to_replace.first;
      let second_question_index = this.question_to_replace.second;
      if (this.Questions.length > first_question_index && this.Questions.length > second_question_index )
      {
        //when both questions in index
        let first_question = this.Questions[first_question_index];
        let second_question = this.Questions[second_question_index];
        Vue.set(this.Questions , first_question_index , second_question);
        Vue.set(this.Questions , second_question_index , first_question);
      }
      else
      {
        alert(`The numbers not in index`);
      }
      this.change_questions = false;
    },
    PushQuestionToIndex: function()
    {
      let first_question_index = this.question_to_replace.first;
      let first_question = this.Questions[first_question_index];
      let question_index_to_push = this.question_to_replace.second;
      this.Questions.splice(question_index_to_push , 0 , first_question);
    }
  },
  computed: {
    ...mapState([
      'questionnaire'
    ]),
    ...mapGetters([
      'questions',
      'questionnaire_name'
    ])
  },
  beforeUpdate() {
    this.Name = this.questionnaire_name;
    this.Questions = this.questions;
  },
}
</script>
<style>
.question_border {
  border:1px solid #6d6c6c62;
}
</style>
