import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    <View style={[styles.containerStyle, props.style]} >
      {props.childrren }
    </View>
  );
};
const styles = {
  containerStyle: {
    birderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
