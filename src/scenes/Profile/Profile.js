import axios from 'axios';
import React, {useState, useEffect} from 'react';
import {
  Image,
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import './Styles';
import Styles from './Styles';
const url = 'https://61981d74164fa60017c22f73.mockapi.io/users';

const Item = props => {
  return (
    <View style={Styles.Card}>
      <Image source={{uri: props.img}} style={Styles.Img} />
      <Text style={Styles.Name}>{props.name}</Text>
      <Text style={Styles.Detail}>
        {props.phone} | {props.email}
      </Text>
      <TouchableOpacity style={Styles.Btn}>
        <Text style={Styles.TextBtn}>Update Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

const Profile = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    axios.get(url).then(function (res) {
      setData(res.data);
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
          <Item
            img={item.imgusers}
            name={item.name}
            phone={item.phone}
            email={item.email}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Profile;
