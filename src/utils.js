export const checkIfAllPancakesAreHappy = (pancakes) => !pancakes.includes('-')

export const generateSinglePancake = () => Math.ceil(Math.random() * 2) - 1 ? '+' : '-'

export const generateRandomPancakeStack = (numberOfPancakesToGenerate) => {
  let newPancakes = ''
  while (newPancakes.length < numberOfPancakesToGenerate) {
    newPancakes = newPancakes + generateSinglePancake()
  }
  return newPancakes
}
export const flipValue = (value) => value === '-' ? '+' : '-'

export const flipPancakes = (pancakes) => {
    const pancakesAsArray = pancakes.split('')
    const firstPancake = pancakes[0]
    const indextToFlipAt = pancakes.indexOf(flipValue(firstPancake))
    const amountToFlip = indextToFlipAt === -1 ? pancakes.length : indextToFlipAt

    const pancakesThatGetFlipped = pancakesAsArray.slice(0, amountToFlip).reverse().map((value) => flipValue(value))
    const pancakesThatStay = pancakesAsArray.slice(amountToFlip);

    const updatedPancakes = [...pancakesThatGetFlipped, ...pancakesThatStay].join('')

    return  updatedPancakes
  }

  export const sortPancakeStack = (pancakes, flipCount = 0) => {
    let sortedPancakes = pancakes
    let newFlipCount = flipCount
    while(!checkIfAllPancakesAreHappy(sortedPancakes)) {
        sortedPancakes = flipPancakes(sortedPancakes)
        newFlipCount = newFlipCount + 1
    }
    return {
      pancakes: sortedPancakes,
      flipCount: newFlipCount
    }
  }

  export const sortPancakeStacks = (pancakeStacks) => {
    const pancakeStacksAsArray = pancakeStacks.split(',')
    const sortedStacks = pancakeStacksAsArray.map((stack) => {
      const { pancakes, flipCount } = sortPancakeStack(stack)
      return {
        originalStack: stack,
        sortedStack: pancakes,
        flipCount
      }
    })
    return sortedStacks
  }