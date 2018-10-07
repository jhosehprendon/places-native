import React, {Component} from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class PlaceInput extends Component {
    state = {
        placeName: ''
      }
    
    placeNameChangeHandler = val => {
        this.setState({
          placeName: val
        })
      }

    placeSubmitHandler = () => {
        if(this.state.placeName.trim() === '') {
          return;
        }
    
        this.props.onPlaceAdded(this.state.placeName);
        this.setState({placeName: ''})
     };

    render() {
        return(
            <View style={styles.inputContainer}>
                <TextInput 
                style={styles.placeInput}
                placeholder='Awesome place'
                value={this.state.placeName} 
                onChangeText={this.placeNameChangeHandler}
                />
                <Button 
                style={styles.placeButton} 
                title='Add' 
                onPress={this.placeSubmitHandler}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({

    inputContainer: {
      // flex: 1,
      width: '85%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    placeInput: {
      width: '70%'
    },
    placeButton: {
      width: '30%'
    }
  })

export default PlaceInput;