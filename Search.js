import React from "react"
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Button,
  TextInput,
  ActivityIndicator,
  Image,
  FlatList,
  TouchableHighlight,
  AsyncStorage
} from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Header from "./Header"
import {} from "react-navigation"

export default class App extends React.Component {
  state = {
    name: "",
    countries: [],
    isLoading: false,
    fav: []
  }
  static navigationOptions = {
    drawerLabel: "Search"
  }

  componentDidMount() {
    this.getFavLocation()
  }

  setFavLocation = async woeid => {
    const { fav } = this.state
    const addFav = [...fav, woeid]
    this.setState({ fav: addFav })
    const dataJson = JSON.stringify(addFav)
    return AsyncStorage.setItem("fav", dataJson)
  }

  getFavLocation = async () => {
    const favLocation = await AsyncStorage.getItem("fav")
    this.setState({
      fav: JSON.parse(favLocation)
    })
  }

  onChangeText = name => {
    this.setState({ name })
  }

  fetchCountries = () => {
    const { name } = this.state
    fetch(`https://www.metaweather.com/api/location/search/?query=${name}`)
      .then(res => res.json())
      .then(countries => {
        this.setState({ countries })
        this.toggleLoading()
      })
  }

  toggleLoading = () => {
    const { isLoading } = this.state
    this.setState({ isLoading: !isLoading })
  }

  onPressLearnMore = () => {
    const { name } = this.state
    this.toggleLoading()
    this.fetchCountries()
  }

  onPressCountry = woeid => () => {
    this.props.navigation.navigate("Weathers", {
      woeid
    })
  }

  onPressFav = woeid => () => {
    this.setFavLocation(woeid)
  }

  isFav = woeid => {
    const { fav } = this.state
    return fav.includes(woeid)
  }

  render() {
    const { name, countries, isLoading, fav } = this.state
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
        {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        {countries.map(country => (
          <View key={country.latt_long} style={styles.row}>
            <Text
              style={styles.textList}
              onPress={this.onPressCountry(country.woeid)}
            >
              {country.title}
            </Text>
            <Text
              style={[styles.textList, this.isFav(country.woeid) && styles.red]}
              onPress={this.onPressFav(country.woeid)}
            >
              Liked
            </Text>
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
  red: {
    color: "red"
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  form: {
    flexDirection: "row"
  },
  textList: {
    marginVertical: 10,
    fontSize: 20,
    color: "black"
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
