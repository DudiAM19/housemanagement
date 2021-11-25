import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  Header: {
    height: width * 0.18,
    backgroundColor: 'white',
  },
  TextHeader: {
    fontSize: RFValue(19),
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.05,
  },
  Card: {
    height: width * 0.6,
    backgroundColor: 'white',
    margin: width * 0.03,
    flexDirection: 'row',
    borderRadius: 20,
  },
  Img: {
    height: width * 0.4,
    width: width * 0.4,
    marginVertical: width * 0.09,
    marginHorizontal: width * 0.05,
    borderRadius: 20,
  },
  DescSection: {
    marginVertical: width * 0.1,
  },
  Name: {
    fontWeight: 'bold',
    width: width * 0.4,
    fontSize: RFValue(16),
    color: 'black',
  },
  Price: {
    color: 'black',
    marginTop: width * 0.02,
  },
  Stok: {
    color: 'black',
  },
  Desc: {
    width: width * 0.4,
    marginTop: width * 0.01,
    fontSize: RFValue(12),
  },
});
