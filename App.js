import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableHighlight
} from "react-native";

export default class App extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.text}>
          Open up App.js to start working on your app!
        </Text>
        <TouchableHighlight
          style={styles.button}
          opacity={0.5}
          underlayColor="green"
          onPress={() => alert("eiei")}
        >
          <Text>button</Text>
        </TouchableHighlight>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  text: {
    fontSize: 50
  },
  button: {
    backgroundColor: "red"
  }
});
