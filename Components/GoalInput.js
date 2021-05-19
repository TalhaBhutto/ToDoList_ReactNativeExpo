import React from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';
import { useState } from 'react';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }
  const AddGoalHandler = () => {
    props.onAddGoal(enteredGoal)
    setEnteredGoal('')
  }
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.inputContainer} >
        <TextInput placeholder="Course Goal" value={enteredGoal} onChangeText={goalInputHandler} style={styles.input} />
        <View style={styles.buttonContainer}>
          <View style={styles.btn}>
            <Button onPress={props.onCancel} color='red' title="Cancel" />
          </View>
          <View style={styles.btn}>
            <Button onPress={AddGoalHandler} title="ADD" />
          </View>
        </View>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    width: '80%',
    padding: 10,
  },
  btn: {
    margin: 5,
    width: '40%'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
    , width: '80%'
  }
})

export default GoalInput;