import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons'; // Assuming use of Expo for icons

export default function ProfileIcon({ textName, icon, onPress }) {
  return (
    <View style={styles.option} onPress={onPress}>
      <AntDesign name={icon} size={24} color="black" />
      <Text style={styles.optionText}>{textName}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#eee',
    padding: 5,
    marginBottom: 10, // Added margin for spacing
    gap: 5,
    cursor: 'pointer', // Enhances hover and accessibility
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333', // Changed to a more neutral color
  },
});
