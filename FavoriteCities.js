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

  static navigationOptions = {
    drawerLabel: "FavoriteCities"
    // drawerIcon: ({ tintColor }) => (
    //   <Image
    //     source={require('./chats-icon.png')}
    //     style={[styles.icon, {tintColor: tintColor}]}
    //   />
    // ),
  }

  // componentDidMount() {
  //   this.fetchPosts()
  // }

  // fetchPosts = () => {
  //   fetch("https://jsonplaceholder.typicode.com/Posts")
  //     .then(res => res.json())
  //     .then(posts => this.setState({ posts }))
  // }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.textHeader}>FavoriteCities</Text>

        {/* <View style={styles.header}>
          <Text style={styles.textHeader}>Post</Text>
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
                    <Text>{post.body}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />
        </View> */}
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
