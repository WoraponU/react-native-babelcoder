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
  state = {
    posts: []
  }

  static navigationOptions = {
    drawerLabel: "FavoriteCities"
  }

  onPressCountry = woeid => {
    this.props.navigation.navigate("Weathers", {
      woeid
    })
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header page="Fav City" />
        <Text
          onPress={() => this.onPressCountry(44418)}
          style={styles.textHeader}
        >
          FavoriteCities
        </Text>
        <View>
          <Text
            onPress={() => this.onPressCountry(2487956)}
            style={styles.textHeader}
          >
            Bangkok
          </Text>
        </View>
        <View>
          <Text
            onPress={() => this.onPressCountry(44418)}
            style={styles.textHeader}
          >
            san francisco
          </Text>
        </View>
        <View>
          <Text
            onPress={() => this.onPressCountry(2487956)}
            style={styles.textHeader}
          >
            new york
          </Text>
        </View>
        <View>
          <Text
            onPress={() => this.onPressCountry(2487956)}
            style={styles.textHeader}
          >
            tokyo
          </Text>
        </View>
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
