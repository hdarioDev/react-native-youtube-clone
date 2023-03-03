/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {DarkTheme, NavigationContainer} from '@react-navigation/native';

import {useColorScheme} from 'react-native';

import Tabs from './src/navigation/Tabs';

const App = () => {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };
  const scheme = useColorScheme();
  console.log(scheme);

  return (
    // <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
    <NavigationContainer theme={DarkTheme}>
      <Tabs />
    </NavigationContainer>
  );
};

export default App;
