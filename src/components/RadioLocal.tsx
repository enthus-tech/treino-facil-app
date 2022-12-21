import { Radio } from 'native-base'
import React from 'react'

export default function RadioLocal() {
  return (
    <Radio.Group
      name="myRadioGroup"
      padding={10}>
      <Radio value='em casa'>Em casa</Radio>
      <Radio value='academia'>Academia</Radio>
    </Radio.Group>
  )
}
