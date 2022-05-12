import React from 'react';
import { View, Button, StyleSheet, TextInput, FlatList, Text, ActivityIndicator } from 'react-native';
import SongItem from './SongItem'
import { getMusicWithItunes } from '../API/ItunesApi'

class Search extends React.Component {
  
    constructor(props){
        super(props)
        this.state = { 
            songs : [],
            isLoading: false
        }
        this.searchedText = ""
    }

    fetchMovie(){
        this.setState({isLoading: true })
        if(this.searchedText.length > 3) {
            getMusicWithItunes(this.searchedText).then(data => this.setState({songs: data.results}));
        }
        this.setState({isLoading: false })
    }

    changeSearch(text){
        this.searchedText = text;
    }

    seeDetails = (id, img, name, artist, url) => {
         this.props.navigation.navigate('Ajouter', {idSong: id, imgSong: img, nameSong: name, artistSong: artist, urlSong: url})
    }

    render(){

        return(
            <View style={styles.container}> 
                <TextInput style={styles.textInput} 
                    placeholder="Rechercher un artiste ou une musique... " 
                    onChangeText={(text)=>this.changeSearch(text)} 
                    onSubmitEditing={() => this.fetchMovie()} 
                />
                {!this.state.isLoading ? (
                    <FlatList
                        data={this.state.songs}
                        keyExtractor={(item) => item.trackId}
                        onEndReachedThreshold={0.25}
                        renderItem={({ item }) => <SongItem song={item}  seeDetails={this.seeDetails} />}
                    /> 
                    ) : ( 
                    <View style={styles.indicator} >
                        <ActivityIndicator size='large' />
                    </View>
                )}
            </View>
        )
    }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20, 
    flex: 1 
  }, 
  textInput: {
    backgroundColor: '#fff',
    paddingLeft: 10, 
    paddingTop: 8, 
    paddingBottom: 10, 
    marginLeft: 20, 
    marginRight: 20, 
    borderRadius: 8, 
    marginBottom: 20
  }, 
  indicator: {
    position: 'absolute', 
    top:100, 
    alignItems: 'center', 
    justifyContent: 'center'
  }
  
})

export default Search;