import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useAppNavigation} from '../navi/navigationTypes';

type MainPropsType = {};

export const Main = ({}: MainPropsType) => {
  const navigation = useAppNavigation();

  return (
    <View style={styles.container}>
      <Text>Main</Text>
      <Button title="aaa" onPress={() => navigation.navigate('Details')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
