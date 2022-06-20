import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useEffect } from "react";
import { getTableInfo, initDB } from "./database/DbUtils";
import MainTodosScreen from "./screens/MainTodosScreen";
import SelectedTodoScreen from "./screens/SelectedTodoScreen";
import { View, Text} from "react-native";
import { FontAwesome } from '@expo/vector-icons';
import FetchedTodosScreen from "./screens/FetchedTodosScreen";

export default function App() {

  useEffect(() => {
    initDB()
      .then(res => {
        console.log("result from init", res)
        return getTableInfo()
      })
      .then(res => console.log("pragma table_info", res))
      .catch(err => console.log(err))
  }, [])

  const NativeStack = createNativeStackNavigator()
  const BottomTab = createBottomTabNavigator()

  const MainStack = () => {
    return(
      <NativeStack.Navigator>
      <NativeStack.Screen
        options={{headerShown: false}} 
        name='MainTodosScreen'
        component={MainTodosScreen}
      />
      <NativeStack.Screen 
        name='SelectedTodoScreen'
        component={SelectedTodoScreen}
      />
    </NativeStack.Navigator>
    )
  }

  const Placeholder = () => {
    return(
      <View>
        <Text>Placeholder</Text>
      </View>
    )
  }

  return (
    <NavigationContainer>
      <BottomTab.Navigator screenOptions={{headerShown: false}}>
        <BottomTab.Screen
          name='MainStack'
          component={MainStack}
          options={{
            tabBarIcon: () => <FontAwesome name="tasks" size={24} color="black" />
          }}
        />
        <BottomTab.Screen
          name='FetchedTodosScreen'
          component={FetchedTodosScreen}
          options={{
            tabBarIcon: () => <FontAwesome name="wifi" size={24} color="black" />
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}


