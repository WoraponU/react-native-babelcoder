import React from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  SafeAreaView,
  View,
  Button,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native"
import Search from "./search/Search"
import debounce from "lodash.debounce"

export default class App extends React.PureComponent {
  state = {
    name: "",
    photos: []
  }

  fetchPhotos = () => {
    const { name } = this.state
    fetch(
      `https://api.unsplash.com/search/photos?query=${name}&client_id=b1ca0762ddb8ba811bd36953fd91e375e2add651e8e567d168c61d40c3a3828d`
    )
      .then(res => res.json())
      .then(photos => this.setState({ photos: photos.results }))
  }

  typing = debounce(name => {
    this.onChangeText(name)
    this.onPressLearnMore()
  }, 2000)

  onChangeText = name => {
    this.setState({ name })
  }

  setKey = item => `${item.id}`

  onPressLearnMore = () => {
    this.fetchPhotos()
  }
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Search
          name={this.state.name}
          onChangeText={this.onChangeText}
          onPressLearnMore={this.onPressLearnMore}
          typing={this.typing}
        />
        <View style={styles.body}>
          <FlatList
            style={styles.lists}
            data={this.state.photos}
            keyExtractor={this.setKey}
            renderItem={({ item: photo }) => (
              <View key={photo.id} style={styles.list}>
                <Text>{photo.id}</Text>
                <View>
                  <Image
                    style={{ width: 100, height: 50 }}
                    source={{
                      uri: `${photo.urls.small}`
                    }}
                  />
                </View>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  test: {
    color: "red"
  },
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
