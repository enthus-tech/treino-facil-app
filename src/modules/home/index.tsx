import { useNavigation } from '@react-navigation/native';
import { Button, Center, ScrollView } from 'native-base';
import { useState } from 'react';
import RadioLocal from '../../components/RadioLocal';
import { SelectTrain } from '../../components/SelectTrain';
import SliderTIme from '../../components/SliderTIme';

export interface FilterProps {
  handleFilters: (key: string, value: string) => void
}


export const Home = () => {
  const [filters, setFilters] = useState({})
  const navigation = useNavigation()

  const handleFilters = (key: string, value: string) => {
    const filter = { [key]: value };



    setFilters({ ...filters, ...filter });
    console.log(filters);
  }

  return (
    <ScrollView backgroundColor={'red.100'}>
      <SelectTrain handleFilters={handleFilters} />
      <SliderTIme handleFilters={handleFilters} />
      <RadioLocal handleFilters={handleFilters} />
      <Center>
        <Button onPress={() => console.log('reste')}
          maxW="100">
          Gerar treino
        </Button>
      </Center>

    </ScrollView>
  )
};