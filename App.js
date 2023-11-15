import { StatusBar } from 'expo-status-bar';
import Cafe from './src/cafe';
import Form from './src/registrationF';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Lists from './src/listAndScroll';
import { useState } from 'react';
import Header from './src/header';
import styles from './src/styles/styles';
import TodoItem from './src/todoItem';
import AddTodo from './src/addTodo';

export default function App() {
  const [todos,setTodos] = useState([
    {text:'buy coffee with',key:'1'},
    {text:'Buy data',key:'2'},
    {text:'buy beer bro',key:'3'},
  ]);
  const pressHandler =(key) =>{
    setTodos((prevTodos) => {
      return prevTodos.filter(todos => todos.key != key);
    });
  }
  const submitHandler =(text) =>{
    setTodos((prevTodos) => {
      return [
        {text: text, key:Math.random().toString()},
        ...prevTodos]
    });
  }
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
   <AddTodo submitHandler={submitHandler}/>
 <View style={styles.todoitem}>
 <FlatList 
 data={todos}
 renderItem={({item}) => (
 <TodoItem item={item} pressHandler={pressHandler} style={styles.todoitem}
 />)}
 />
 </View>
      </View>
      <StatusBar style="auto" />
      {/* <Cafe /> */}
      {/* <Form /> */}
      {/* <Lists/> */}
    </View>
 
  );
}