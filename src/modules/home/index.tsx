import { useNavigation } from '@react-navigation/native';
import { Button, Center, ScrollView } from 'native-base';
import { useState } from 'react';
import { SelectTrain } from './components/SelectTrain';
import SliderTIme from './components/SliderTIme';
import SwitchLocal from './components/SwitchLocal';
import { homeStore } from './store';

export interface FilterProps {
  handleFilters: (key: string, value: string) => void
}


export const Home = () => {
  const [filters, setFilters] = useState({ space: 'academia' })
  const navigation = useNavigation()

  const handleFilters = (key: string, value: string) => {
    const filter = { [key]: value };



    setFilters({ ...filters, ...filter });
  }

  return (
    <ScrollView backgroundColor={'red.100'}>
      <SelectTrain handleFilters={handleFilters} />
      <SliderTIme handleFilters={handleFilters} />
      <SwitchLocal handleFilters={handleFilters} />
      <Center>
        <Button onPress={() => homeStore.sendPrompt(filters)}
          maxW="100">
          Gerar treino
        </Button>
      </Center>

    </ScrollView>
  )
};