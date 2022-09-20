import {View, Text, Button} from 'react-native';
import React from 'react';

import {connect} from 'react-redux';

import {DECREMENT, INCREMENT, INCREMENT_ASYNC} from './Redux/reducers';

const CounterDumb = ({value, onIncrementAsync, onIncrement, onDecrement}) => {
  return (
    <View>
      <Text>counting mother shuckers</Text>

      <Button
        onPress={onIncrement}
        title="up"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={onDecrement}
        title="down"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={onIncrementAsync}
        title="async"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Text>{value}</Text>
    </View>
  );
};

const action = type => () => ({type});
export const Counter = connect(state => ({value: state}), {
  onIncrement: action(INCREMENT),
  onDecrement: action(DECREMENT),
  onIncrementAsync: action(INCREMENT_ASYNC),
})(CounterDumb);
