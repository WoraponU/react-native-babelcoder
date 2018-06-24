import React from "react"
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native"
import Header from "./Header"

export default class App extends React.PureComponent {
  static navigationOptions = {
    drawerLabel: "Weather"
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header page="Weathers" />
      </SafeAreaView>
    )
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
    color: "black"
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "green"
  },
  button: {
    backgroundColor: "red"
  },
  lists: {
    margin: 20,
    width: "80%"
  },
  list: {
    backgroundColor: "white",
    marginVertical: 5,
    padding: 10
  },
  listHeader: {},
  listFooter: {
    flexDirection: "row",
    flex: 1
  },
  image: {
    aspectRatio: 2 / 1
  }
})
