import React, {Component} from 'react';
import { TextInput, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { todoAdd, removeItem } from '../store/action';

class MainPage extends Component {
  constructor(props) {
      super(props);
      this.state = {
        textBox: '',
        todoItems: [],
      };
    }

    componentDidMount() {
    }

    textboxChange = (text) => {
      this.setState({ textBox: text });
    }

    componentWillReceiveProps(props) {
      this.setState({ todoItems: this.props.todoItems});
    }
    
    render() {
        return (
          <View style={{ flex: 1 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', borderBottomColor: 'gray', borderBottomWidth: 1 }} >
              <TextInput
                value={this.state.textBox}
                onChangeText={(e) => { this.textboxChange(e) }}
              />
              <TouchableOpacity
                onPress={() => {
                  this.props.todoAdd(this.state.textBox);
                  this.setState({ textBox: '' });
                }}
              >
                <Text> ADD </Text>
              </TouchableOpacity>
            </View>
            <FlatList
              data={this.props.todoItems}
              renderItem={({item, index}) => {
                return (
                  <Text
                    onPress={
                    ()=> {
                      this.props.removeItem(index);
                    }}
                  >
                    {item}
                  </Text>
                )
              }}
            />
          </View>
        );
    }
}



const mapStateToProps = state => {
    return {
      todoItems: state.todo.todoItems,
    }
}

const mapDispatchToProps = dispatch => {
    return {
      todoAdd: (t) => dispatch(todoAdd(t)),
      removeItem: (item) => dispatch(removeItem(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
