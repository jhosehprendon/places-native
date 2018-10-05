
import React, {Component} from 'react';
import { View, StyleSheet } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput'
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';

export default class App extends Component {
  state = {
    places: [],
    selectedPlace: null
  }

  placeAddedHandler = placeName => {

    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random(), 
          name: placeName,
          image: {uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Atafutrim.jpg/800px-Atafutrim.jpg"}
        })
      };
    });
 };

 placeSelectedHandler = key => {
  this.setState(prevState => {
    return {
      selectedPlace: prevState.places.find(place => {
        return place.key === key
      })
    };
  });
}

 placeDeletedHandler = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
            return place.key !== prevState.selectedPlace.key
        }),
        selectedPlace: null
      }
    })
 }

 modalClosedHandler = () => {
   this.setState({
     selectedPlace: null
   })
 }

  render() {
    return (
      <View style={styles.container}>
        <PlaceDetail 
          selectedPlace={this.state.selectedPlace} 
          onItemDeleted={this.placeDeletedHandler} 
          onModalClosed={this.modalClosedHandler}
        />
        <PlaceInput onPlaceAdded={this.placeAddedHandler} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler}/>
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
