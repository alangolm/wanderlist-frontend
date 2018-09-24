import React from 'react'
import NewDestinationForm from './NewDestinationForm'

const AddDestinationButton = (props) => {

  const handleClick = () => {
    // return <NewDestinationForm />
    console.log("hello");
  }


  return (
    <button value="Add Destination" onClick={props.handleClick}>
      Add Destination
    </button>
  )
}

export default AddDestinationButton
