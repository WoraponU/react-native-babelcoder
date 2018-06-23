import React from "react";
import { StyleSheet, View, Button, TextInput } from "react-native";

const search = ({ name, onChangeText, onPressLearnMore }) => (
  <View>
    <TextInput
      value={name}
      onChangeText={onChangeText}
      style={styles.textHeader}
    />
    <Button
      onPress={onPressLearnMore}
      title="search"
      color="#841584"
      accessibilityLabel="search"
    />
  </View>
);

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 50,
    color: "black"
  }
});
export default search;
