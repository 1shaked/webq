<template>
  <v-container>
    <v-container>
      <v-row class="float-left">
        <v-col cols="12">
          <v-row :align="'start'" :justify="'end'"
          style="position:fixed">
            <!-- <v-card class="ma-3 pa-6" @click="replace_question = true">
                החלף שאלה
            </v-card> -->
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
            v-model="Name"
            label="שם השאלון">
            </v-text-field>
          </v-col>
        </v-row>
        <!--Load questionnaire-->
        <v-row>
          <v-col v-for="(question , index) in Questions" :key="index"
          cols="12" class="question_border">
          <v-row>
            <v-col>
              <span>
                מספר שאלה
                {{ index }}
              </span>
            </v-col>
            <v-col>
              <v-btn @click="ChangeQuestionPosition(index)">
                שנה מיקום שאלה
              </v-btn>
            </v-col>
            <v-col>
              <v-btn @click="ReplaceQuestion(index)">
                החלף שאלות
              </v-btn>
            </v-col>
          </v-row>
          <v-text-field v-show="question.type != 'header'"
            v-model="Questions[index].name"
            label="שם השאלה"
          ></v-text-field>
          <v-text-field
            v-show="question.type != 'header'"
            v-model="Questions[index].content"
            label="תוכן השאלה"
          ></v-text-field>
          <v-row>
            <v-col>
               <v-autocomplete
                  v-show="question.type != 'header'"
                  :items="DataTypes"
                  v-model="Questions[index].dataType"
                  label="סוג מידע">
                </v-autocomplete>
            </v-col>
            <v-col>
              <v-text-field
                v-show="question.type != 'header'"
                v-model="Questions[index].label"
                label="תוכן השאלה השקוף">
              </v-text-field>
            </v-col>
          </v-row>
         
          <v-text-field
            v-show="question.type == 'header'"
            v-model="Questions[index].content"
            label="הכותרת">
          </v-text-field>
          
          <v-text-field 
            v-show="question.dataType == 'text' && question.type == 'text'"
            label="כמות השורות"
            v-model="Questions[index].rows"
            type="number">
          </v-text-field>
          <v-container v-if="question.type == 'radio' || question.type == 'check box'">
            <v-row v-for="(option , option_index) in question.options" :key="option_index">
              <span v-on:click="DeleteOption(index , option_index)">
                <v-icon>fa-minus-square</v-icon>
              </span>
              <v-col>
                <v-text-field
                label="text"
                v-model="question.options[option_index].text">
                </v-text-field>
              </v-col>
              <v-col>
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
            <v-col cols="4">
              <!-- Choose marking option question -->
              <v-autocomplete
                :items="QuestionTypes"
                v-model="Questions[index].type"
                @change="ChangeOption(index)"
                label="סוג שאלה">
              </v-autocomplete>
            </v-col>
            <v-col>
              <v-switch v-model="Questions[index].required" 
              class="mx-2" label="חובה למלא"
              v-show="question.type != 'header'"></v-switch>
            </v-col>
            <v-col>
              <v-btn @click="Bold(index)" class="bold"
              :dark="Questions[index].class.includes('bold')">
                B
              </v-btn>
            </v-col>
            <v-col>
              <v-btn :dark="Questions[index].class.includes('under_line')" 
              @click="UnderLine(index)" class="under_line">
                U
              </v-btn>
            </v-col>
            <v-col>
              <v-btn @click="Italic(index)" class="italic"
              :dark="Questions[index].class.includes('italic')">
                I
              </v-btn>
            </v-col>
        </v-row>
        <v-row>
          <v-col cols="3">
            <!--Delete Question-->
            <v-btn v-on:click="DeleteQuestion(index)">
              <span style="margin-left : 5px;">
                מחק שאלה {{ index }}
              </span>
              <v-icon
              >fa-minus-square</v-icon>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="DuplicateQuestion(index)">
              <span>
                העתק שאלה {{ index }}
              </span>
            </v-btn>
          </v-col>
          <v-col>
            <v-btn @click="AddQuestion(index)">
              הוסף שאלה
            </v-btn>
          </v-col>
        </v-row>
          </v-col>
          <v-col v-on:click="AddQuestion(Questions.length)">
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
        <!--display the questionnaire-->
        <v-row>
          <v-col cols="12">
            <v-row>
              <v-col cols="9">
                <div class="display-1">
                  {{ Name }}
                </div>
              </v-col>
              <v-col cols="3">
                <!-- <v-btn fixed="true" v-on:click="change_questions = true">
                החלף שאלה
              </v-btn>
              <v-btn fixed="true">
                save
              </v-btn> -->
              </v-col>
            </v-row>
            
          </v-col>
          <v-col v-for="(question , index) in Questions" :key="index"
          :cols="question.rowSize">
            <v-list :style="{fontSize : question.textSize + 'px'}">
              <v-list-item>
                מספר שאלה: 
                {{ index }}
              </v-list-item>
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
              <v-list-item :class="question.class">
                תוכן השאלה :
                {{ question.content }}
              </v-list-item>
              <v-list-item v-if="question.type == 'radio' || question.type == 'check box'">
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
          </v-col>
        </v-row>
      </v-col>
      
    </v-row>
    <v-container>
      <v-btn v-on:click="CreateQuestionnaires(true)">
        צור שאלון <v-icon right dark>mdi-cloud-upload</v-icon>
      </v-btn>
    </v-container>
    <v-dialog dark v-model='change_questions'>
          <v-row>
            <v-col cols="12">
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
              <v-text-field
              label="שאלה להחלפה"
              v-model="question_to_replace.second"
              type="number">
            </v-text-field>
            </v-col>
          </v-row>
          </v-dialog>
          <!--שנה מיקום שאלות-->
          <v-dialog v-model="change_question_position">
            <v-row>
              <v-col>
                <h2>שנה את מיקום השאלה</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4>
                  מיקום השאלה החדשה
                </h4>
              </v-col>
              <v-col class="dialog_text_field">
                <v-text-field
                label="מיקום השאלה החדשה"
                type="number"
                v-model="question_to_replace.second">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn v-on:click="PushQuestionToIndex">
                  שנה את מיקום השאלה
                </v-btn>
              </v-col>
              <v-col>
                <v-btn @click="change_question_position = false">
                  בטל ואל תחליף
                </v-btn>
              </v-col>
            </v-row>
          </v-dialog>
          <!--החלף שאלות-->
          <v-dialog v-model="replace_question">
            <v-row>
              <v-col>
                <h2>החלף שאלות</h2>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <h4>
                  מיקום השאלה להחלפה
                </h4>
              </v-col>
              <v-col class="dialog_text_field">
                <v-text-field
                label="מיקום השאלה להחלפה"
                type="number"
                v-model="question_to_replace.second">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col>
                <v-btn v-on:click="ReplaceQuestions">
                  החלף את השאלות
                </v-btn>
              </v-col>
              <v-col>
                <v-btn @click="replace_question = false">
                  בטל ואל תשנה
                </v-btn>
              </v-col>
            </v-row>
          </v-dialog>
  </v-container>
</template>
<script>
import { mapActions , mapState , mapGetters } from 'vuex'
import Vue from 'vue';

export default {
  data() {
    return {
      Name : "",
      change_questions : false,
      replace_question : false,
      change_question_position : false,
      question_to_duplicate : {},
      question_to_replace : {first : null , second : null},
      Questions : [
          {
          type : "text",
          content : "תוכן לדוגמא",
          name : "",
          dataType : '',
          required : true,
          label : "",
          textSize : 16,
          class : '',
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
    AddQuestion : function (index)
    {
      let question_exe = {

                          type : "text",
                          content : "תוכן לדוגמא",
                          name : "",
                          dataType : '',
                          required : true,
                          textSize : 16,
                          class : '',
                          rowSize : 10,
                          options : [
                            {'text' : '' , 'value' : ''}
                          ]
                        };  
      this.Questions.splice(index + 1 , 0 , question_exe);
      //this.Questions.push(question_exe)
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
    CreateQuestionnaires: function(toNav)
    {
      let form_questions = this.Questions.map((question) =>
      {
        if (question.type == 'text' || question.type == 'header')
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
      if (toNav) {
        this.$router.push({ path: '/' });
        
      }
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
      this.replace_question = false;
    },
    PushQuestionToIndex: function()
    {
      let first_question_index = this.question_to_replace.first;
      let first_question = this.Questions[first_question_index];
      let question_index_to_push = this.question_to_replace.second;

      // when want to delete question
      this.Questions.splice(first_question_index , 1);


      this.Questions.splice(question_index_to_push , 0 , first_question);
      this.change_questions = false;
      this.change_question_position = false;
    },
    Bold: function(question_index)
    {
      //
      let question_class = this.Questions[question_index].class || ''
      
      if (question_class.includes('bold') )
      {
        question_class = question_class.replace('bold' , '');
        Vue.set(this.Questions[question_index] , 'class' , question_class );
      }
      else
      {
        question_class = question_class + ' bold'
        Vue.set(this.Questions[question_index] , 'class' , question_class );
      }
      console.log(this.Questions[question_index]);
    },
    UnderLine(question_index)
    {
      let question_class = this.Questions[question_index].class || ''
      if (question_class.includes('under_line'))
      {
          //we want to remove the under line
          question_class = question_class.replace('under_line' , '');
          Vue.set(this.Questions[question_index] , 'class' , question_class );
          //console.log(this.$refs['under_line'].classList.add('dark'));
          return false;
      }
      else
      {
        question_class = question_class + ' under_line'
        Vue.set(this.Questions[question_index] , 'class' , question_class );
        //console.log(this.$refs['under_line'].classList.add('dark'));
        return true;
      }
      console.log(this.Questions[question_index]);
    },
    Italic(question_index)
    {
      let question_class = this.Questions[question_index].class || ''
      
      if (question_class.includes('italic') )
      {
        question_class = question_class.replace('italic' , '');
        Vue.set(this.Questions[question_index] , 'class' , question_class );
      }
      else
      {
        question_class = question_class + ' italic'
        Vue.set(this.Questions[question_index] , 'class' , question_class );
      }
    },
    ReplaceQuestion(index)
    {
      
      this.question_to_replace.first = index;
      this.replace_question = true;
    },
    ChangeQuestionPosition(index)
    {
      this.question_to_replace.first = index;
      this.change_question_position = true;
    },
    DuplicateQuestion(index)
    {
      let question = Object.assign({} , this.Questions[index] ) ;
      this.Questions.splice(index, 0 , question);
    },
    ChangeOption(index)
    {
      console.log(this.Questions);
      
      let qt_type = this.Questions[index].type.value
      if ( qt_type != 'header' && qt_type != 'text'  )
      {
        let question = Object.assign({} , this.Questions[index] ) ;
        if ( !('options' in question) )
        {
          console.log('added otipon');
          
          question.options =  [
                              {'text' : '' , 'value' : ''}
                              ]
          Vue.set(this.Questions , index , question );
          console.log(this.Questions[index]);
        }
      }
      
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
  mounted()
  {
    if (this.questionnaire_name != undefined)
    {
      
      this.Name = this.questionnaire_name;
      this.Questions = this.questions;
    }
  }
}
</script>
<style >
.v-dialog {
  background-color: rgb(57, 196, 214);
  color: black;
}
.question_border {
  border:1px solid #6d6c6c62;
  margin: 8px;
}
.bold {
  font-weight: bold;
}
.under_line {
  text-decoration: underline;
}
.italic {
  font-style: italic; 
}
.col {
  padding-top: 1px;
  padding-bottom: 2px;
}
.action {
  position: fixed
}
</style>
