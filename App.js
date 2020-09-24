import React, { Component } from "react";
import { StyleSheet, Text, View, Button,Platform } from "react-native";
import { WebView } from "react-native-webview";
import HTML_FILE from "./www/index.html";
const isAndroid= Platform.OS==='android';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }
  renderElement() {
      
  }
  render() {
    if(isAndroid){
      return (
          <WebView
            style={{flex: 1}}
            originWhitelist={['*']}
            source={{uri:'file:///android_asset/www/index.html'}}
            style={{ marginTop: 5 }}
            javaScriptEnabled={true}
            domStorageEnabled={true}
          />
      )
    }else{
      return(
        <WebView
          style={{flex: 1}}
          originWhitelist={['*']}
          source={HTML_FILE}
          style={{ marginTop: 5 }}
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      );
    }
  }
}