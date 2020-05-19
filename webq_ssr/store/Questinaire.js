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

// style all upper case for mutations , var are camelCase
export const mutations = {
  [DELETE_QUESTION] (state, index) {
    state.questinaire.questions.splice(index, 1)
  },
  [REPLACE_QUESTIONS] (state, { first, second }) {
    const firstQuestion = state.questinaire.questions[first]
    const secondQuestion = state.questinaire.questions[second]
    Vue.set(state.questinaire.questions, first, secondQuestion)
    Vue.set(state.questinaire.questions, second, firstQuestion)
  },
  [PUSH_QUESTION_TO_INDEX] (state, { fromIndex, toIndex }) {
    const fromEl = state.questinaire.questions[fromIndex]
    state.questinaire.questions.splice(toIndex, 1, fromEl)
    state.questinaire.questions.splice(toIndex, 1)
  },
  [DUPLICATE_QUESTION] (state, { questionIndex }) {
    const question = Object.assign({}, state.questinaire.questions[questionIndex])
    state.questinaire.questions.splice(questionIndex + 1, 0, question)
  },
  [ADD_STYLE_TO_QUESTION] (state, { questionIndex, style }) {
    // adding the style by the spread oprator
    state.questinaire.questions[questionIndex].style = {
      ...state.questinaire.questions[questionIndex].style,
      ...style
    }
  },
  [ADD_OPTION_TO_QUESTION] (state, index) {
    state.questinaire.questions[index].options.push({ text: 'test', value: 'value' })
  },
  [DELETE_OPTION_FROM_QUESTION] (state, { questionIndex, optionIndex }) {
    state.questinaire.questions[questionIndex].options.splice(optionIndex, 1)
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
