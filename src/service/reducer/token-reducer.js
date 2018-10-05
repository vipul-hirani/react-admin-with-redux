import {UPDATE_TOKEN} from './../actions/token-action'

export default function tokenReducer(state = [], action) {
  switch (action.type) {
    case UPDATE_TOKEN:
      return action.payload.token;
    default:
      return state
  }
}
