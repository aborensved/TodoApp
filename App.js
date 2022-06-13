import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList, ImageBackground, Dimensions } from 'react-native';
import Header from './components/Header';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


export default function App() {

  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log(todos)
  }, [todos]);

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./assets/splash.png')}
        resizeMode='cover'
        style={styles.imagebackground}
      >
        <Header />
        <TodoInput 
          setTodos={setTodos}
        />
        <TodoList 
          todos={todos}
        />
        <StatusBar style="auto" />
      </ImageBackground>
    </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
  },
  imagebackground: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  },

});
