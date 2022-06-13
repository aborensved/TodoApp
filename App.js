import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainTodosScreen from "./screens/MainTodosScreen";
import SelectedTodoScreen from "./screens/SelectedTodoScreen";

export default function App() {

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


