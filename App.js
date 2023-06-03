import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MainJS from "./src/screens/MainJS";
import Button from "./src/screens/Button"

const App = () => {
  const something = <Text style={styles.containere}>Hrishikesh Banerjee</Text>
  return (
    <View>
      <MainJS/>
      <Button/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontSize: 60,
    fontWeight: "900",
    color: "red",
  },
  containere: {
    fontSize: 40,
    color: "green",
    fontWeight: "bold",
  },
});

export default App;
