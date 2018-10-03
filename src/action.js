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

export function editDestination(editForm, id) {
  // debugger
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/destinations/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        destination: {
          title: editForm.title,
          description: editForm.description,
          city: editForm.city,
          state: editForm.state,
          country: editForm.country,
          date: editForm.date
        }
      })
    })
    .then(res => res.json())
    .then(data => dispatch({  type: 'EDIT_DESTINATION', payload: data }))
  }
}

export function addSubEvent(subEvent, id) {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/events', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        event: { ...subEvent, destination_id: id }
      })
    })
    .then(res => res.json())
    .then(json => dispatch({ type: 'ADD_SUB_EVENT', payload: json }))
  }
}

export function addCoordinates(points) {
  return (dispatch) => {
    dispatch({ type: 'ADD_COORDINATES', payload: points })
  }
}

// export function editSubEvent() {
//   return (dispatch) => {
//
//   }
// }
//
// export function deleteDestination() {
//   return (dispatch) => {
//
//   }
// }
//
// export function deleteSubEvent() {
//   return (dispatch) => {
//
//   }
// }
