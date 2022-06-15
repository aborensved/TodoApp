import { NativeEventEmitter, Pressable, StyleSheet, Text, View } from "react-native";
import { deleteById } from "../database/DbUtils";


const SelectedTodoScreen = ({route, navigation}) => {

  const { todo } = route.params

  const emitter = new NativeEventEmitter()

  const handlePress = (id) => {
    deleteById(id)
      .then(res => emitter.emit('delete', todo))
    
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>Title: {todo.title}</Text>
      <Text>Id: {todo.id}</Text>
      <Text>Completed: {todo.isCompleted ? "Yes" : "No"}</Text>
      <Pressable onPress={() =>handlePress(todo.id)}>
        <Text>Delete</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SelectedTodoScreen;
