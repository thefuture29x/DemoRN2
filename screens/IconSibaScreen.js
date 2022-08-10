import { StyleSheet, FlatList,View } from 'react-native';
import React from 'react';
import TestIconItem from '../components/IconSibaComponent';

export default class IconSibaScreen extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('otherParam', 'Home Nef'),
      headerStyle: {
        backgroundColor: 'pink'
      },
    };
  };

  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, name: "Ahihi Phong 1" },
        { id: 2, name: "Ahihi Phong 2" },
        { id: 3, name: "Ahihi Phong 3" },
        { id: 4, name: "Ahihi Phong 4" },
        { id: 5, name: "Ahihi Phong 5" }
      ]
    };
  }

  render() {
    const { items } = this.state
    return (
        <View style={styles.containerApp}>
          <FlatList
            data={items}
            renderItem={({ item }) => <TestIconItem item={item} />}
            keyExtractor={(item) => `${item.id}`} />
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

