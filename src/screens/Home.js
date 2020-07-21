import React from 'react';
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

// components
import DrawerContent from "../components/DrawerContent";

// screens
import Tabs from './Tabs';
import About from './About';
import Support from './Support';

const Home = () => {
    
    return (
        <Drawer.Navigator 
            drawerContent={props => <DrawerContent {...props} />}
            drawerStyle={{
                width: 300,
            }}
        >
            <Drawer.Screen name="Tabs" component={Tabs} />
            <Drawer.Screen name="About" component={About} />
            <Drawer.Screen name="Support" component={Support} />
        </Drawer.Navigator>
    )
}

export default Home ;

