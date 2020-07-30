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
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="cancel" color="red" onPress={props.onCancel}/>
        </View>
        <View style={styles.button}>
          <Button title="ADDDDD" onPress={addGoalHandler}/>
        </View>
      </View>
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
  },buttonContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%'
  },button: {
    width: '40%' 
  }
})

export default GoalInput