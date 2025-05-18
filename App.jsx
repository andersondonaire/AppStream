import React from 'react';

//npm install @react-navigation/native
import { NavigationContainer } from '@react-navigation/native';



import HomeScreen from './screens/HomeScreen.jsx';
import Filmes from './screens/Filmes.jsx';
import Series from './screens/Series.jsx';
import Animes from './screens/Animes.jsx';

import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';


const Drawer = createDrawerNavigator();
const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

const screenOptions = ({ route }) => ({
  drawerIcon: ({ focused, color, size }) => {
    let iconName;
    if (route.name === 'Filmes') {
      iconName = focused ? 'movie-filter' : 'movie-filter-outline';
      return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
    } else if (route.name === 'Series') {
      iconName = focused ? 'tv' : 'tv-outline';
      return <Ionicons name={iconName} size={size} color={color} />;
    } else if (route.name === 'Animes') {
      iconName = focused ? 'dragon' : 'dragon';
      return <FontAwesome5 name={iconName} size={size} color={color} />;
    }
    else{
      iconName = focused ? 'home' : 'home-outline';
      return <Ionicons name={iconName} size={size} color={color} />;
    }
  },
  drawerActiveTintColor: 'red',
  drawerInactiveTintColor: '#000',
  drawerActiveBackgroundColor: '#000',
  drawerLabelStyle: {
    fontSize: 16,
    fontWeight: '600',
  },
});

const App = () => {
  
  return (
    <NavigationContainer>   
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={screenOptions}
      >
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Filmes" component={Filmes} />
        <Drawer.Screen name="Series" component={Series} />
        <Drawer.Screen name="Animes" component={Animes} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};


export default App;