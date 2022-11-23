import React, { useState } from 'react';
import { Text, StyleSheet, View, Button, } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0); // useState is a hook that allows us to use state in a functional component

    return (
        <View>
        <Text style={styles.textStyle}>Current Count:{counter}</Text>
        <Button title="Increase" onPress={() => {
            // don't do this
            // counter++;
            setCounter(counter + 1);
        }} />
        <Button title="Decrease" onPress={() => {
            // don't do this
            // counter--;
            setCounter(counter - 1);
        }} />
        </View>
    );
    }

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    subHeaderStyle: {
        fontSize: 20
    }
});

export default CounterScreen;