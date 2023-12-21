import { StyleSheet, Text, View , Image, ScrollView, TouchableOpacity} from 'react-native'
import React from 'react'

const Categories = () => {

    return (
        <View style={styles.categoriesMainContainer}>
            <Text style={styles.catTxt}>Categories</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{width: '95%', alignSelf: 'center', borderRadius: 21}}>
                {/* <View style={styles.catCon}> */}
                    <TouchableOpacity>
                        <View style={styles.catContainer}>
                            <Image source={require('../image/Crime.jpg')} style={styles.catImgStyle}/>
                            <Text style={styles.catTitle}>Crime</Text>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity>
                        <View style={styles.catContainer}>
                            <Image source={require('../image/Politics.jpg')} style={styles.catImgStyle}/>
                            <Text style={styles.catTitle}>Politics</Text>
                        </View>
                    </TouchableOpacity>

                    <View style={styles.catContainer}>
                        <Image source={require('../image/Education.jpg')} style={styles.catImgStyle}/>
                        <Text style={styles.catTitle}>Education</Text>
                    </View>

                    <View style={styles.catContainer}>
                        <Image source={require('../image/Business.jpg')} style={styles.catImgStyle}/>
                        <Text style={styles.catTitle}>Business</Text>
                    </View>

                    <View style={styles.catContainer}>
                        <Image source={require('../image/placeholderImage.jpg')} style={styles.catImgStyle}/>
                        <Text style={styles.catTitle}>Others</Text>
                    </View>
                {/* </View> */}
            </ScrollView>
        </View>
  )
}

export default Categories

const styles = StyleSheet.create({
    categoriesMainContainer:{ margin: 7,marginVertical: 16, borderRadius: 26, elevation: 15, width: '95%', height: 185,backgroundColor: '#e8f6fc', flex: 0, flexDirection: 'column', alignItems: 'center'},

    catTxt:{fontSize: 21, fontWeight: '700', letterSpacing: 0.25, color: 'gray', padding: 4, marginTop: 4},

    // catCon:{alignItems: 'center', flex: 0, flexDirection: 'row', alignSelf: 'center', borderWidth: 1, margin: 1, justifyContent: 'center', width: '85%', height: 98},

    catContainer:{margin: 7, padding: 4, flex: 0, flexDirection: 'column', width: 92, backgroundColor: '#e8f6fc', borderRadius: 21, alignItems: 'center', elevation: 20, height: 110, justifyContent: 'space-between'},

    catImgStyle:{width: '100%', height: '70%', borderRadius: 10},
    catTitle:{fontSize: 16, fontWeight: '500', margin: 2, width: '100%', textAlign:'center', height: 25, padding: 2, color: 'black'}
})