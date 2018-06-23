import React from "react";
// import fetch from 'fetch'
import {
  StyleSheet,
  Text,
  SafeAreaView,
  View,
  Image,
  ScrollView
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
          <ScrollView style={styles.lists}>
            {this.state.posts.map(post => (
              <View key={post.id} style={styles.list}>
                <View style={styles.listHeader} />
                <Text>{post.title}</Text>
                <View style={styles.listFooter} />
              </View>
            ))}
          </ScrollView>
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
  listFooter: {}
});
