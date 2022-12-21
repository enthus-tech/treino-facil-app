import { Box, Slider, Text } from 'native-base'
import React, { useState } from 'react'
import { FilterProps } from '../modules/home'

export default function SliderTIme({ handleFilters }: FilterProps) {

  const [sliderValue, setSliderValue] = useState(45)
  const handleValue = (e: number) => {

    setSliderValue(e)
    const valueString = e.toString()
    handleFilters('tempo', valueString)
  }

  return (
    <Box alignItems="center" w="100%" paddingTop={20}>
      <Slider w="3/4" maxW="300" defaultValue={45} minValue={15} maxValue={90} onChange={handleValue} accessibilityLabel="tempo de treino" step={5}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text>Tempo: {sliderValue}</Text>
    </Box>
  )
}
