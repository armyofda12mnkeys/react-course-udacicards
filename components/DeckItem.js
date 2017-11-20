import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function DeckItem ({db_key, title, numCards}) {
  return (
    <View>
      <Text style={{fontSize: 30}}>key: {db_key}</Text>
      <Text style={{fontSize: 14}}>title: {title}</Text>
      <Text style={{fontSize: 14}}># of cards: {numCards}</Text>
    </View>
  );
}