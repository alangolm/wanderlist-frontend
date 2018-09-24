export function getUsers() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(data => dispatch({type: 'GET_USERS', payload: data}))
  }
}

export function addDestination(destinationForm) {
  return (dispatch) => {
    // return fetch -- remember to send this information to the backend
    dispatch({ type: 'ADD_DESTINATION', payload: destinationForm })
  }
}
