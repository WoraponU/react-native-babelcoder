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
    lists: []
  }
  static navigationOptions = {
    drawerLabel: "Weather"
  }

  componentDidMount() {
    this.fetchWeather()
  }

  fetchWeather = () => {
    const woeid = this.props.navigation.getParam("woeid", 1225448)

    fetch(`https://www.metaweather.com/api/location/${woeid}`)
      .then(res => res.json())
      .then(lists => {
        this.setState({ lists: lists.consolidated_weather })
      })
  }

  showTime = now => {
    const time = new Date(now)
    return `${time.getHours()}:${time.getMinutes()}`
  }

  numberInt = input => parseInt(input)

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Header page="Weathers" />
        <View style={styles.body}>
          <FlatList
            style={styles.lists}
            data={this.state.lists}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item: lists }) => (
              <View key={lists.id} style={styles.list}>
                <Text>{this.showTime(lists.created)}</Text>
                <View>
                  <Image
                    style={{ width: 50, height: 50 }}
                    source={{
                      uri: `https://www.metaweather.com/static/img/weather/png/${
                        lists.weather_state_abbr
                      }.png`
                    }}
                  />
                </View>
                <Text>{this.numberInt(lists.the_temp)}</Text>
              </View>
            )}
          />
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
    color: "white"
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
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-around"
  },
  listHeader: {},
  listFooter: {
    flexDirection: "row",
    flex: 1
  },
  image: {
    aspectRatio: 1 / 1
  }
})
