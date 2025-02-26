import React, { useState } from 'react';
import { View, SafeAreaView, StyleSheet, Text } from 'react-native';
import BottomButtons from '@/components/navigation/bottom-buttons';


export default function Lesson( { lesson } ) {

    let items = lesson[ 'items' ];

    const [currentItem, setCurrentItem] = useState( items[ currentItemIndex ] );

    function previousItem() {

        const totalItems = items.length;
        currentItemIndex--;
        if ( currentItemIndex < 0 ) {
            currentItemIndex = totalItems - 1;
        }
        console.log( currentItemIndex );
        console.log( currentItem );
        updateItemState( items[ currentItemIndex ] );

    }
    
    function nextItem() {
    
        const totalItems = items.length;
        currentItemIndex++;
        if ( currentItemIndex >= totalItems ) {
            currentItemIndex = 0;
        }
        console.log( currentItemIndex );
        console.log( currentItem );
        updateItemState( items[ currentItemIndex ] );
    
    }
    
    function updateItemState( item ) {
    
        setCurrentItem( item );
    
    }
    
    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>

                {/* Title */}
                <View style={styles.titleContainer}>
                    <Text style={styles.titleText}>{lesson.gaeilgeTitle} - {lesson.englishTitle}</Text>
                </View>

                {/* English top */}
                <View style={styles.english}>
                    <Text style={styles.englishText}>{currentItem.english}</Text>
                </View>

                {/* Irish bottom */}
                <View style={styles.gaeilge}>
                    <Text style={styles.gaeilgeText}>{currentItem.gaeilge}</Text>
                    <Text style={styles.pronunciationText}>{currentItem.pronunciation}</Text>
                </View>

                {/* Buttons */}
                <View style={styles.buttons}>
                    <BottomButtons backButtonFunction={ previousItem } nextButtonFunction={ nextItem }/>
                </View>

            </View>
        </SafeAreaView>
    );

}

let currentItemIndex = 0;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    container: {
        flex: 1,
    },
    titleContainer: {
        width: '100%',
        height: '10%',
        justifyContent: 'center'
    },
    titleText: {
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: 20
    },
    english: {
        width: '100%',
        height: '35%',
        backgroundColor: '#f8f9fa',
        justifyContent: 'center'
    },
    englishText: {
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: 50
    },
    gaeilge: {
        width: '100%',
        height: '45%',
        justifyContent: 'center',
        backgroundColor: '#008000'
    },
    gaeilgeText: {
        textAlign: 'center',
        verticalAlign: 'middle',
        fontWeight: 'bold',
        fontSize: 50
    },
    pronunciationText: {
        textAlign: 'center',
        verticalAlign: 'middle',
        fontStyle: 'italic',
        fontSize : 20
    },
    buttons: {
        flex: 1,
        width: '100%',
        height: '10%',
        backgroundColor: '#f8f9fa'
    }
})