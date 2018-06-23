import React from "react";
import { StyleSheet, Text, SafeAreaView, View } from "react-native";

export default class App extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Home</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.text}>body</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.text}>footer</Text>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    alignItems: "stretch"
  },
  header: {
    alignItems: "center",
    backgroundColor: "red"
  },
  textHeader: {
    fontSize: 50,
    color: "white"
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "green"
  },
  footer: {
    marginTop: "auto"
  },
  button: {
    backgroundColor: "red"
  }
});
