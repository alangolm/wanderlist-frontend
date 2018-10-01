const initialState = {
  destinations: [],
  coordinates: []
}


export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'GET_DESTINATIONS':
      return {...state, destinations: action.payload}
    case 'ADD_DESTINATION':
      return {...state, destinations: [...state.destinations, action.payload], coordinates: [...state.coordinates, action.payload]}
    case 'EDIT_DESTINATION':
      // here I am finding the destination that I want to edit by its ID and checking if the ID of the destination from the backend matches the ID of the destination that we click on
      const updatedDestination = state.destinations.find(destination => {
        return destination.id === action.payload.id
      })
      // here I am getting the index of the destination that we found in updatedDestination ^^
      const index = state.destinations.indexOf(updatedDestination)
      // spreading the old state.destinations object
      const newDestinations = [...state.destinations]
      // setting the value of new destination object equal to the value of the payload that we are sending in to it
      newDestinations[index] = action.payload
      // setting the state of the destinations key in initialState to be equal to newDestinations which is the updated destination
      return {...state, destinations: newDestinations}
    case 'ADD_SUB_EVENT':
      // here I am finding the destination that we want to be adding events to and making sure it matches the destination id that each event has
      const foundDestination = state.destinations.find(dest => dest.id === action.payload.destination_id)
      // copying the found destination object, and then adding to its events key (which is an array of objects), copying over any previous objects already inside of it by spreading
      // and then passing in the payload which will be the new event objects submitted to the destination
      const editedDest = {...foundDestination, events: [...foundDestination.events, action.payload]}
      // getting the index of the found destination object
      const destId = state.destinations.indexOf(foundDestination)

      const destinations = [...state.destinations.slice(0, destId), editedDest, ...state.destinations.slice(destId + 1)]
      return {...state, destinations: [...state.destinations.slice(0, destId), editedDest, ...state.destinations.slice(destId + 1)] }
    default:
      return state
  }
}
