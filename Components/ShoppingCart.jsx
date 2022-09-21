import {View, Text, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import React from 'react';

const ShoppingCart = () => {
  const cartData = useSelector(state => state.cartData);
  //   Calculating the total
  const amount =
    cartData.length &&
    cartData.map(item => item.price).reduce((prev, next) => prev + next);

  console.log(amount + 'The total us');
  console.log('the cart data is: ' + cartData);
  return (
    <ScrollView>
      <View>
        <Text>ShoppingCart</Text>
        {cartData.map(item => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.price}</Text>
          </View>
        ))}
      </View>
      <Text>THE TOTAL BILL IS {amount}</Text>
    </ScrollView>
  );
};

export default ShoppingCart;
