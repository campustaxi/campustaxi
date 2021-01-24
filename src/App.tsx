import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { LoginNavigation } from './screens/login/LoginNavigation';
import { RootNavigation } from './screens/RootNavigation';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <NavigationContainer>
      {isLoggedIn ? <RootNavigation /> : <LoginNavigation />}
    </NavigationContainer>
  );
};

export default App;
