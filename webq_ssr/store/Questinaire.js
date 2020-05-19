import Vue from 'vue'
import {
  SET_QUESTINAIRE,
  DELETE_QUESTION,
  REPLACE_QUESTIONS,
  ADD_OPTION_TO_QUESTION,
  ADD_STYLE_TO_QUESTION,
  DELETE_OPTION_FROM_QUESTION,
  PUSH_QUESTION_TO_INDEX,
  DUPLICATE_QUESTION
} from '~/mutations/Questinaire'

// style camelCase
export const state = () => ({
  questinaire: {
    name: 'aaa',
    questions: [{ type: 'text', content: 'kkkksksk', name: 'aaaa', dataType: 'int', required: true, textSize: 16, class: ' bold under_line', rowSize: 10, label: 't' }]
  }
})

export const getters = {

}

// style all upper case
export const mutations = {
  [DELETE_QUESTION] (state, index) {

  },
  [REPLACE_QUESTIONS] (state, { first, second }) {

  },
  [ADD_OPTION_TO_QUESTION] (state, index) {

  },
  [DELETE_OPTION_FROM_QUESTION] (state, { questionIndex, optionIndex }) {

  },
  [PUSH_QUESTION_TO_INDEX] (state, { origin, newIndex }) {

  },
  [ADD_STYLE_TO_QUESTION] (state, { questionIndex, style }) {

  },
  [DUPLICATE_QUESTION] (state, { questionIndex }) {

  },
  [SET_QUESTINAIRE] (state, questinaire) {
    Vue.set(state, 'questinaire', questinaire)
    state.questinaire = { ...questinaire }
    // TODO: choose one of the two options
  }
}

// style CamelCase ( paramName )
export const actions = {
  GetQuestinaire ({ commit }, name) {

  }
}
