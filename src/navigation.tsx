import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { observer } from 'mobx-react-lite';
import { AuthNavigation } from './modules/auth/navigation';
import { authStore } from './modules/auth/store';
import { HomeNavigation } from './modules/home/navigation';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <Tab.Navigator initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeNavigation} options={{ title: 'Treino fácil' }} />
    </Tab.Navigator>
  );
};

const StackNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      {authStore.isLogged ? (
        <Stack.Screen name="Home" component={TabNavigation} />
      ) : (
        <Stack.Screen name="Auth" component={AuthNavigation} />
      )}
    </Stack.Navigator>
  );
};

export const AppNavigation = observer(StackNavigation);
