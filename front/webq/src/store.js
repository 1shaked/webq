import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios');

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    archive_files: ['a' , 'f'],
    questionnaires_names : [],
    questionnaire : {"name": "aaa" , questions : [
      //{"type": "text", "content": "תוכן לדוגמא", "name": "a", "dataType": "text", "required": true, "textSize": 16, "rowSize": 10, "rows": "1", "label": "sadasd", "class": ""}
    ]}
  },
  getters: {
    questions : (state) =>
    {
      return state.questionnaire.questions;
    },
    questionnaire_name: (state) =>
    {
      return state.questionnaire.name;
    }
  },
  mutations: {
    SetQuestionsersNamesM: (state , names) =>
    {
      console.log(names);
      Vue.set(state , 'questionnaires_names' , names)
    },
    SetMainQuestionnaireM : (state , questionnaire) =>
    {
      Vue.set(state, 'questionnaire' , questionnaire);
      
    },
    RemoveQuestionnaireM: (state , q_name) =>
    {
      let index = state.questionnaires_names.indexOf(q_name);
      Vue.delete(state.questionnaires_names , index);
    },
    DuplicateQuestionnaireM: (state , new_name) =>
    {
      let index_to_push = state.questionnaires_names.length;
      Vue.set(state.questionnaires_names , index_to_push , new_name);
    }
  },
  actions: {
    submitForm ({commit} , form)
    {
      axios.post('/actions/posts/create_questionnaire' , { questionnaire : form })
      .then(respond =>
      {
        console.log('the respond is');
        console.log(respond);
      });
    },
    SetQuestionnairesNames ({commit})
    {
      axios.get('/actions/get/questionnaires_names')
      .then(respond =>
      {
        console.log(respond);
        commit('SetQuestionsersNamesM', respond.data);
      });
    },
    SetQuestionnaire({commit , state} , q_name)
    {
      console.log(q_name);
      Vue.set(state.questionnaire , name , q_name);
      return new Promise((resolve , reject) =>
      {
        axios.get('/actions/get/questionnaire_details' , {params : {questionnaire : q_name}})
        .then(respond =>
        {
          console.log(respond);
          //commit('SetMainQuestionnaireM' , respond.data);
          let questionnaire = respond.data;
          Vue.set(state, 'questionnaire' , questionnaire);
          resolve(respond);
        });
      });
      
    },
    DeleteQuestionnaire({commit} , q_name)
    {
      axios.delete('/action/deletes/questionnaire' , { data : {name : q_name}} )
      .then(respond =>
        {
          console.log(respond);
          commit('RemoveQuestionnaireM' , q_name);
        });
    },
    SubmitQuestionnaire({commit} , form)
    {
      //obj look like {name , answers}
      axios.post('/forms/posts/submit_form' , { form })
      .then(respond =>
      {
        console.log('the respond is for submmiting the form');
        console.log(respond);
      });
    },
    SetQuestionnaireAnswers({commit} , q_name)
    {
      //need to set the answer to the repond form the server of what is the answer for q_name
    },
    DuplicateQuestionnaire({commit} , duplicate_obj)
    {
      let source = duplicate_obj.source;
      let new_name = duplicate_obj.new_name;
      axios.post('/actions/posts/duplicate_questionnaire' , { source , new_name})
      .then(respond =>
      {
        console.log('the respond is');
        console.log(respond);
      });
      commit('DuplicateQuestionnaireM' , new_name);
    },
    async ToArchive({commit} , q_name) 
    {
      axios.post('/actions/posts/archive_questionnaire' , { name :q_name})
      .then(res => {
        console.log(res);
        
      })
      commit('RemoveQuestionnaireM', q_name)      
    }
  }
})
