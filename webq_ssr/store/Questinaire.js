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
  SET_QUESTINAIRE_NAME,
  ADD_QUESTION,
  SET_QUESTION_OPTION_BY_INDEX,
  DELETE_QUESTION_OPTION_BY_INDEX
} from '~/mutations/Questinaire'
import contentTypes from '~/storeAssetes/contentTypes'
import defaultQuestion from '~/storeAssetes/defaultQuestion'

// style camelCase
export const state = () => ({
  questinaire: {
    name: 'aaa',
    content: [
      JSON.parse(JSON.stringify(defaultQuestion)),
      JSON.parse(JSON.stringify(defaultQuestion))
    ]
  }
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
  }
}

// style all upper case for mutations , var are camelCase
export const mutations = {
  [ADD_QUESTION] (state, index) {
    state.questinaire.content.splice(index + 1, 0, JSON.parse(JSON.stringify(defaultQuestion)))
  },
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
    Vue.set(state.questinaire.content[index], 'type', JSON.parse(JSON.stringify(contentParameters)))
  },
  [ADD_STYLE_TO_QUESTION] (state, { questionIndex, styleObj }) {
    Vue.set(state.questinaire.content[questionIndex].style, styleObj.key, styleObj.value)
  },
  [ADD_OPTION_TO_QUESTION] (state, index) {
    if (!state.questinaire.content[index].options) {
      Vue.set(state.questinaire.content[index], 'options', [])
    }
    state.questinaire.content[index].options.push({ text: 'test', value: 'value' })
  },
  [DELETE_OPTION_FROM_QUESTION] (state, { questionIndex, optionIndex }) {
    state.questinaire.content[questionIndex].options.splice(optionIndex, 1)
  },
  [SET_QUESTINAIRE] (state, questinaire) {
    Vue.set(state, 'questinaire', questinaire)
  },
  [SET_QUESTINAIRE_NAME] (state, name) {
    Vue.set(state.questinaire, 'name', name)
  },
  [SET_QUESTION_OPTION_BY_INDEX] (state, { questionIndex, optionIndex, text, value }) {
    Vue.set(state.questinaire.content[questionIndex].options[optionIndex], 'text', text)
    Vue.set(state.questinaire.content[questionIndex].options[optionIndex], 'value', value)
  },
  [DELETE_QUESTION_OPTION_BY_INDEX] (state, { questionIndex, optionIndex }) {
    state.questinaire.content[questionIndex].options.splice(optionIndex, 1)
  }
}

// style CamelCase ( paramName )
export const actions = {
  GetQuestinaire ({ commit }, name) {

  }
}
