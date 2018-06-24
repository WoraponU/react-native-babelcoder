import React from "react"
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TextInput,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Header from "./Header"
export default class App extends React.PureComponent {
  state = {
    name: "",
    countries: []
  }
  static navigationOptions = {
    drawerLabel: "Search"
  }

  onChangeText = name => {
    this.setState({ name })
  }

  fetchCountries = () => {
    const { name } = this.state
    fetch(`https://www.metaweather.com/api/location/search/?query=${name}`)
      .then(res => res.json())
      .then(countries => this.setState({ countries }))
  }

  onPressLearnMore = () => {
    const { name } = this.state
    this.fetchCountries()
  }

  render() {
    const { navigation } = this.props
    const { name, countries } = this.state
    return (
      <SafeAreaView style={styles.container}>
        <Header page="search" />
        <View style={styles.form}>
          <TextInput
            value={name}
            onChangeText={this.onChangeText}
            style={styles.textInput}
          />
          <Button
            onPress={this.onPressLearnMore}
            title="search"
            color="#841584"
            accessibilityLabel="search"
            style={styles.button}
          />
        </View>
        {countries.map(country => (
          <View key={country.title}>
            <Text style={styles.textList}>{country.title}</Text>
          </View>
        ))}
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  form: {
    flexDirection: "row"
  },
  textList: {
    marginVertical: 10
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
  textInput: {
    flex: 3,
    fontSize: 30
    // width: 100
    // backgroundColor: "grey",
    // fontSize: 20,
    // color: "black"
  },
  body: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "green"
  },
  button: {
    flex: 1
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
