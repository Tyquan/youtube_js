import React from 'react';
import { StyleSheet, View } from 'react-native';
import firebase from 'firebase';
import Header from './src/components/common/Header';
// import LoginForm
import LoginForm from './src/components/LoginForm';




export default class App extends React.Component {
  
  componentWillMount(){
    firebase.initializeApp({
      apiKey: "AIzaSyD5_sZLXF-_Mb__YqFOLJ9JI8mT8Dny-WA",
      authDomain: "authentication-beeb6.firebaseapp.com",
      databaseURL: "https://authentication-beeb6.firebaseio.com",
      projectId: "authentication-beeb6",
      storageBucket: "authentication-beeb6.appspot.com",
      messagingSenderId: "589537086102"
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Header headerText="Authentication" />
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
