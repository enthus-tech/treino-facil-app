import { observer } from "mobx-react-lite"
import { Text } from "native-base"
import { ActivityIndicator } from "react-native"
import { homeStore } from './store'


const Workout = () => {

  if (homeStore.loading) {
    return <ActivityIndicator />
  }

  return (
    <Text>{homeStore.workout}</Text>
  )
}

export default observer(Workout)