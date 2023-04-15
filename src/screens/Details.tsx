import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

type DetailsPropsType = {};

export const Details = ({}: DetailsPropsType) => {
  return (
    <View style={styles.container}>
      <Text>Details</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
