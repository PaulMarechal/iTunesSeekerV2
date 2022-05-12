import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Search from '../components/Search';
import AddSong from '../components/AddSong';
import Favoris from '../components/Favoris';
import { createStackNavigator } from '@react-navigation/stack';
import Ionicons from "react-native-vector-icons/Ionicons";

const SettingsStack = createStackNavigator();

function ListStackScreen() {
  return (
    <SettingsStack.Navigator>
      <SettingsStack.Screen name="iTunes Seeker V2" component={Search} />
      <SettingsStack.Screen name="Ajouter" component={AddSong} />
    </SettingsStack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator 
        initialRouteName="Recherche"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name == "Recherche") {
              iconName = focused ? "search" : "search-outline";
            } else if (route.name == "Favoris") {
              iconName = focused ? "heart" : "heart-outline";
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "grey",
        })}
      >
        <Tab.Screen name="Recherche" component={ListStackScreen} />
        <Tab.Screen name="Favoris" component={Favoris} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}