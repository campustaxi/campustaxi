import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

declare const global: {HermesInternal: null | {}};

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return <></>;
};

export default App;
