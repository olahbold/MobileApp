import React from "react";
import { StyleSheet, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "./components/Screens/HomeScreen";
import TabScreen from "./components/Screens/TabScreen";

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen component = {TabScreen}  name= 'Tabscreen'/>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLeft: () => {
              return <Text>Whatsapp</Text>;
            },
            headerTitle: () => null,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
