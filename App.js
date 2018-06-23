import React from "react";
import { StyleSheet, Text, SafeAreaView, View, Image } from "react-native";

export default class App extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Home</Text>
        </View>
        <View style={styles.body}>
          <View style={styles.modal}>
            <Image
              style={{ width: 50, height: 50 }}
              source={{
                uri: "https://www.babelcoder.com/images/full-logo.png"
              }}
            />
          </View>
        </View>
        <View style={styles.footer}>
          <View>
            <Text style={styles.text}>footer</Text>
          </View>
          <View>
            <Text style={styles.text}>footer</Text>
          </View>
          <View>
            <Text style={styles.text}>footer</Text>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
    marginTop: "auto",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  button: {
    backgroundColor: "red"
  },
  modal: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    width: "60%",
    height: 200,
    borderRadius: 5
  }
});
