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

export default class App extends React.PureComponent {
  state = {
    posts: []
  }

  componentDidMount() {
    this.fetchPosts()
  }

  fetchPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/Users")
      .then(res => res.json())
      .then(posts => this.setState({ posts }))
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Users</Text>
        </View>
        <View style={styles.body}>
          <FlatList
            style={styles.lists}
            data={this.state.posts}
            keyExtractor={item => `${item.id}`}
            renderItem={({ item: post }) => (
              <TouchableHighlight>
                <View key={post.id} style={styles.list}>
                  <View style={styles.listHeader}>
                    <Text>{post.name}</Text>
                    <Text>{post.email}</Text>
                    <Text>{post.phone}</Text>
                  </View>
                </View>
              </TouchableHighlight>
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
