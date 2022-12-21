import { NavigationContainer } from '@react-navigation/native';
import * as Localization from 'expo-localization';
import { observer } from 'mobx-react-lite';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { i18n } from './src/base/translations/translate';
import { AppNavigation } from './src/navigation';



i18n.locale = Localization.locale
function App() {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <AppNavigation />
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

export default observer(App);
