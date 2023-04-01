import { SafeAreaView, View, Text, StyleSheet, Button } from 'react-native';

const Login = ({ navigation }) => {

  const signInWithKakao = async () => {
    // const result: KakaoOAuthToken = await loginWithKakaoAccount();
    // dispatch(
    //   authActions.logInAction({
    //     snsToken: result.accessToken,
    //     isKakao: true,
    //     type: AUTH_ACTION_TYPE.login.request,
    //   })
    // );
  };

  const signInWithGoogle = async () => {
    // const appleToken = await onAppleButtonPress();
    // dispatch(authActions.logInAction({ snsToken: appleToken, isKakao: false }));
  };


  return (
    <SafeAreaView>
      <Text>Login</Text>
      <View>
        <Button
          title = "Kakao"
          onPress={signInWithKakao}
        />
         <Button
          title="Google"
          onPress={signInWithGoogle}
        />
      </View>
      <Button
        title="ACOE"
        onPress={ () => navigation.navigate('ACOE')}
      />
    </SafeAreaView>
  )
}

export default Login;