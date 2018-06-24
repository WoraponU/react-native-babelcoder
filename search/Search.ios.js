import React from "react"
import { StyleSheet, View, Button, TextInput } from "react-native"

const search = ({ name, typing }) => {
  return (
    <View>
      <TextInput value={name} onChangeText={typing} style={styles.textHeader} />
    </View>
  )
}

const styles = StyleSheet.create({
  textHeader: {
    fontSize: 50,
    color: "black"
  }
})
export default search
