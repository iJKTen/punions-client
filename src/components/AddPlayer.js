import React from 'react';

const AddPlayer = (props) => {
  return (
    <form onSubmit={props.addPlayer}>
      <label htmlFor="playerName">Name</label>
      <input type="text" name="playerName" id="playerName"/>
      <input type="submit" value="Join Game"></input>
    </form>
  )
}

export default AddPlayer;