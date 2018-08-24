import React from 'react';
import { Button, View, Text,TextInput, TouchableOpacity ,StyleSheet,Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation'; 
import ImageSlider from 'react-native-image-slider';

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <ImageSlider images={[
    'https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350',
    'http://placeimg.com/640/480/any',
    'https://images.pexels.com/photos/433539/pexels-photo-433539.jpeg?auto=compress&cs=tinysrgb&h=350'
  ]}/>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Details')}
        />
      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Login"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
    );
  }
}
class LoginScreen extends React.Component {
  render() {
    return (
      <View style={styles.formContainer}>
        <TextInput style = {styles.input} 
               autoCapitalize="none" 
               onSubmitEditing={() => this.passwordInput.focus()} 
               autoCorrect={false} 
               keyboardType='email-address' 
               returnKeyType="next" 
               placeholder='Email or Mobile Num' 
               placeholderTextColor='#c3d1e0'/>
               <TextInput style = {styles.input}   
               returnKeyType="go" 
               ref={(input)=> this.passwordInput = input} 
               placeholder='Password' 
               placeholderTextColor='#c3d1e0' 
               secureTextEntry/>
               <Button
          title="Login"
          onPress={() =>Alert.alert('login successfully')}
          />
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
    Login:LoginScreen
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
},
container:{
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
},
  
  input:{
      height: 40,
      backgroundColor: 'rgba(225,225,225,0.2)',
      marginBottom: 10,
      padding: 10,
      color: '#0e0e0e'
  },
  
})
