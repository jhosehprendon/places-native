
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList';

export default class App extends Component {
  state = {
    places: []
  }

  placeAddedHandler = placeName => {

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          value: placeName,
          image: {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Atafutrim.jpg/800px-Atafutrim.jpg"}
        })
      };
    });
 };

 placeDeletedHandler = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
            return place.key !== key
        })
      }
    })
 }

  render() {
    return (
      <View style={styles.container}>
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 26,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
})
