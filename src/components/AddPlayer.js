import React from 'react';
import styled from "@emotion/styled";

const Card = styled.div`
  background-color: #F4F4F4;
  box-shadow: -8px 8px 12px rgba(0, 0, 0, 0.25);
  padding: 20px;
`

const Form = styled.form`

  & > label {
    padding: 14px 0px 8px 0px;
    display: inline-block;
  }

  & > input[type='text'] {
    width: 100%;
    padding: 8px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid #333;
  }
`

const Button = styled.input`
  margin-top: 10px;
  width: 210px;
  text-align: center;
  height: 40px;
  background-color: #4FC4CF;
  color: #000;
  box-shadow: none;
  border: 0;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
`

const AddPlayer = (props) => {
  return (
    <Card>
      <h2>Add Player</h2>
      <Form onSubmit={(e) => props.addPlayer(e)}>
        <label htmlFor='playerName'>Enter your name</label><br />
        <input type='text' name='playerName' id='playerName' placeholder='Drew' />
        <Button type='submit' value='Join Game'></Button>
      </Form>
    </Card>
  )
}

export default AddPlayer;