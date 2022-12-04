import React, {Component} from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import api from './src/service/api';
import Filmes from './src/screens/index';

class App extends Component{
  
  constructor(props){
    super(props);

    this.state ={
      filmes: []
    }
  }

  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes');
    this.setState({
      filmes: response.data
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <FlatList
        data={this.state.filmes}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => <Filmes data={item}/>}
        />
      </View>
    )
  }

}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 100,
  },
});