import React, { Component } from "react";
import { SafeAreaView, Platform } from "react-native";
import { WebView } from "react-native-webview";
import HTML_FILE from "./android/app/src/main/assets/www/index.html";
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
          javaScriptEnabled={true}
          domStorageEnabled={true}
        />
      );
    }
  }
}