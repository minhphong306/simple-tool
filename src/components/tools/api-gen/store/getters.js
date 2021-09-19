import { GET_MODEL_STRUCTURE } from './types'

export const getters = {
  [GET_MODEL_STRUCTURE](state, id) {
    return state.models[id]
  },
}
