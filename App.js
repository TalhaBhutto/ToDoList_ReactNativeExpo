import {useState} from 'react';
import React from 'react';
import { StyleSheet, Text, View,Button,TextInput,ScrollView ,FlatList} from 'react-native';
import GoalInput from './Components/GoalInput'
import GoalItem from './Components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)
  const addGoalHandler=(enteredGoal)=>{
    setCourseGoals(currentGoals=>[...currentGoals,{id:Math.random().toString(),value:enteredGoal}])
    setIsAddMode(false)
  }
  const removeGoalHandler=goalId=>{
    setCourseGoals((currentGoals)=>{
      return currentGoals.filter(goal=>goal.id!==goalId)
    })
  }
  const cancelGoalAdditionHandler=()=>{
    setIsAddMode(false)
  }
  return (
    <View style={styles.screen}>
      <Button title="Add New GOal" onPress={()=>setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onCancel={cancelGoalAdditionHandler} onAddGoal={addGoalHandler}/>
      
      
      <FlatList keyExtractor={(item,index)=>item.id}
      data={courseGoals}
      renderItem={itemData=>(
      <GoalItem 
      id={itemData.item.id} 
      onDelete={removeGoalHandler} 
      value={itemData.item.value} />)}/>
      </View>
  )
      }

const styles = StyleSheet.create({
  screen:{
    marginTop:10,
    padding:50,
  }

});
