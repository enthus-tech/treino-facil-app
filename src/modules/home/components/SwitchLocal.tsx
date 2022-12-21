import { HStack, Switch, Text } from 'native-base'
import React from 'react'
import { FilterProps } from '..'

export default ({ handleFilters }: FilterProps) => {
  const handleValue = (e: boolean) => {

    handleFilters('space', e ? 'em casa' : 'academia')
  }

  return (
    <HStack alignItems="center" space={4}>
      <Text>Em casa</Text>
      <Switch size="sm" onValueChange={handleValue} />
    </HStack>

    // <Box>

    //   <Radio.Group
    //     name="myRadioGroup"
    //     padding={10}
    //     onChange={handleValue}>
    //     <Radio value='em casa'>Em casa</Radio>
    //     <Radio value='academia'>Academia</Radio>
    //   </Radio.Group>

    // </Box>
  )
}
