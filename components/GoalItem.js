import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button,TouchableOpacity } from 'react-native';


const GoalItem = props => {
  return(
    <TouchableOpacity  onPress={props.onDelete}>
      <View style={styles.listItem} >
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
})

export default GoalItem