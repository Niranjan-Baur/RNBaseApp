import {View, FlatList} from 'react-native';
import React from 'react';
import {Button, Text} from 'react-native-paper';
import {useDispatch, useSelector} from 'react-redux';
import {fetchTodos} from '../../redux/slices/todoSlice';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const todos = useSelector(state => state.todos);

  console.log(todos);
  return (
    <View
      className="mt-4 dark:bg-black"
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
      <Button
        className="mt-4"
        mode="contained"
        onPress={() => {
          navigation.openDrawer();
        }}>
        Open Drawer
      </Button>
      <Text className="mt-2 text-lg text-black dark:text-white">helllooo </Text>
      <Button
        mode="contained"
        style={{marginTop: 20}}
        onPress={() => {
          dispatch(fetchTodos());
        }}>
        Fetch Todo list
      </Button>

      {todos.isLoading && <Text variant="headlineLarge">Loading...</Text>}

      {todos.data && (
        <FlatList
          data={todos.data}
          renderItem={({item, index}) => {
            return (
              <Text>
                {index + 1} {item.title}
              </Text>
            );
          }}
        />
      )}
    </View>
  );
};

export default Home;
