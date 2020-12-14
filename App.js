import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Tabs from "./routes/Tabs";
import Camera from "./screen/Camera";
import ChooseIcon from "./screen/ChooseIcon";
import ProfileToEdit from "./screen/ProfileToEdit";
import ProfileContext from "./context/ProfileContext";

import { configureLanguageToI18n } from "./languages/utils";

const Stack = createStackNavigator();
configureLanguageToI18n();

const App = (props) => {
  const [user, changeUser] = useState("Luiz");
  return (
    <ProfileContext.Provider value={{ user, changeUser }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Tabs"
            component={Tabs}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Camera"
            component={Camera}
          />
          <Stack.Screen name="ChooseIcon" component={ChooseIcon} />
          <Stack.Screen name="ProfileToEdit" component={ProfileToEdit} />
        </Stack.Navigator>
      </NavigationContainer>
    </ProfileContext.Provider>
  );
};

export default App;
