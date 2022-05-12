import React from 'react'
import { StyleSheet, View, Text, Image, Button } from 'react-native'
import { connect } from 'react-redux';

function FavorisItem(props){
    const { song } = props
    return (
        <View style={styles.main_container}>

            <Image
                style={styles.image}
                source={{ uri: song.img }}
            />

            <View style={styles.content_container}>
                <View style={styles.header_container}>
                    <Text style={styles.titreMusique}>{song.name}</Text>
                </View>
            
                <View style={styles.description_container}>
                    <Text style={styles.description_text}>{song.artist}</Text>
                    <View style={styles.backImage}>
                        <Text style={styles.noteMusique}>{song.note} / 10</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  main_container: {
    height: 160,
    flexDirection: 'row',
    borderColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingBottom: 5,
    backgroundColor: '#fff', 
    paddingLeft: 10, 
    borderRadius: 8,
    shadowColor: '#121212',
    shadowOffset: {width: -2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3,
    marginTop: 10
  },
  image: {
    width: 120,
    height: 120,
    margin: 5,
    backgroundColor: '#f9f9f9', 
    borderRadius: 8, 
    marginTop: 20, 
  },
  noteMusique: {
    fontWeight: 'bold',
    borderWidth: 1,
    borderColor: "#fff",
    fontSize: 26,
    color: '#666666', 
    marginTop: 39, 
    marginLeft: 100,
    paddingLeft: 10, 
    paddingRight: 10, 
    borderRadius: 8, 
    backgroundColor: '#f9f9f9',
    borderColor: '#303030'
  },
  content_container: {
    flex: 1,
    margin: 5
  },
  header_container: {
    flex: 5,
    flexDirection: 'row'
  },
  backImage: {
      borderRadius: 8
  }, 
  titreMusique: {
    fontWeight: 'bold',
    fontSize: 20,
    flex: 2,
    marginTop: 20
  },
  description_container: {
    flex: 7
  },
  description_text: {
    fontStyle: 'italic',
    color: '#666666'
  },
  date_text: {
    textAlign: 'right',
    fontSize: 14
  }
})

export default FavorisItem