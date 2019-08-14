import React, { useState } from 'react'
import styled from 'styled-components'

import {
  checkIfAllPancakesAreHappy,
  generateRandomPancakeStack,
  flipPancakes,
  sortPancakeStack
} from './utils'

import {
  Container,
  ControlPanel,
  GenerateButton,
  StepButton,
  SortButton,
  Input,
  StatsContainer,
  StatBox,
  PancakesContainer,
  Pancake
} from './styles'

const CenteredText = styled.p`
  text-align: center;
`

export const SingleStackPancakeSorter = () => {
  const [numberOfPancakesToGenerate, setNumberOfPancakesToGenerate] = useState(5)
  const [pancakes, setPancakes] = useState('++++++')
  const [pancakeFlipCount, setFlipCount] = useState(0)
  const [areAllPancakesHappy, setAreAllPancakesHappy] = useState(true)

  return (
    <Container>

      <ControlPanel>
        <GenerateButton onClick={() => {
          const newPancakes = generateRandomPancakeStack(numberOfPancakesToGenerate)
          setPancakes(newPancakes)
          setAreAllPancakesHappy(checkIfAllPancakesAreHappy(newPancakes))
          setFlipCount(0)
        }}>
          Generate Pancakes:
        </GenerateButton>
        <Input
          onChange={({ target}) => setNumberOfPancakesToGenerate(target.value)}
          type='number'
          min='0'
          defaultValue={numberOfPancakesToGenerate}
        />
        <StepButton onClick={() => {
          const sortedPancakes = flipPancakes(pancakes)
          setPancakes(sortedPancakes)
          setAreAllPancakesHappy(checkIfAllPancakesAreHappy(sortedPancakes))
          setFlipCount(pancakeFlipCount + 1)
          }}
          disabled={areAllPancakesHappy}
        >
          Single Flip
        </StepButton>
        <SortButton onClick={() => {
          const {pancakes: sortedPancakes, flipCount } = sortPancakeStack(pancakes, pancakeFlipCount)
          setAreAllPancakesHappy(checkIfAllPancakesAreHappy(sortedPancakes))
          setPancakes(sortedPancakes)
          setFlipCount(flipCount)
          }}
          disabled={areAllPancakesHappy}
        >
          Sort
        </SortButton>
      </ControlPanel>

      <StatsContainer>
          <StatBox>
            <p>Flip Count: {pancakeFlipCount}</p>
            <img src='https://image.flaticon.com/icons/png/512/83/83532.png' alt='spatula' />
          </StatBox>
          <StatBox>
            <p>Are all pancakes happy? {areAllPancakesHappy ? 'Yes' : 'No'}</p>
            <img
              src={areAllPancakesHappy ? 'https://image.flaticon.com/icons/png/512/25/25361.png' : 'https://static.thenounproject.com/png/319226-200.png'}
              alt='face'
            />
          </StatBox>
      </StatsContainer>
      <PancakesContainer>
        {pancakes.split('').map((pancake) => <Pancake isHappy={pancake === '+'} />)}
        <CenteredText>{pancakes}</CenteredText>
      </PancakesContainer>
    </Container>
  )
}

export default SingleStackPancakeSorter
