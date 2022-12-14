import { StyleSheet, FlatList, View , Text} from 'react-native';
import React from 'react';

export default class IconSibaScreens extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('itemName', 'None'),
      headerStyle: {
        backgroundColor: 'pink'
      },
    };
  };

  render() {
    return (
        <View style={styles.containerApp}>
          <Text>Ahihi Phong</Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25

  },
  textTitle: {
    backgroundColor: 'red'
  },
  scrollItem: {
    paddingLeft: 15,
    paddingRight: 15
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.4,
    shadowRadius: 2,
  },
  button: {
    backgroundColor: '#4830D3',
    alignItems: 'center',
    justifyContent: 'center',
    height: 42,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    color: '#fff',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
  },
});

