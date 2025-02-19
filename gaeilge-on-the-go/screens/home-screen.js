import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image source={require('../assets/logo.png')} style={styles.logo} resizeMode="contain" />
      </View>
      
      {/* Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Lessons')}>
          <Text style={styles.buttonText}>Lessons</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Quizzes')}>
          <Text style={styles.buttonText}>Quizzes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CustomQuiz')}>
          <Text style={styles.buttonText}>Custom Quiz</Text>
        </TouchableOpacity>
      </View>
      
      {/* Watermark + Settings Link */}
      <View style={styles.footer}>
        <Text style={styles.watermark}>© 2025 My Irish App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
          <Text style={styles.settingsLink}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 40,
    backgroundColor: '#f8f9fa',
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
    width: '80%',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
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

export default HomeScreen;