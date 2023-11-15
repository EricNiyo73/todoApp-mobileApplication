import React from "react";
import styles from "./styles/styles";
import { Text, View } from 'react-native';
const Header = () => {
    return (
      <View style={styles.heading}>
        <Text style={styles.sheading}>My Todos</Text>
      </View>
    );
  };
  export default Header;