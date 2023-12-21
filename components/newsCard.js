import React, { useEffect, useState } from "react";
import { Text, View, Image, StyleSheet, TouchableOpacity, FlatList, Linking } from "react-native";
import Categories from "./Categories";

const MyNewsCard = () => {
    const [currNews, setcurrnews] = useState()

    const newsData = async () => {
        try {
            const response = await fetch('https://newsdata.io/api/1/news?country=np&category=business,crime,domestic,entertainment,politics&apikey=pub_34814981c0fa4ac1e3613117c2af790dfc5bb');
            const NewsData = await response.json()
            setcurrnews(NewsData.results)
        }
        catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        newsData();
    }, [])

    return (
        <View style={styles.allCardContainer}>
        <FlatList
            data={currNews}
            keyExtractor={(item, index) => index}
            ListHeaderComponent={()=>(
                <View style={{width: '100%', flex: 0, flexDirection: 'row' }}>
                    <Categories/>
            </View>
            )}
            renderItem={({ item, index }) => {
            
                return (
                        <View style={styles.cardContainer}>
                            
                            <Text style={styles.newsTitle}>{item.title}</Text>
                            <TouchableOpacity onPress={() => Linking.openURL(item.link)}>
                                <View style={{ alignItems: 'center', width: '100%' }}>
                                    {item.image_url === null ? (
                                        <View style={{ width: '100%', alignItems: 'center' }}>
                                            {/* <Text>Image not available</Text> */}

                                            <Image source={require('../image/placeholderImage.jpg')} style={{ width: '90%', height: 200, resizeMode: 'contain' }} />
                                        </View>
                                    ) : (
                                        <Image source={{ uri: item.image_url }} style={{ width: '99%', height: 200 }} />
                                    )}
                                </View>
                            </TouchableOpacity>

                            <View style={{ flex: 0, flexDirection: 'column', alignItems: 'center', paddingTop: 4, width: '90%' }}>
                                <Text style={styles.newsDescription}>
                                    {item.description}
                                </Text>
                                <TouchableOpacity onPress={() => { Linking.openURL(item.link) }}>
                                    <Text style={styles.readMore}>Read more...</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    
                    
                )
            }}
        />
        </View>
    )
}

export default MyNewsCard;
const styles = StyleSheet.create({
    newsTitle: { fontSize: 19, fontWeight: '600', color: '#1f1e1e' },
    allCardContainer: { flex: 1, flexDirection: 'column', justifyContent: 'center`', backgroundColor: '#78cafa', alignItems: 'center', borderTopLeftRadius: 21, borderTopRightRadius: 21, width: '100%', alignSelf: 'center', marginTop: 6},

    cardContainer: { padding: 4, borderRadius: 5, backgroundColor: '#e8f6fc', width: '95%', margin: 10, borderRadius: 12, elevation: 4 },
    newsDescription: { fontSize: 16, color: 'black', letterSpacing: 0.5 },
    readMore: { color: 'white', marginLeft: 8, color: '#5e484b', fontWeight: '500', alignSelf: 'flex-end', textDecorationLine: 'underline', fontSize: 16, letterSpacing: 0.25, padding: 7 }
})