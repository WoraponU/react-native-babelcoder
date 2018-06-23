import React from "react";
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
} from "react-native";

export default class App extends React.PureComponent {
  state = {
    name: "",
    photos: []
  };

  componentDidMount() {
    this.fetchPhotos();
  }

  fetchPhotos = () => {
    const { name } = this.state;

    fetch(
      `https://api.unsplash.com/photos/?query=${name}&client_id=b1ca0762ddb8ba811bd36953fd91e375e2add651e8e567d168c61d40c3a3828d`
    )
      .then(res => res.json())
      .then(photos => this.setState({ photos }));
  };

  onChangeText = name => this.setState({ name });
  setKey = item => `${item.id}`;

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <TextInput value={this.state.name} style={styles.textHeader} />
          {/* <Button
            onPress={onPressLearnMore}
            title="Learn More"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
          /> */}
        </View>
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
});
