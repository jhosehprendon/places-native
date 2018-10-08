import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput'

const placeInput = props => (
    <DefaultInput 
      placeholder='Place name' 
      value={props.placeName} 
      onChangeText={props.onChangeText}
    />
)



export default placeInput;