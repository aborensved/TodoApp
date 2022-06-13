import { NativeEventEmitter, Pressable, StyleSheet, Text, View } from "react-native";


const SelectedTodoScreen = ({route, navigation}) => {

  const { todo } = route.params

  const emitter = new NativeEventEmitter()

  const handlePress = () => {
    emitter.emit('delete', todo)
    navigation.goBack()
  }

  return (
    <View style={styles.container}>
      <Text>Todo: {todo}</Text>
      <Pressable onPress={handlePress}>
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
