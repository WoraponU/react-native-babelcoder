import React from "react"
import { StyleSheet, Text, SafeAreaView, View } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default class App extends React.PureComponent {
  static navigationOptions = {
    drawerLabel: "Search"
  }

  render() {
    const { navigation, page } = this.props
    return (
      <View style={styles.header}>
        <MaterialCommunityIcons
          name="hamburger"
          size={40}
          color="black"
          onPress={() => navigation.openDrawer()}
        />
        <Text style={styles.textHeader}>{page}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  hamburger: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  textHeader: {
    flex: 2,
    fontSize: 50,
    alignItems: "center",
    marginLeft: 80,
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
