import { Box, Radio } from 'native-base'
import React from 'react'
import { FilterProps } from '../modules/home'

export default ({ handleFilters }: FilterProps) => {
  const handleValue = (e: string) => {
    handleFilters('space', e)
  }

  return (
    <Box>

      <Radio.Group
        name="myRadioGroup"
        padding={10}
        onChange={handleValue}>
        <Radio value='em casa'>Em casa</Radio>
        <Radio value='academia'>Academia</Radio>
      </Radio.Group>

    </Box>
  )
}
