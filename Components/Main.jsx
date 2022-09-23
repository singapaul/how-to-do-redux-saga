import {View, Button, StyleSheet, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import React, {useEffect} from 'react';
import {addToCart, emptyCart, removeToCart} from '../Redux/action';
import {productList} from '../Redux/productAction';
import {useSelector} from 'react-redux';

const Main = () => {
  const dispatch = useDispatch();
  let data = useSelector(state => state.productData);
  console.log('data inthe main comp', data);

  useEffect(() => {
    dispatch(productList());
  }, []);

  // Feedback
  // Write an add to cart function -> good practice to clean up code.
  // You stop multiple button presses
  // Add more code is possible, e.g. displaying something

  function addToCartImproved(item) {
    dispatch(addToCart(item));
  }

  return (
    <View>
      <Button onPress={() => dispatch(emptyCart())} title="empty cart" />
      <View style={styles.products}>
        {data.map(item => (
          <View style={styles.product}>
            <Text>Name: {item.name}</Text>
            <Text> ID {item.id}</Text>
            <Text> Price: {item.price}</Text>
            <View style={styles.buttons}>
              <Button onPress={addToCartImproved} title="Add to cart" />
              <Button
                onPress={() => dispatch(removeToCart(item.id))}
                title="Remove from cart"
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Main;

const styles = StyleSheet.create({
  products: {
    borderColor: 'red',
    borderWidth: 2,
  },

  product: {
    borderColor: 'red',
    borderWidth: 2,
  },

  buttons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
