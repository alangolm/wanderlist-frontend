export function getUsers() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(data => dispatch({type: 'GET_USERS', payload: data}))
  }
}

export function addDestination(destinationForm) {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/destinations', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        destination: destinationForm
      })
    })
    .then(res => res.json())
    .then(json => dispatch({ type: 'ADD_DESTINATION', payload: json }))
  }
}

export function getDestinations() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/destinations')
    .then(res => res.json())
    .then(data => dispatch({ type: 'GET_DESTINATIONS', payload: data }, console.log("this is the data from the backend:", data)))
  }
}
