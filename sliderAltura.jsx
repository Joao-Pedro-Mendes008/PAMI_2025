import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Slider from '@react-native-community/slider';

const SliderAltura = ({titulo}) => {
    const [value, setValue] = useState(0);

    return (
        <View style={styles.container}>
            <Text style={styles.label}>{titulo}: {value}</Text>
            <Slider
                style={{ width: 300, height: 40 }}
                minimumValue={0}
                maximumValue={200}
                step={1}
                value={value}
                onValueChange={setValue}
                minimumTrackTintColor="#1fb28a"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="#1a9274"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    label: {
        width: 240,
        textAlign: 'center',
        backgroundColor: 'white',
        borderRadius: 16,
        marginBottom: 20,
        fontSize: 25,
        fontFamily: 'monospace',
        fontWeight: 900,
        color: 'orange'
    },
});

export default SliderAltura;
