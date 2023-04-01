import { View, Text, StyleSheet, Button } from 'react-native';
import { WebView } from 'react-native-webview';
import React, {useState, useEffect, useRef} from 'react';

const ACOE = ({ navigation }) => {
  const styles = StyleSheet.create({
    acoe: {
      flex: 1,
    }
  })

  const eventScript = () => {

  }


  const webViewRef = useRef()

  useEffect(() => {
    webViewRef.current.postMessage('업데이트 하세요')
    //message를 앱에 보내면 redirect 하기 ! 
  }, [])

  return (
    <>
      <View>
        <Button
          title="Login"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
      <WebView
        //source={{ uri: 'https://acoe.vercel.app/login' }}
        source={{ uri: 'https://www.google.co.kr/' }}
        // injectedJavaScript={`
        //   alert(navigator.userAgent);
        // `}
        ref={webViewRef}
      />
    </>
  )
}

export default ACOE;