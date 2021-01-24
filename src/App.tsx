import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { AuthProvider, useAuthContext } from './contexts/AuthContext';
import { RootScreen } from './screens/RootScreen';

const App = () => {
  const { isLoading } = useAuthContext();

  useEffect(() => {
    if (isLoading) {
      SplashScreen.hide();
    }
  }, [isLoading]);

  return (
    <AuthProvider>
      <NavigationContainer>
        <RootScreen />
      </NavigationContainer>
    </AuthProvider>
  );
};

export default App;
