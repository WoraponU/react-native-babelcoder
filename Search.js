import React from "react"
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default class App extends React.PureComponent {
  static navigationOptions = {
    drawerLabel: "Search"
  }

  render() {
    const { navigation } = this.props
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <MaterialCommunityIcons
            name="hamburger"
            size={40}
            color="black"
            onPress={() => navigation.openDrawer()}
          />
          <Text style={styles.textHeader}>Search</Text>
        </View>
        {/* <Button
          onPress={() => this.props.navigation.navigate("Weathers")}
          title="Go to Weathers"
        /> */}
      </SafeAreaView>
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
