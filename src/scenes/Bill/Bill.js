import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Styles from './Styles';
const url = 'https://61981d74164fa60017c22f73.mockapi.io/bill';

const Item = props => {
  return (
    <View style={Styles.Card}>
      <Image source={require('../../assets/paid.png')} style={Styles.Img} />
      <View style={Styles.Desc}>
        <Text style={Styles.Name}>{props.name}</Text>
        <Text style={Styles.Price}>$ {props.price}</Text>
      </View>
      <Text style={Styles.Date}>{props.date}</Text>
    </View>
  );
};

const Bill = ({navigation}) => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios
      .get(url)
      .then(function (res) {
        setData(res.data);
      })
      .then(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <SafeAreaView>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Item name={item.name} price={item.Price} date={item.date} />
        )}
      />
      <TouchableOpacity
        style={Styles.Btn}
        onPress={() => navigation.navigate('Add Bill')}>
        <Text style={Styles.TextBtn}>Add Bill</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Bill;
