import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'native-base';
import { LoginScreen } from './screens/login';

const Stack = createNativeStackNavigator();

export const AuthNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
