import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import SquareButton from '@/components/navigation/nav-button';

export default function Home() {
  const navigation = useNavigation();
  const logo = require('@/assets/images/temp-logo.png');

  return (
    <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>

      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={logo} style={styles.logo} resizeMode="contain" />
      </View>
      
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <ScrollView style={styles.scrollContent}>
          <SquareButton 
          text="Vocabulary"
          route="/topics/vocabulary"
          style={{height:100}}
          />
          <SquareButton 
          text="Phrases"
          route="/topics/phrases"
          style=''
          />
          <SquareButton 
          text="Grammar"
          route="/topics/grammar"
          style=''
          />
        </ScrollView>
      </View>
      
      {/* Watermark + Settings Link */}
      <View style={styles.footer}>
        <Text>By Jack Corscadden</Text>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    backgroundColor: '#f8f9fa'
  },
  logoContainer: {
    height: '30%',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: '100%',
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  scrollContent: {
    flexGrow: 1,
    flex: 1,
    width: '100%',
    height: '100%'
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  watermark: {
    fontSize: 14,
    color: 'grey',
  },
  settingsLink: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 5,
  },
});
