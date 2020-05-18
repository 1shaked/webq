import {
  SET_FOLDERS,
  SET_START_FOLDER
} from '~/mutations/RoutesManeger'
export const state = () => ({
  startFolder: '',
  folders: ['Main']
})

export const mutations = {
  [SET_FOLDERS] (state, folders) {

  },
  [SET_START_FOLDER] (state, startFolder) {

  }
}

export const actions = {
  GetFolders ({ commit }, folder) {

  }
}
