import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import React from 'react';

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;
