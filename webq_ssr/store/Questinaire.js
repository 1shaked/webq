import Vue from 'vue'
import {
  SET_QUESTINAIRE,
  DELETE_QUESTION,
  REPLACE_CONTENT,
  ADD_OPTION_TO_QUESTION,
  ADD_STYLE_TO_QUESTION,
  DELETE_OPTION_FROM_QUESTION,
  PUSH_QUESTION_TO_INDEX,
  DUPLICATE_QUESTION,
  CHANGE_CONTENT_PARAMETER,
  TOGGLE_VIEW_STATE
} from '~/mutations/Questinaire'
import contentTypes from '~/storeAssetes/contentTypes'

// style camelCase
export const state = () => ({
  questinaire: {
    name: 'aaa',
    content: [
      { type: 'textQuestion', content: 'kkkksksk', name: 'aaaa', dataType: 'int', required: true, label: 't', style: { } },
      { type: 'textQuestion', content: 'test me', name: 'my name', dataType: 'text', required: true, label: 'test label', style: { } }
    ]
  },
  view: 'edit'
})

// camelCase
export const getters = {
  questinaireName: (state) => {
    return state.questinaire.name
  },
  contentTypes: (state) => {
    return contentTypes
  },
  questinaireContent: (state) => {
    return state.questinaire.content
  },
  questinaireContentByIndex: state => (index) => {
    return state.questinaire.content[index]
  },
  questinaireContentItemsLen: (state) => {
    return state.questinaire.content.length
  }
}

// style all upper case for mutations , var are camelCase
export const mutations = {
  [DELETE_QUESTION] (state, index) {
    state.questinaire.content.splice(index, 1)
  },
  [REPLACE_CONTENT] (state, { first, second }) {
    const firstQuestion = state.questinaire.content[first]
    const secondQuestion = state.questinaire.content[second]
    Vue.set(state.questinaire.content, first, secondQuestion)
    Vue.set(state.questinaire.content, second, firstQuestion)
  },
  [PUSH_QUESTION_TO_INDEX] (state, { fromIndex, toIndex }) {
    const fromEl = state.questinaire.content[fromIndex]
    state.questinaire.content.splice(toIndex, 1, fromEl)
    state.questinaire.content.splice(toIndex, 1)
  },
  [DUPLICATE_QUESTION] (state, { questionIndex }) {
    const question = Object.assign({}, state.questinaire.content[questionIndex])
    state.questinaire.content.splice(questionIndex + 1, 0, question)
  },
  [CHANGE_CONTENT_PARAMETER] (state, { index, contentParameters }) {
    for (const [key, value] of Object.entries(contentParameters)) {
      Vue.set(state.questinaire.content[index], key, value)
    }
  },
  [ADD_STYLE_TO_QUESTION] (state, { questionIndex, styleObj }) {
    Vue.set(state.questinaire.content[questionIndex].style, styleObj.key, styleObj.value)
  },
  [ADD_OPTION_TO_QUESTION] (state, index) {
    state.questinaire.content[index].options.push({ text: 'test', value: 'value' })
  },
  [DELETE_OPTION_FROM_QUESTION] (state, { questionIndex, optionIndex }) {
    state.questinaire.content[questionIndex].options.splice(optionIndex, 1)
  },
  [SET_QUESTINAIRE] (state, questinaire) {
    Vue.set(state, 'questinaire', questinaire)
    state.questinaire = { ...questinaire }
    // TODO: choose one of the two options
  },
  [TOGGLE_VIEW_STATE] (state) {
    state.view = state.view === 'edit' ? 'preview' : 'edit'
  }
}

// style CamelCase ( paramName )
export const actions = {
  GetQuestinaire ({ commit }, name) {

  }
}
