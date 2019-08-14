import styled from 'styled-components'

export const Container = styled.div`
  margin-bottom: 24px;
  border-bottom: 4px solid gray;
  &:last-child {
    border-bottom: none;
  }

  & > p, & > small {
    padding: 0 8px;
  }
`

export const ControlPanel = styled.div`
  display: flex;
  align-items: stretch;
  border-bottom: 2px solid gray;
`

export const Button = styled.button`
  border: none;
  min-width: 40px;
  font-size: 16px;
`

export const GenerateButton = styled(Button)`
  background-color: #e7833c;
`

export const StepButton = styled(Button)`
  margin-left: auto;
  background-color: #ff6758;
`

export const SortButton = styled(Button)`
  background-color: #ff2813;
`

export const Input = styled.input`
  width: 40px;
  padding: 0 8px;
  border: none;
  border-right: solid 1px gray;
  font-size: 16px;
`

export const InputFull = styled.input`
  flex: 1 1 auto;
`

export const StatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export const StatBox = styled.div`
  flex: 1 1 40px;
  padding: 16px;
  border-right: 1px solid gray;
  border-bottom: 1px solid gray;
  text-align: center;
  &&:last-child {
    border-right: none;
  }

  p {
    margin: 0 0 8px 0;
  }

  img {
    width: 60px;
    height: auto;
  }
`

export const PancakesContainer = styled.div`
  padding: 20px 0;
`
export const Pancake = styled.div`
  height: 20px;
  width: 80px;
  margin: 4px auto;
  background: orange;
  border-bottom: 10px solid brown;
  border-radius: 50%;
  transition: transform 0.2s ease-in-out;
  transform: rotateZ(${({ isHappy }) => isHappy ? '0deg' : '180deg'});

  &::before {
    position: relative;
    top: 2px;
    display: block
    content: '';
    margin: 4px auto;
    width: 16px;
    height: 16px;
    background-image: url('https://image.flaticon.com/icons/png/512/25/25361.png');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`