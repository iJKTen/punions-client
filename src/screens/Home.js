import React from 'react';
import styled from "@emotion/styled/macro";
import useHttp from '../Hooks/http';
import { Link } from 'react-router-dom';

const Button = styled.button`
  width: 210px;
  text-align: center;
  display: ${props => props.error || props.isLoading ? 'none' : 'block'}
  height: 40px;
  background-color: #4FC4CF;
  color: #000;
  box-shadow: none;
  border: 0;
  padding: 10px;
  font-size: 18px;
  cursor: pointer;
`

const Section = styled.section`
  margin: 0px auto;
  display: flex;
  justify-content: center;
  padding-bottom: 25px;
  & > article > p {
    font-size: 18px;
  }
`

const Intro = styled.div`
  text-align: center;
`

const Rules = styled.div`
  background-color: #F0E2E1;
  padding: 25px;
  margin-top: 20px;

  & > h2 {
    padding-left: 30px;
  }

  & > ol > li{
    list-style-type:  none;
    padding: 10px 0px 10px 30px;
  }

  & li.current {
    background-image: url('/images/CurrentlyPlaying.png');
    background-repeat: no-repeat;
    background-position: 4px 13px;
    
  }
`

const DynamicArea = styled.div`
  margin: 40px;
`

const LinkStyle = styled(Link)`
  color: #181818;
  text-decoration: none;
  font-weight: bold;
`

const Home = () => {

  const { status, data, error, sendRequest } = useHttp();
  const createGame = async () => {
    await sendRequest();
  }

  return (
    <Section>
      <article>
        <Intro>
          <p>Is a multi-player game of puns which will make you cry or laugh.</p>
          <p>Create a game by clicking the button below and invite your friends to play.</p>

          <DynamicArea>
            {status === 'initial' &&
              <Button
                error={error}
                onClick={() => createGame()}>
                Create Game
            </Button>
            }

            {status === 'error' && <div>Something went wrong</div>}

            {status === 'loading' && <div>Loading...</div>}

            {status === 'success' &&
              <p>
                <LinkStyle
                  to={`/${data.gameId}`}>
                  https://punions.game/{data.gameId}
                </LinkStyle><br />
                <small>Share the above link with your friends to play.</small>
              </p>
            }
          </DynamicArea>
        </Intro>

        <Rules>
          <h2>Rules</h2>
          <ol>
            <li>Once the game starts do not refresh your page.</li>
            <li>The first player to join plays first.</li>
            <li className='current'>Currently playing player is indicated by an icon on the scoreboard.</li>
            <li>You will be provided a word to make a pun out of it.</li>
            <li>Submit your pun for others to rate via a like or dislike button.</li>
            <li>One like counts as one point.</li>
            <li>After everyone has finished rating the second person to join plays.</li>
            <li>Each player gets 10 words.</li>
            <li>The scoreboard shows all the players and their scores.</li>
            <li>The game ends when each player has played all 10 words and the player with the highest score wins.</li>
          </ol>
        </Rules>
      </article>
    </Section>
  )
}

export default Home;
