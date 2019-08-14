import React, { useState } from 'react'
import styled from 'styled-components'

import { sortPancakeStacks } from './utils'

import {
  Container,
  ControlPanel,
  SortButton,
  StatsContainer,
  StatBox,
  InputFull
} from './styles'

const Header = styled.h1`
  width: 100%;
  text-align: center;
`


export const PancakeFactory = () => {
  const [pancakeStacks, setPancakeStacks] = useState([])
  const [pancakeStacksResults, setPancakeStacksResults] = useState([])
  const [numberOfTestCases, setNumberOfTestCases] = useState(0)

  // Ensure only '-', '+' and ',' are input
  const cleanAndSetInput = (value) => {
    const filtered = value.split('').filter((value) => value.match(/[-+,]/))
    setPancakeStacks(filtered.join(''))
    setNumberOfTestCases(value.split(',').length)
  }

  return (
    <Container>
      <Header>Sort multiple stacks of pancakes at once!!</Header>
      <p>
        Enter in your pancakes in a comma seporated list. '+'
        being happy side up and '-' being plain side up.
      </p>
      <small>Only '-', '+', ',' are allowed in the input. Ex '--,++,--++-+'</small>
      <ControlPanel>
        <InputFull
          onChange={({ target }) => cleanAndSetInput(target.value)}
          value={pancakeStacks}
        />
        <SortButton onClick={() => setPancakeStacksResults(sortPancakeStacks(pancakeStacks))}>
          Sort Stacks
        </SortButton>
      </ControlPanel>
      <StatsContainer>
        {pancakeStacksResults.map(({originalStack, flipCount}, index) => (
          <StatBox key={index}>
            <p>Case # {index + 1}</p>
            <p>Original Stack:</p>
            <strong>{originalStack}</strong>
            <p>Minimum Flip Count: {flipCount}</p>
          </StatBox>
        ))}
      </StatsContainer>
      <p>Number of test cases: {numberOfTestCases}</p>
    </Container>
  )
}

export default PancakeFactory
