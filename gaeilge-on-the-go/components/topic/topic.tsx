import React from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView, Text } from 'react-native';
import SquareButton from '../navigation/nav-button';

export default function Topic( { lessonJson } ) {

    const lesson = JSON.parse( lessonJson );
    const title = lesson.gaeilgeTitle;

    return (
        <SafeAreaView style={styles.safeArea}>

            <View style={styles.container}>

                <View style={styles.topSection}>
                    <Text style={styles.topicTitle}>{title}</Text>
                </View>

                <ScrollView style={styles.scrollView}>
                  <View style={styles.buttonContainer}>
                    <SquareButton
                          text="Lesson"
                          route="/lesson"
                          style={{ height: 100 }}
                          lesson={lessonJson}
                          />
                        <SquareButton
                          text="Quiz"
                          route="/quiz"
                          style={{ height: 100 }}
                          lesson={lessonJson}
                          />
                  </View>
                </ScrollView>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>By Jack Corscadden</Text>
                </View>

            </View>
        </SafeAreaView>
    )

}
const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
      },
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 40,
        backgroundColor: 'green'
      },
      topSection: {
        height: '30%',
        justifyContent: 'center',
        fontSize: 34
      },
      topicTitle: {
        fontSize: 34,
        fontWeight: 'bold',
        color: 'orange'
      },
      buttonContainer: {
        flex: 1,
        width: '100%',
        flexDirection:'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
      },
      scrollContent: {
        flexGrow: 1,
        flex: 1,
        width: '100%',
        height: '100%',
        paddingVertical: 10,
      },
      scrollView: {
        paddingLeft:20,
        paddingRight:20
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