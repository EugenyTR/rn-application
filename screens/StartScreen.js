import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

import Card from "../components/Card";

const StartScreen = props => {
    return (
        <View style={styles.screen}>
            <Text style={styles.title}>Start a new Game!</Text>
            <Card style={styles.inputContainer}>
                <Text>Select a number</Text>
                <TextInput style={styles.input} />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button title='Reset' onPress={() => {}} color='#c717fc' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Confirm' onPress={() => {}} color='#f7287b' />
                    </View>
                </View>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    title: {
        fontSize: 20,
        paddingTop: '5%',
        paddingBottom: '5%',
        backgroundColor: '#ccc',
        fontWeight: '700',
        width: '100%' ,
        textAlign: 'center',
        marginBottom: '5%',
        borderRadius: 5
    },
    input: {
        marginTop: '5%',
        marginBottom: '5%',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        width: '90%'
    },
    button: {
        width: 100,
    }
});

export default StartScreen;
