import { INIT, LOAD } from './types'

export default (state = { init: false, load: [] }, action) => {
  console.log(action)
  switch (action.type) {
    case INIT: {
      return {
        ...state,
        init: action.payload,
      }
    }
    case LOAD: {
      return {
        ...state,
        load: action.payload,
      }
    }
    default:
      return state
  }
}
