import React from 'react';
import {
  Router,
  Switch,
  Route,
  Redirect,
  BackButton,
  DeepLinking,
} from 'react-native-web-router';
import logo from './logo.png';
// eslint-disable-next-line prettier/prettier
// import { HomePage } from './Screens/homeScreen';
import Homescreen1 from './Screens/homescreen1';
import Movies from './Screens/movies';
import MoviesApp from './Screens/moviesApp';
import SearchScreen from './Screens/searchScreen';

// const isNative = Platform.OS !== 'web';

const App = () => {
  // const [wasRotated, setwasRotated] = useState(false);
  // const spinValue = useRef(new Animated.Value(0)).current;
  // const isDarkMode = useColorScheme() === 'dark';

  // const onPress = () => {
  //   setwasRotated(!wasRotated);
  //   Animated.timing(spinValue, {
  //     toValue: wasRotated ? 0 : 1,
  //     duration: 250,
  //     easing: Easing.linear,
  //     useNativeDriver: true,
  //   }).start();
  // };

  // const spin = spinValue.interpolate({
  //   inputRange: [0, 1],
  //   outputRange: ['0deg', '360deg'],
  // });

  return (
    <Router>
      <Switch>
        {/* <Route path={'/'} exact component={Movies} /> */}
        {/* <Route path={'/movies'} component={} /> */}
        <Route path={'/'} component={Homescreen1} />
        {/* <Route path={'/max'} component={Homescreen1} /> */}
        {/* <Route path={'/screen3'} component={Screen3} />
          <Redirect to={'/'} /> */}
      </Switch>
    </Router>
  );
};

// const styles = StyleSheet.create({
//   scrollView: {
//     width: '100%',
//     flex: 1,
//   },
//   container: {
//     flex: 1,
//     backgroundColor: '#282c34',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   logo: {
//     width: 300,
//     height: 300,
//   },
//   title: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
//   text: {
//     color: '#fff',
//   },
//   link: {
//     color: '#1B95E0',
//   },
//   button: {
//     borderRadius: 3,
//     padding: 20,
//     marginVertical: 10,
//     marginTop: 10,
//     backgroundColor: '#1B95E0',
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: 'bold',
//     fontSize: 16,
//   },
// });

export default App;
