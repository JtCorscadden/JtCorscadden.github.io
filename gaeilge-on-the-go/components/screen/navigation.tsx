import React from 'react';
import { View, SafeAreaView, Text, ScrollView, StyleSheet } from 'react-native';
import SquareButton from '../navigation/nav-button';

export default function Navigation({ title, paths }) {
    console.log('paths', paths);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                {/* Title Section */}
                <View style={styles.topSection}>
                    <Text style={styles.titleText}>{title}</Text>
                </View>

                {/* Scrollable List */}
                
                    <ScrollView style={styles.scrollView}>
                      <View style={styles.scrollContainer}>
                        {paths.map((item) => (
                            <SquareButton
                                key={item.text}
                                text={item.text}
                                route={item.route}
                                style={{ height: 100 }} // Spacing between buttons
                            />
                        ))}
                        </View>
                    </ScrollView>

                {/* Footer */}
                <View style={styles.footer}>
                    <Text style={styles.footerText}>By Jack Corscadden</Text>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    scrollView: {
        paddingLeft:20,
        paddingRight:20
    },
    container: {
        flex: 1,
        alignItems: 'center',
        paddingVertical: 40,
        backgroundColor: 'green',
    },
    topSection: {
        height: 100, // Fixed height so it doesn't interfere with scrolling
        justifyContent: 'center',
        backgroundColor: 'green',
        width: '100%',
        textAlign: 'center',
        verticalAlign: 'middle'
    },
    titleText: {
        fontSize: 34,
        fontWeight: 'bold',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: 'orange'
    },
    scrollContainer: {
        flex: 1, // Takes up remaining space
        width: '100%',
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    scrollContent: {
        paddingVertical: 10, // Ensures smooth scrolling
        alignItems: 'center',
    },
    footer: {
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'green',
    },
    footerText: {
      fontSize: 10,
      color: 'orange'
    }
});
