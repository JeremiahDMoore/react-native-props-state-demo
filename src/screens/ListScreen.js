import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 20 },
    { name: 'Friend #2', age: 21 },
    { name: 'Friend #3', age: 22 },
    { name: 'Friend #4', age: 23 },
    { name: 'Friend #5', age: 24 },
    { name: 'Friend #6', age: 25 },
    { name: 'Friend #7', age: 26 },
    { name: 'Friend #8', age: 27 },
    { name: 'Friend #9', age: 28 }
  ];
  /*
  
  FlatList turns an array into a list of elements
  We are required to pass in a prop called data which is the array we want to turn into a list
  We are required to pass in a prop called renderItem which is a function that will turn each item into an element  
  */

  return (
    <FlatList
      
      keyExtractor={friend => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 10,
    fontSize: 30,
    textAlign: 'center',
    backgroundColor: 'lightgrey',   
    padding: 15,
    margin: 10,
    borderRadius: 10
  },
 
});

export default ListScreen;
