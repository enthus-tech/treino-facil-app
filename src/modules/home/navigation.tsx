import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './index';
import { Workout } from './workout';
const Stack = createNativeStackNavigator();

export const HomeNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="home" component={Home} />
      <Stack.Screen name="workout" component={Workout} />
    </Stack.Navigator>
  );
};