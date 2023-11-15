import { View ,TouchableOpacity,Text,TextInput} from "react-native";
import React from "react";
import styles from "./styles/styles";
export default function TodoItem({item,pressHandler}){
    return(
        <TouchableOpacity onPress={()=> pressHandler(item.key)}>
            <Text style={styles.todoitem}>{item.text}</Text>
        </TouchableOpacity>
    )
}