import { Alert, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import VectorIcon from '../utils/VectorIcon';
import { Colors } from '../theme/Colors';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.Logo}>WARNAC</Text>
      <View style={styles.iconContainer}>
        <VectorIcon
          type="Ionicons"
          name="camera-outline"
          color={Colors.secondaryColor}
                  size={30}
                  onPress={() => Alert.alert('Camera Pressed')}
        />
        <VectorIcon
          type="Entypo"
          name="dots-three-vertical"
          color={Colors.secondaryColor}
          size={25}
        />
      </View>
    </View>
  );
}

export default Header

const styles = StyleSheet.create({
    container: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: Colors.primaryColor,
  },
  Logo: {
    color: Colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
    iconContainer: {
      flexDirection: 'row',
        gap: 10,
      alignItems: 'center',
  },
});