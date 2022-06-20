import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";


const FetchedTodosScreen = () => {

  const [fetchedtodos, setFetchedTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => res.json())
      .then(res => setFetchedTodos(res))
  }, [])

  const _renderItem = ({item: todo}) => {
      return (
        <View style={styles.todo}>
          <Text> Title: {todo.title}</Text>
          <Text> Id: {todo.id}</Text>
          <Text> Completed: {todo.completed ? 'Yes' : 'No'}</Text>
        </View>
      )
  }

  return (
    <View style={styles.container}>
      <FlatList 
        data={fetchedtodos}
        keyExtractor={(item) => item.id}
        renderItem={_renderItem}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  todo: {
    borderBottomColor: 'black',
    borderBottomWidth: 1.0,
  }
})

export default FetchedTodosScreen;