import { StyleSheet, Text } from 'react-native';

const Header = () => {
    
    return(
        <Text style={styles.title}>Todo App</Text>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 40,
        marginTop: 40,
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
      },
})

export default Header;