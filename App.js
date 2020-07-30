import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)


  const addGoalHander = goalTitle => {
    // 基本的な配列に文字を追加
    // setCourseGoals([...courseGoals, entredGoal])
    // こっちがベターらしい
　 setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}])
   setIsAddMode(false)  
}

  const removeGoalHanlder = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId)
    })
  }

  const handleModal = () => {
    setIsAddMode(true)
  }

  const cancalGoalAdditionHandler = () =>{
    setIsAddMode(false) 
  }

  return (
    <View style={styles.screen} >
      <Button title="add goal" onPress={handleModal}/>
      <GoalInput visible={isAddMode} onAddGoal={addGoalHander} onCancel={cancalGoalAdditionHandler}/>
      <FlatList data={courseGoals} renderItem={itemDate =>(
        <View >
          <GoalItem id={itemDate.item.id} title={itemDate.item.value} onDelete={removeGoalHanlder}/>
        </View>
      )}>
      </FlatList>
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
