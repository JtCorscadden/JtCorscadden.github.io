import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';


const BottomButtons = ( { backButtonFunction, nextButtonFunction } ) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={[styles.shared,styles.backButton]}
                onPress={() => ( backButtonFunction() )}
            >
                <Text style={styles.buttonText}>{"<"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={[styles.shared,styles.forwardButton]}
                onPress={() => ( nextButtonFunction() )}
            >
                <Text style={styles.buttonText}>{">"}</Text>
            </TouchableOpacity>
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        height: '100%'
    },
    shared : {
        width: '50%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    forwardButton: {
        backgroundColor: '#008435'
    },
    backButton: {
        backgroundColor: '#9c2142'
    },
    buttonText: {
        color: 'white',
        fontSize: 32,
        fontWeight: 'bold'
    }
});

export default BottomButtons;