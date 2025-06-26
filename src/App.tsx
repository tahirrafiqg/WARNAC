import React from 'react';
import Navigation from './navigation/Navigation';
import { StatusBar } from 'react-native';
import { Colors } from './theme/Colors';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
export default function App() {
  return (
    <>
      <SafeAreaProvider>
        <StatusBar
          backgroundColor="black"
          barStyle="light-content"
          translucent={false}
        />
        <SafeAreaView style={styles.SAV}>
          <Navigation />
        </SafeAreaView>
      </SafeAreaProvider>
    </>
  );
}

const styles = {
  SAV: {
    flex: 1,
    backgroundColor: Colors.background,
  },
};
