import { useNavigation } from "@react-navigation/native";
import { Text, FlatList, Pressable, StyleSheet } from "react-native";

const TodoList = ({ todos, navigation }) => {

  const handlePress = (todo) => {
    navigation.navigate('SelectedTodoScreen', {todo: todo})
  }

  const renderItem = ({ item: todo }) => {
    return (
      <Pressable onPress={() => handlePress(todo)}
        style={styles.todo}  
      >
        <Text>{todo}</Text>
      </Pressable>
    )
  };

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(todo, index) => index}
    />
  );
};

const styles = StyleSheet.create({
  todo: {
    margin: 10,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
  },
})

export default TodoList;
