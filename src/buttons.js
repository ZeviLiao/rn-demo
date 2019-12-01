import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {Button, ButtonGroup, Icon} from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

// import {LinearGradient} from '../components/LinearGradient';

class Buttons extends Component {
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
        <Button title="Solid Button" />

        <Button title="Outline button" type="outline" />
        <Text>&nbsp;</Text>

        <Button title="Clear button" type="clear" />
        <Text>&nbsp;</Text>

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          title="Button with icon component"
        />
        <Text>&nbsp;</Text>
        <Button
          icon={{
            name: 'arrow-right',
            size: 15,
            color: 'white',
          }}
          title="Button with icon object"
        />
        <Text>&nbsp;</Text>

        <Button
          icon={<Icon name="arrow-right" size={15} color="white" />}
          iconRight
          title="Button with right icon"
        />

        <Button title="Loading button" loading />
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

export default Buttons;
