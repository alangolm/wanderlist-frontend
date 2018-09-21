export function getUsers() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/users')
    .then(res => res.json())
    .then(data => dispatch({type: 'GET_USERS', payload: data}))
  }
}
