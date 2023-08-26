import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import {fonts} from './src/utils';

const App = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {
    fontFamily: fonts[400],
  },
});
