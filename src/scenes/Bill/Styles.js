import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  Card: {
    flexDirection: 'row',
    height: width * 0.3,
    backgroundColor: 'white',
    margin: width * 0.03,
    borderRadius: 15,
  },
  Img: {
    height: width * 0.2,
    width: width * 0.2,
    margin: width * 0.05,
  },
  Desc: {
    marginHorizontal: width * 0.01,
    marginVertical: width * 0.07,
    width: width * 0.4,
  },
  Name: {
    marginVertical: width * 0.02,
    fontWeight: 'bold',
    fontSize: RFValue(14),
  },
  Price: {
    color: '#339900',
    fontSize: RFValue(12),
  },
  Date: {
    marginVertical: width * 0.12,
    fontSize: RFValue(12),
  },
  Btn: {
    height: width * 0.1,
    width: width * 0.3,
    backgroundColor: '#e9ffe6',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginHorizontal: width * 0.3,
    marginVertical: width * 0.05,
  },
  TextBtn: {
    fontWeight: 'bold',
    color: '#737373',
  },
});
