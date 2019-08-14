import React from 'react';
import styled from 'styled-components'

import SingleStackPancakeSorter from './single-stack-pancake-sorter.js'
import MultiStackPancakeSorter from './multi-stack-pancake-sorter.js'

const PageContainer = styled.div`
  position: relative;
  display: flex;
  flex-flow: row wrap
  align-items: flex-start;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #f6e6b4 0%,#ed9017 100%);
  overflow: scroll;
  padding-bottom: 120px;
`

const PageHeader = styled.h1`
  flex: 1 1 100%;
  margin: 16px;
  text-align: center
`

const AppContainer = styled.div`
  flex: 0 1 480px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  border: 1px solid gray;
  overflow: hidden;
`

function PancakesRevengeApp() {
  return (
    <PageContainer>
      <PageHeader>Pancakes Revenge</PageHeader>
      <AppContainer>
        <SingleStackPancakeSorter />
        <MultiStackPancakeSorter />
      </AppContainer>
    </PageContainer>
  );
}

export default PancakesRevengeApp;
