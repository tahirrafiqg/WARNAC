import React from 'react';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { View, StatusBar, StyleSheet } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import { Colors } from './theme/Colors';

const AppContent = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <StatusBar
        backgroundColor={Colors.background}
        barStyle="light-content"
        translucent={false}
      />
      <HomeScreen />
    </View>
  );
};

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContent />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});
