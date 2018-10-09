import React from 'react';
import { 
    TouchableOpacity, 
    TouchableNativeFeedback, 
    Text, 
    View, 
    StyleSheet,
    Platform
} from 'react-native'

const buttonWithBackground = props => {

    const content = (
        <View style={[styles.button, {backgroundColor: props.color}, props.disabled ? styles.disabled : null]}>
            <Text style={[styles.textButton, props.disabled ? styles.disableText : null]}>{props.children}</Text>
        </View>
    )

    if(props.disabled) {
        return content
    }

    if(Platform.OS === 'android') {
        return (
            <TouchableNativeFeedback onPress={props.onPress}>
                {content}
            </TouchableNativeFeedback>
        );
    }
    return(
        <TouchableOpacity onPress={props.onPress}>
            {content}
        </TouchableOpacity>
    );
    
};

const styles = StyleSheet.create({
    button: {
        padding: 10,
        margin: 5,
        borderRadius: 5
    },
    textButton: {
        color: 'white', 
        fontWeight: 'bold'
    },
    disabled: {
        backgroundColor: '#eee',
       
    },
    disableText: {
        color: '#aaa'
    }
})

export default buttonWithBackground;