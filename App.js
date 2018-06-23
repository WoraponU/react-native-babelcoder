import React from "react";
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  FlatList,
  TouchableHighlight
} from "react-native";

export default class App extends React.PureComponent {
  state = {
    posts: []
  };

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    fetch("https://www.babelcoder.com/api/v1/articles")
      .then(res => res.json())
      .then(posts => this.setState({ posts: posts.articles }));
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.textHeader}>Home</Text>
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
                    <Text>{post.title}</Text>
                  </View>
                  <View>
                    <Image
                      style={styles.image}
                      source={{
                        uri: post.thumbnail
                      }}
                    />
                  </View>
                  <View style={styles.listFooter}>
                    <Image
                      style={[styles.image]}
                      source={{
                        uri: post.user.avatar
                      }}
                    />
                    <Text>{post.user.name}</Text>
                  </View>
                </View>
              </TouchableHighlight>
            )}
          />

          {/* <ScrollView style={styles.lists}>
            {this.state.posts.map(post => (
              <View key={post.id} style={styles.list}>
                <View style={styles.listHeader}>
                  <Text>{post.title}</Text>
                </View>
                <View>
                  <Image
                    style={styles.image}
                    source={{
                      uri: post.thumbnail
                    }}
                  />
                </View>
                <View style={styles.listFooter}>
                  <Image
                    style={[styles.image]}
                    source={{
                      uri: post.user.avatar
                    }}
                  />
                  <Text>{post.user.name}</Text>
                </View>
              </View>
            ))}
          </ScrollView> */}
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
});
