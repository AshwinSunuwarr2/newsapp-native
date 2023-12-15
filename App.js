import React from "react";
import { Text, View, StyleSheet, Image, StatusBar } from "react-native";

import MyNewsCard from './components/newsCard.js'

const App = () => {
  return (
    <View style={styles.container}>
      <View style={{ flex: 0, flexDirection: 'row', alignItems: 'center' }}>
        <Text style={styles.headTxt}>News app</Text>
        <Image source={require('./image/newsicon.png')} style={styles.newsIcon} />
      </View>

      <MyNewsCard />

      <StatusBar style="auto" />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#9bc8de', alignItems: "center" },
  headTxt: { fontSize: 24, fontWeight: '700', padding: 10 },
  newsIcon: { width: 25, height: 25 }
})