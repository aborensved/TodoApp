import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect } from "react";
import { getTableInfo, initDB } from "./database/DbUtils";
import MainTodosScreen from "./screens/MainTodosScreen";
import SelectedTodoScreen from "./screens/SelectedTodoScreen";

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

  return (
    <NavigationContainer>
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
    </NavigationContainer>
  );
}


