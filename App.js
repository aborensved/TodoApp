import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';


export default function App() {

  const [textInputValue, setTextInputValue] = useState('');
  const [todos, setTodos] = useState([])

  useEffect(() => {
    console.log(todos)
  }, [todos]);

  const handleTextChange = (text) => {
    setTextInputValue(text);
  }

  const handleAdd = () => {
    setTodos(prev => prev.concat(textInputValue))
  }

  const renderItem = ({item: todo}) => {
    return (
      <Text>{todo}</Text>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Todo App</Text>
      <TextInput
        style={styles.textinput}
        onChangeText={handleTextChange}
      />
      <Button 
        title='Add' 
        onPress={handleAdd} 
      />
      <FlatList 
        data={todos}
        renderItem={renderItem}
        keyExtractor={(todo, index) => index}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCDCDC',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    marginTop: 40,
  },
  textinput: {
    backgroundColor: '#fff',
    width: '70%',
    margin: 20,
    padding: 10,
    borderRadius: 6,
  },

});
