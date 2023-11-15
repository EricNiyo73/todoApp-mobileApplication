import React, {useState}from "react";
import { View ,TouchableOpacity,Text,TextInput} from "react-native";
import styles from "./styles/styles";
const Form =()=> {
    const [name,setName] =useState('Mr Eric');
    const[email,setEmail] =useState('eric@gmail.com');
    const [password,setPassword] =useState();
    return(
        <View>
            <Text>Enter your Name</Text>
                <TextInput 
                style={styles.inputr}
                placeholder="eg:Mr Eric"
                onChangeText={(val)=>setName(val)}></TextInput>
                
                <Text>Enter your Email</Text>
                <TextInput 
                style={styles.inputr}
                placeholder="eric@gmail.com"
                onChangeText={(val)=>setEmail(val)}></TextInput>

                <Text>Enter your Password</Text>
                <TextInput 
                style={styles.inputr}
                keyboardType="numeric"
                placeholder="atleast 8 numbers"
                ></TextInput>
                <Text>Name: {name}, Email: {email}</Text>
            <TouchableOpacity>
                {/* <Text style={styles.smallbutton}>Submit</Text> */}
            </TouchableOpacity>
        </View>
    )

};
export default Form;