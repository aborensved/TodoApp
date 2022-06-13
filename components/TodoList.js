import {Text, FlatList} from 'react-native';

const TodoList = ({todos}) => {

    const renderItem = ({item: todo}) => {
        return (
          <Text>{todo}</Text>
        )
      }

    return(
        <FlatList 
        data={todos}
        renderItem={renderItem}
        keyExtractor={(todo, index) => index}
      />
    )
}

export default TodoList;