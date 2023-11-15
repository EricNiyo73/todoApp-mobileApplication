import { View ,TouchableOpacity,Text,TextInput, Button} from "react-native";
import React, {useState}from "react";
import styles from "./styles/styles";

export default function AddTodo({submitHandler, cancelHandler}){
    const [text,setText]=useState('');
    const changeHandler = (val) =>{
        setText(val);
    }
    return(
        <View>
            <TextInput onChangeText={changeHandler} placeholder="add your new todo..." style={styles.todoitem}/>
            <Button onPress={()=>{
                submitHandler(text);
            }} title='add todo' color='coral'/>
        </View>
    )
}