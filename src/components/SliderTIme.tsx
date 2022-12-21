import { Box, Slider, Text } from 'native-base'
import React, { useState } from 'react'

export default function SliderTIme() {
  const [sliderValue, setSliderValue] = useState(45)
  return (
    <Box alignItems="center" w="100%" paddingTop={20}>
      <Slider w="3/4" maxW="300" defaultValue={45} minValue={15} maxValue={90} onChange={e => { setSliderValue(Math.floor(e)) }} accessibilityLabel="tempo de treino" step={5}>
        <Slider.Track>
          <Slider.FilledTrack />
        </Slider.Track>
        <Slider.Thumb />
      </Slider>
      <Text>Tempo: {sliderValue}</Text>
    </Box>
  )
}
