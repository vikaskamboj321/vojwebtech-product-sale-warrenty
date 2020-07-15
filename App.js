import React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer';
// screens
import About from './src/screens/About';
import Add from './src/screens/Add';
import Home from './src/screens/Home';
import List from './src/screens/List';
import Login from './src/screens/Login';
import Product from './src/screens/Product';
import Search from './src/screens/Search';
import Support from './src/screens/Support';

const Drawer  = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="About" component={About} />
      <Drawer.Screen name="Support" component={Support} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}


