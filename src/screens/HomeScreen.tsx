import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../theme/Colors';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>HomeScreen</Text>
      <VectorIcon type="Ionicons" name="ios-person" color={Colors.secondaryColor} size={30} />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    },
    text: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    }
});
