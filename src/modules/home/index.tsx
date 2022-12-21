import { useNavigation } from '@react-navigation/native';
import { Button, Center, ScrollView } from 'native-base';
import RadioLocal from '../../components/RadioLocal';
import { SelectTrain } from '../../components/SelectTrain';
import SliderTIme from '../../components/SliderTIme';





export const Home = () => {

  const navigation = useNavigation()
  return (
    <ScrollView backgroundColor={'red.100'}>
      <SelectTrain />
      <SliderTIme />
      <RadioLocal />
      <Center>
        <Button onPress={() => navigation.navigate('workout')}
          maxW="100">
          Gerar treino
        </Button>
      </Center>

    </ScrollView>
  )
};