import { Box, Center, Select } from 'native-base'
import React from 'react'

export const SelectTrain = () => {
  return (
    <Center>
      <Box maxW="300" paddingTop={10}>
        <Select minWidth="300" accessibilityLabel="Escolha seu treino" placeholder="Escolha seu treino">
          <Select.Item label="Peitoral" value="Peitoral" />
          <Select.Item label="Dorsal" value="Dorsal" />
          <Select.Item label="Membro Inferior" value="Membro Inferior" />
          <Select.Item label="Biceps" value="Biceps" />
          <Select.Item label="Triceps" value="Triceps" />
          <Select.Item label="Ombro" value="Ombro" />
        </Select>
      </Box>
    </Center>
  )
}
