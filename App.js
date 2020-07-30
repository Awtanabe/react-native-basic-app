import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])


  const addGoalHander = goalTitle => {
    // 基本的な配列に文字を追加
    // setCourseGoals([...courseGoals, entredGoal])
    // こっちがベターらしい
　 setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), value: goalTitle}])
  }
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHander}/>
      <FlatList data={courseGoals} renderItem={itemDate =>(
        <View >
          <GoalItem title={itemDate.item.value}/>
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
