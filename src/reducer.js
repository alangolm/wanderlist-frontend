const initialState = {
  destinations: [],
  selectedDestination: null
}


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_USERS':
      return {...state, users: action.payload}
    case 'GET_DESTINATIONS':
      return {...state, destinations: action.payload}
    case 'ADD_DESTINATION':
      return {...state, destinations: [...state.destinations, action.payload]}
    case 'EDIT_DESTINATION':
      const updatedDestination = state.destinations.find(destination => {
        return destination.id === action.payload.id
      })
      const index = state.destinations.indexOf(updatedDestination)
      const newDestinations = [...state.destinations]
      newDestinations[index] = action.payload
      return {...state, destinations: newDestinations}

    default:
      return state
  }
}
