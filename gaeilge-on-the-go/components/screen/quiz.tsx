import React, { useState, useRef } from 'react';
import { View, SafeAreaView, StyleSheet, Text, Animated, TouchableOpacity } from 'react-native';
import BottomButtons from '@/components/navigation/bottom-buttons';

const getRandomItems = (array, count) => {
    // Shuffle the array using Fisher-Yates algorithm
    const shuffled = array.slice().sort(() => Math.random() - 0.5);
    
    // Return the first 'count' elements
    return shuffled.slice(0, count);
};

const fadeIn = () => {
    setVisible(true); // Set visible so the Text is rendered
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 500, // Fade-in duration in ms
      useNativeDriver: true,
    }).start();
};

let currentItemIndex = 0;

export default function Quiz( { lesson } ) {

    let items = lesson[ 'items' ];
    
    let quizQuestions = 10;
    quizQuestions = quizQuestions > items.length ? items.length : quizQuestions;
    let quizItems = getRandomItems( items, quizQuestions );

    console.log( 'quiz items', quizItems )

    const [currentItem, setCurrentItem] = useState( items[ currentItemIndex ] );

    const [visible, setVisible] = useState(false);

    const fadeAnim = useRef(new Animated.Value(0)).current; // Initially invisible

    function previousItem() {

        const totalItems = quizItems.length;
        currentItemIndex--;
        if ( currentItemIndex < 0 ) {
            currentItemIndex = totalItems - 1;
        }
        console.log( currentItemIndex );
        console.log( currentItem );
        setVisible( false);
        updateItemState( quizItems[ currentItemIndex ] );
    
    }
    
    function nextItem() {
    
        const totalItems = quizItems.length;
        currentItemIndex++;
        if ( currentItemIndex >= totalItems ) {
            currentItemIndex = 0;
        }
        console.log( currentItemIndex );
        console.log( currentItem );
        setVisible( false);
        updateItemState( quizItems[ currentItemIndex ] );
    
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

                <TouchableOpacity style={styles.gaeilge} onPress={() => {
                    fadeIn();
                }}>
                {visible && (
                    <Animated.Text style={[{ opacity: fadeAnim, fontSize: 24 }, styles.gaeilgeText]}>
                        {currentItem.gaeilge}
                    </Animated.Text>
                    )}
                </TouchableOpacity>

                {/* Buttons */}
                <View style={styles.buttons}>
                    <BottomButtons backButtonFunction={ previousItem } nextButtonFunction={ nextItem }/>
                </View>

            </View>
        </SafeAreaView>
    );

}

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