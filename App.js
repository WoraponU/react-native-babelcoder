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
import { createDrawerNavigator } from "react-navigation"

import Search from "./Search"
import Weathers from "./Weathers"
import FavoriteCities from "./FavoriteCities"

export default createDrawerNavigator(
  {
    Search: {
      screen: Search
    },
    Weathers: {
      screen: Weathers
    },
    FavoriteCities: {
      screen: FavoriteCities
    }
  },
  {
    initialRouteName: "Search",
    lazy: true
  }
)
