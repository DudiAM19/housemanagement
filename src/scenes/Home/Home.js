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
import axios from 'axios';

const url = 'https://61981d74164fa60017c22f73.mockapi.io/housemanage';

const Item = props => {
  return (
    <>
      <TouchableOpacity style={Styles.Card}>
        <Image source={{uri: props.image}} style={Styles.Img} />
        <View style={Styles.DescSection}>
          <Text style={Styles.Name}>{props.nameProp}</Text>
          <Text style={Styles.Price}>Price: ${props.price}</Text>
          <Text style={Styles.Stok}>Stok: {props.stok}</Text>
          <Text style={Styles.Desc}>{props.desc}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const TextItem = props => {
  return <Text style={Styles.TextHeader}>Hallo {props.name}</Text>;
};

const Home = () => {
  const [data, setData] = useState([]);
  const [nama, setNama] = useState([]);

  const getUserName = () => {
    axios
      .get('https://61981d74164fa60017c22f73.mockapi.io/users')
      .then(function (res) {
        setNama(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const getData = () => {
    axios
      .get(url)
      .then(function (res) {
        setData(res.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getData();
    getUserName();
  }, []);

  return (
    <SafeAreaView>
      <View style={Styles.Header}>
        <FlatList
          data={nama}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => <TextItem name={item.name} />}
        />
      </View>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Item
            image={item.avatar}
            nameProp={item.nameproperty}
            price={item.price}
            stok={item.stok}
            desc={item.desc}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Home;
