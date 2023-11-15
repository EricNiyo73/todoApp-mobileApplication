import Cat from "./cat";
import { View,Text } from "react-native";
import styles from "./styles/styles";
import { useState } from "react";
const Cafe = () => {
    return (
      <View>
        <Text style ={styles.container}>Welcome!</Text>
        <Cat />
      </View>
    );
  };
  
  export default Cafe;