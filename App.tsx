//---------- import
//  react
import React from 'react';

// navigation lib
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// context
import {GlobalContextProvide} from './src/ContextHooks/GlobalContextProvide';

// screens
import Home from './src/screen/Home';
import Details from './src/screen/Details';

// import CardViews from './src/screen/CardViews';

const Stack = createNativeStackNavigator();

//---------- main component

const App = () => {
  //---------- return

  return (
    <GlobalContextProvide>
      {
        //---------- navigaton
      }
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="/" component={Home} />
          <Stack.Screen name="Details" component={Details} />
          {/* <Stack.Screen name="CardViews" component={CardViews} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </GlobalContextProvide>
  );
};

//---------- export

export default App;
