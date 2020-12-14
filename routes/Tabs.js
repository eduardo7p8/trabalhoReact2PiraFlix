import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./../screen/Home";
import Building from "./../screen/Building";
import Embreve from "./../screen/Embreve";
import Donwload from "./../screen/Donwload";
import More from "./../screen/More";
import { Feather } from "@expo/vector-icons";
import { translate } from "../languages/utils";

const Tab = createBottomTabNavigator();

const Tabs = (props) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#ffffff",
        style: {
          backgroundColor: "#1a1718",
          borderTopColor: "transparent",
        },
      }}
    >
      <Tab.Screen
      name="Home"
        options={{
          tabBarLabel: translate("Home"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="home" size={size} color={color} />
          ),
        }}
        component={Home}
      />
      <Tab.Screen
        name="Busca"
        options={{
          tabBarLabel: translate("Search"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="search" size={size} color={color} />
          ),
        }}
        component={Building}
      />
      <Tab.Screen
        name="Em Breve"
        options={{
          tabBarLabel: translate("Soon"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="airplay" size={size} color={color} />
          ),
        }}
        component={Embreve}
      />
      <Tab.Screen
        name="Downloads"
        options={{
          tabBarLabel: translate("Downloads"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="download" size={size} color={color} />
          ),
        }}
        component={Donwload}
      />
      <Tab.Screen
        name="More"
        options={{
          tabBarLabel: translate("More"),
          tabBarIcon: ({ color, size }) => (
            <Feather name="menu" size={size} color={color} />
          ),
        }}
        component={More}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
