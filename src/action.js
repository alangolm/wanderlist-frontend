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
    .then(data => dispatch({ type: 'GET_DESTINATIONS', payload: data }))
  }
}

export function editDestination() {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/destinations', {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({

      })
    })
  }
}

export function addSubEvent() {
  return (dispatch) => {

  }
}

export function editSubEvent() {
  return (dispatch) => {

  }
}

export function deleteDestination() {
  return (dispatch) => {

  }
}

export function deleteSubEvent() {
  return (dispatch) => {

  }
}
