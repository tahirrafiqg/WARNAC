import { StyleSheet, View, TextInput } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../theme/Colors';
import VectorIcon from '../utils/VectorIcon';
VectorIcon;

const Searchbar = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <View style={styles.Container}>
      <VectorIcon
        type="Ionicons"
        name="search"
        color={Colors.secondaryColor}
        size={30}
      />
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.white}
        style={styles.textInput}
        value={searchText}
        onChangeText={setSearchText}
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 50,
    paddingHorizontal: 25,
    margin: 10,
    color: Colors.white,
    fontSize: 16,
    backgroundColor: Colors.primaryColor,
  },
  text: {
    fontSize: 20,
    color: Colors.textColor,
    fontWeight: 'bold',
  },
    textInput: {
    flex: 1,
    color: Colors.white,
    fontSize: 15,
    marginLeft: 10,
  }
});
