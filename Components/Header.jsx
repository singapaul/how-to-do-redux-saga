import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {productSearch} from '../Redux/productAction';
const Header = () => {
  const result = useSelector(state => state.cartData);
  const dispatch = useDispatch();
  console.log('data in header', result);
  console.log(result.length);

  return (
    <SafeAreaView>
      <View style={styles.header}>
        {/* <TextInput
          style={styles.input}
          onChangeText={updateValue}
          placeholder="useless placeholder"
          value={text}
        /> */}
        {/* <TextInput
          type="text"
          onChange={event => dispatch(productSearch(event.target.value))}
          placeholder="Search Product"
        /> */}
        <View style={styles.cartdiv}>
          <Text> TOTAL ITEMS IN BASKET: {result.length}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'orange',
    height: 100,
  },
  cartdiv: {
    position: 'relative',
    backgroundColor: 'orange',
    display: 'flex',
    flexDirection: 'row',
  },

  cartdivimage: {
    width: 30,
    resizeMode: 'contain',
  },

  input: {
    backgroundColor: 'pink',
  },
});

export default Header;
