import React from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import DefaultInput from '../UI/DefaultInput/DefaultInput'

const placeInput = props => (
    <DefaultInput 
      placeholder='Place name' 
      value={props.placeData.value} 
      valid={props.placeData.valid}
      touched={props.placeData.touched}
      onChangeText={props.onChangeText}
    />
)



export default placeInput;