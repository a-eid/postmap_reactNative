import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity
} from "react-native";

export default class Form extends Component {
  constructor(props) {
    super(props);
  }
  state = { title: "", content: "" };

  render() {
    return (
      <View>
        <TextInput
          placeholder="post title"
          style={{ height: 30, borderColor: "gray", borderWidth: 1 }}
          onChangeText={title => this.props.handleChange("title", title)}
          value={this.props.title}
        />

        <TextInput
          placeholder="post content"
          style={{ height: 50 }}
          onChangeText={content => this.props.handleChange("content", content)}
          value={this.props.content}
        />

        <TouchableOpacity
          style={{
            height: 50,
            width: 100,
            backgroundColor: "#444",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={this.props.handleClick}
        >
          <Text style={{ color: "#fff" }}> Create Post </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
