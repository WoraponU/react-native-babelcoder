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
import { createBottomTabNavigator } from "react-navigation"

import Posts from "./Posts"
import Photos from "./Photos"
import Users from "./Users"

export default createBottomTabNavigator(
  {
    Posts,
    Photos,
    Users
  },
  {
    initialRouteName: "Posts",
    lazy: true
  }
)
