import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {
    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    );
};

const styles = StyleSheet.create({
   input: {
       height: 'auto',
       marginTop: '5%',
       marginBottom: '5%',
       padding: 10,
       borderBottomWidth: 1,
       borderBottomColor: '#ccc',
       width: '90%',
       fontSize: 20,
       color: '#000',
       textAlign: 'center'
   }
});

export default Input;
