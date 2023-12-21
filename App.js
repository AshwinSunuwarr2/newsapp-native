import React from "react";
import { Text, View, StyleSheet, Image, StatusBar, ScrollView } from "react-native";

import MyNewsCard from './components/newsCard.js'
import Categories from "./components/Categories.js";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.newsNav}>
        <Image source={require('./image/newsicon.png')} style={styles.newsIcon} />
        <Text style={styles.headTxt}>News app</Text>
      </View>
          
          <MyNewsCard />
      
      <StatusBar style="auto" />
    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#D7E6FE' },
  newsNav:{ flex: 0, flexDirection: 'row', alignItems: 'center', backgroundColor: '#78cafa', elevation: 10, borderBottomLeftRadius: 21, borderBottomRightRadius: 21, padding: 4 },
  headTxt: { fontSize: 24, fontWeight: '700', padding: 10, color: '#2A2A2B' },
  newsIcon: { width: 25, height: 25 , marginLeft: 4}
})