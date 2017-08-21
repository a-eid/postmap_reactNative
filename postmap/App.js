import React from "react";
import { Text, View , StatusBar , TextInput ,  TouchableOpacity} from "react-native";
import { StackNavigator } from "react-navigation";
import MapScreen from "./screens/mapScreen"

class HomeScreen extends React.Component {
  state = {
    valid: false , 
    username: "" , 
  }

  static navigationOptions = {
    title: "Home"
  };

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <StatusBar hidden={true} />
        <TextInput
          placeholder="Enter Your name"
          style={{ height: 50 , width: 250 }}
          onChangeText={ username => this.setState({ username , valid: true }) }
          value={ this.state.username }
        />
        <TouchableOpacity onPress={ () => this.state.valid && this._handlePress() } style={{ height: 50 ,width: 100 , backgroundColor: "#444" , justifyContent: "center" , alignItems: "center" }}>
          <Text>HomeScreen!</Text>
        </TouchableOpacity>
      </View>
    );
  }

  _handlePress = () => {
    this.props.navigation.navigate("Map" , {
      username: this.state.username  
    });
  };
}

export default StackNavigator({
  Home: {
    screen: HomeScreen
  },
  Map:{
    screen: MapScreen 
  }
});
