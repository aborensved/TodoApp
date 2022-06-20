import {
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Pressable,
} from "react-native";
import { useEffect, useState } from "react";
import Todo from "../models/Todo";
import { findAll, insert } from "../database/DbUtils";

const TodoInput = ({ setTodos }) => {
  const [textInputValue, setTextInputValue] = useState("");

  const handleTextChange = (text) => {
    setTextInputValue(text);
  };

  const handleAdd = () => {
    const todo = new Todo(0, textInputValue, false)
        insert(todo)
            .then(res => {
                console.log("insert res", res)
                return findAll()
            })
            .then(res => setTodos(res))
            .catch(err => console.log(err))

  };

  return (
    <View accessible={true} accessibilityLabel='Todo input region' style={styles.inputcontainer}>
      <TextInput
        style={styles.textinput}
        onChangeText={handleTextChange}
        value={textInputValue}
      />
      <Pressable
        // accessibilityLabel="Add todo button"
        // accessibilityHint="Adds a todo when clicked"
        // accessibilityRole="button"
        onPress={handleAdd}
        style={({ pressed }) => [
          styles.addbutton,
          { opacity: pressed ? 0.5 : 1.0 },
        ]}
      >
        <Text style={styles.buttontext}>Add</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  inputcontainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginVertical: 20,
  },
  addbutton: {
    backgroundColor: "dodgerblue",
    marginHorizontal: 10,
    borderRadius: 6,
    paddingVertical: 10,
    paddingHorizontal: 10,
  },

  textinput: {
    backgroundColor: "#fff",
    width: "70%",
    marginHorizontal: 20,
    paddingHorizontal: 10,
    borderRadius: 6,
  },

  buttontext: {
    color: "black",
  },
});

export default TodoInput;
