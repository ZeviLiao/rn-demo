import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {Avatar, Badge, Icon, withBadge} from 'react-native-elements';

// import {LinearGradient} from '../components/LinearGradient';

class Badges extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: 0,
      selectedIndexes: [0, 2, 3],
    };
  }

  render() {
    return (
      <View style={{alignItems: 'center'}}>
        <Badge value="99+" status="error" />
        <Badge value={<Text>My Custom Badge</Text>} />
        <Badge status="success" />
        <Badge status="error" />
        <Badge status="primary" />
        <Badge status="warning" />
        <View>
          <Avatar
            rounded
            source={{
              uri: 'https://randomuser.me/api/portraits/men/41.jpg',
            }}
            size="large"
          />

          <Badge
            status="success"
            containerStyle={{position: 'absolute', top: 5, right: 5}}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
  },
  contentView: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: 20,
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 40,
    backgroundColor: '#4F80E1',
    marginBottom: 20,
  },
  heading: {
    color: 'white',
    marginTop: 10,
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default Badges;
