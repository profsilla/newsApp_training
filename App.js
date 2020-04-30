import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import TabsExample from "./src/screens/tabScreens"
import FooterTabsIconExample from "./src/footers/footer"

export default class App extends Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: "white",
        //justifyContent: "center",
        alignItems: "center"
      }}>
        <TabsExample />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
})