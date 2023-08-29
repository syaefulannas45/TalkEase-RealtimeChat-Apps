import {NavigationContainer} from '@react-navigation/native';
import Router from './router';
import React from 'react';
import FlashMessage from 'react-native-flash-message';
import {Provider, useSelector} from 'react-redux';
import store, {RootState} from './redux/store';
import {Loading} from './components';

const MainApp: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.loading.isLoading);
  return (
    <>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
      <FlashMessage position="top" />
      {isLoading && <Loading />}
    </>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;
