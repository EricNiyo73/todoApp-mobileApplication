import React,{useState} from "react";
import styles from "./styles/styles";
import { View,Text, ScrollView } from "react-native";
const Lists=()=>{
    const [people,setPeople]= useState([
        {name: "John",key: "1"},
        {name: "EriC",key: "2"},
        {name: "Oswakim",key: "3"},
        {name: "Juju",key: "4"},
        {name: "Mutoni",key: "5"},
    ]);
    return(
    <View style={styles.container}>
        <ScrollView>
        {people.map(person =>{
            return(
                <View key={person.key}>
                    <Text style={styles.person}>{person.name}</Text>
                </View>
            )
            })}
            </ScrollView>
    </View>
    );
}
export default Lists