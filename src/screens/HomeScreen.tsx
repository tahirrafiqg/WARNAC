import { StatusBar, StyleSheet, Text } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

import React from 'react';
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../theme/Colors';
import Header from '../components/Header';

const HomeScreen = () => {
  return (
    <SafeAreaProvider>
      <StatusBar
        animated={false}
        backgroundColor="black"
        hidden={false}
      />
      <SafeAreaView style={styles.container}>
        <Header />
        <Text style={styles.text}>HomeScreen</Text>
        <VectorIcon
          type="Ionicons"
          name="ios-person"
          color={Colors.secondaryColor}
          size={30}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background,
    flex: 1,
    },
    text: {
    fontSize: 20,
    color: Colors.textColor,
    fontWeight: 'bold',
    }
});
