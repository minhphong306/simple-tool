import {
  SET_BOARD_STRUCTURE,
  SET_MODEL_STRUCTURE,
  SET_DATA,
  SET_CURRENT_DATA,
  SET_ERROR_MESSAGE,
} from './types'

export const mutations = {
  [SET_BOARD_STRUCTURE](state, payload) {
    state.board = payload
  },

  [SET_MODEL_STRUCTURE](state, payload) {
    if (payload && Array.isArray(payload) && payload.length > 0) {
      payload.forEach((model) => {
        if (model && model.id) {
          state.models[model.id] = model
          return
        }

        console.error('invalid model: ', model)
      })
    } else {
      state.models = []
    }
  },

  [SET_DATA](state, payload) {
    if (payload && Array.isArray(payload)) {
      state.data = payload
      return
    }

    console.error('Invalid payload models structure')
  },

  [SET_CURRENT_DATA](state, payload) {
    state.current = payload
  },

  [SET_ERROR_MESSAGE](state, msg) {
    state.errMsg = msg
  },
}
