const initialState = {
  users: [],
  destinations: []
}


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_USERS':
      return {...state, users: action.payload}
    case 'GET_DESTINATIONS':
      return {...state, destinations: action.payload}
    case 'ADD_DESTINATION':
      return {...state, destinations: [...state.destinations, action.payload]}
    default:
      return state
  }
}
