import React, { useState } from 'react';

import { StyleSheet, Text, View, TextInput, Button, ScrollView, Modal } from 'react-native';


const GoalInput = props => {
  const [entredGoal, setEntredGoal] = useState('')

  const goalInputHandler = (enterdText) => {
    setEntredGoal(enterdText)
  }

  const addGoalHandler = () => {
    props.onAddGoal(entredGoal)
    setEntredGoal('')
  }
  console.log("props",props)

  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={entredGoal}
        />
      <Button title="cancel" onPress={props.onCancel}/>
      <Button title="ADDDDD" onPress={addGoalHandler}/>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },input: {
    width: '80%',
    borderColor: 'black',
    borderWidth:1,
    padding:10
  }
})

export default GoalInput