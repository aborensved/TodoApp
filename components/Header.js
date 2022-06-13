import { StyleSheet, Text, View } from "react-native";

const Header = () => {
  return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo App</Text>
        </View>
     )
};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },

  title: {
    fontSize: 40,
    marginTop: 40,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
  },
});

export default Header;
