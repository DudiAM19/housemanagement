import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
const {width} = Dimensions.get('window');

export default StyleSheet.create({
  Card: {
    alignItems: 'center',
    height: width * 0.8,
    width: width,
    backgroundColor: 'white',
    paddingTop: width * 0.1,
  },
  Img: {
    height: width * 0.3,
    width: width * 0.3,
    borderRadius: 100,
  },
  Name: {
    fontWeight: 'bold',
    marginTop: width * 0.03,
  },
  Detail: {
    marginTop: width * 0.03,
  },
  Btn: {
    backgroundColor: '#e9ffe6',
    height: width * 0.1,
    width: width * 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginVertical: width * 0.03,
  },
  TextBtn: {
    fontWeight: 'bold',
    color: '#737373',
  },
});
