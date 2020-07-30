import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';


const GoalInput = props => {
  const [entredGoal, setEntredGoal] = useState('')

  const goalInputHandler = (enterdText) => {
    setEntredGoal(enterdText)
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        placeholder="Course Goal"
        style={styles.inputs}
        onChangeText={goalInputHandler}
        value={entredGoal}
      />
    <Button title="ADD" onPress={props.onAddGoal.bind(this, entredGoal)}/>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },input: {
    width: '80%',
    borderColor: 'black',
    borderWidth:1,
    padding:10
  }
})

export default GoalInput