import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { useRouter } from "expo-router";

const SquareButton = ({ text, route, style, lesson = null }) => {
  const router = useRouter();

  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={() => {
        router.push( { pathname: route, params: { lesson: lesson } } )
      }
      }
    >
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: '60%',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // For Android shadow,
    marginBottom: 5
  },
  buttonText: {
    color: 'green',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default SquareButton;
