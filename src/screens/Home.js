import React from 'react';
import styled from "@emotion/styled/macro";
import {Link} from '@reach/router';
import useHttp from '../Hooks/http';

const Button = styled.button`
  margin: 20px;
  padding: 4px;
  width: 100%;
  text-align: center;
  display: ${props => props.error || props.isLoading ? 'none' : 'block'}
`

const Section = styled.section`
  width: 500px;
  margin: 0px auto;
  display: flex;
  justify-content: center;
`

const Home = () => {

  const { isLoading, error, data, sendRequest } = useHttp();
  const createGame = async () => {
    await sendRequest();
  }

  return (
    <Section>
      <article>
        <h3>Play a game of puns with your friends.</h3>
        <ol>
          <li>Create a new game by clicking on the button 'Create Game'</li>
          <li>Share the link with your friends</li>
          <li>Invite 4 people per game</li>
          <li>Enter the game by clicking on the link</li>
        </ol>
        {error && <div>Something went wrong</div>}
        {isLoading && <div>Loading...</div>}
        {data === null ? 
        (
          <Button isLoading={isLoading} error={error} onClick={() => createGame()}>Create Game</Button> 
        ) : 
        (
          <p>
            <Link to={`game/${data.gameId}`}>Go to Game</Link>
          </p>
        )}
        
      </article>
    </Section>
  )
}

export default Home;
