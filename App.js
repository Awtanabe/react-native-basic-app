import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [entredGoal, setEntredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enterdText) => {
    setEntredGoal(enterdText)
  }

  const addGoalHander = () => {
    // 基本的な配列に文字を追加
    // setCourseGoals([...courseGoals, entredGoal])
    // こっちがベターらしい
　 setCourseGoals(currentGoals => [...currentGoals, entredGoal])
  }
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputs}
          onChangeText={goalInputHandler}
          value={entredGoal}
        />
        <Button title="ADD" onPress={addGoalHander}/>
      </View>
      <View>
        {courseGoals.map((goal) => <View key={goal}><Text key={goal} style={styles.listItem}>{goal}</Text></View>)}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50
  },inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },input: {
    width: '80%',
    borderColor: 'black',
    borderWidth:1,
    padding:10
  },listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
