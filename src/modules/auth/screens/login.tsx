import { Box, Button } from 'native-base';
import { authStore } from '../store';

export const LoginScreen = () => {
  return (
    <Box flex={1} justifyContent="center" alignItems="center">
      <Button onPress={() => authStore.loginLogoff()}>Log in</Button>
    </Box>
  );
};
