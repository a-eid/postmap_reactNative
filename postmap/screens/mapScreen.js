import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  StatusBar
} from "react-native";
import { Constants, Location, Permissions, MapView } from "expo";
import Form from "../components/form";
import { send } from "../wsInit";

export default class App extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.state.params.username
    };
  };

  state = {
    content: "",
    title: "",
    position: null,
    error: null,
    markers: [],
    author: "anon"
  };

  componentWillMount() {
    if (Platform.OS === "android" && !Constants.isDevice) {
      this.setState({
        error:
          "Oops, this will not work on an Android emulator. Try it on your device!"
      });
    } else {
      this._getLocationAsync();
    }

    // this.state.markers.length == 0 && this.addTestMarker();
    this.setState({
      author : this.props.navigation.state.params.username
    })
  }

  handleChange = (item, value) => {
    this.setState({
      [item]: value
    });
  };

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      this.setState({
        errorMessage: "Permission to access location was denied"
      });
    }

    let position = await Location.getCurrentPositionAsync({});
    this.setState({ position });
  };

  renderMarkers = () => {
    const colors = ["red", "yellow", "blue", "green", "red", "white", "black"];
    const i = Math.floor(Math.random() * colors.length);
    return this.state.markers.map(marker =>
      <MapView.Marker
        key={Date.now()}
        coordinate={marker.position.coords}
        title={marker.title}
        description={`${marker.content} - by ${marker.author}`}
        pinColor={colors[i]}
      />
    );
  };

  addmarker = () => {
    send({
      content: this.state.content,
      title: this.state.title,
      author: this.state.author,
      position: this.state.position
    });

    this.setState({
      markers: [
        ...this.state.markers,
        {
          content: this.state.content,
          title: this.state.title,
          author: this.state.author,
          position: this.state.position
        }
      ]
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "stretch" }}
        >
          <Form
            style={{ flex: 1 }}
            content={this.state.content}
            title={this.state.title}
            handleChange={this.handleChange}
            handleClick={this.addmarker}
          />
        </View>
        {(this.state.position &&
          <MapView
            style={{ flex: 3 }}
            initialRegion={{
              ...this.state.position.coords,
              latitudeDelta: 0.1922,
              longitudeDelta: 0.0421
            }}
          >
            {this.renderMarkers()}
          </MapView>) ||
          <Text>Loading Map..</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center"
  }
});

// ignore: for testing
addTestMarker = post => {
  // console.log("add");
  // setTimeout(() => {
  //   this.setState({
  //     markers: [...this.state.markers, { ...this.state.location.coords }]
  //   });
  // }, 2000);
  // send( {
  //   ...this.state.location,
  //   ...{
  //     author: this.state.author ,
  //     title: this.state.title,
  //     content: this.state.content,
  //   }
  // })
};
