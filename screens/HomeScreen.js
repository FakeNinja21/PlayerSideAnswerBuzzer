import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import AppHeader from '../components/AppHeader';
import db from "../config"

export default class HomeScreen extends React.Component {
  goToBuzzerScreen = (buzzercolor) => {
    this.props.navigation.navigate('BuzzerScreen', { color: buzzercolor });
  };
  render() {
    return (
      <View>
        <AppHeader />

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'red' }]}
          onPress={() => {
            var teamFirstRed = db.ref('teams/red/ifButtonPressed');
            teamFirstRed.on('value', (data) => {
              var teamSecondRed = data.val();
              if (teamSecondRed == false){
                var teamThirdRed = db.ref('teams/red/')
                teamThirdRed.update({
                  "ifButtonPressed": true
                })
                this.goToBuzzerScreen('red');
              } else if (teamSecondRed == true){
  
              }
            })
          }}>
          <Text style={styles.buttonText}>Team 1</Text>
        </TouchableOpacity>
            
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'green' }]}
          onPress={() => {
            var teamFirstGreen = db.ref('teams/green/ifButtonPressed');
            teamFirstGreen.on('value', (data) => {
              var teamSecondGreen = data.val();
              if (teamSecondGreen == false){
                var teamThirdGreen = db.ref('teams/green/')
                teamThirdGreen.update({
                  "ifButtonPressed": true
                })
                this.goToBuzzerScreen('green');
              } else if (teamSecondGreen == true){
                
              }
            })
          }}>
          <Text style={styles.buttonText}>Team 2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={() => {
           var teamFirstBlue = db.ref('teams/blue/ifButtonPressed');
            teamFirstBlue.on('value', (data) => {
              var teamSecondBlue = data.val();
              if (teamSecondBlue == false){
                var teamThirdBlue = db.ref('teams/blue/')
                teamThirdBlue.update({
                  "ifButtonPressed": true
                })
                this.goToBuzzerScreen('blue');
              } else if (teamSecondBlue == true){
                
              }
            })
          }}>
          <Text style={styles.buttonText}>Team 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'yellow' }]}
          onPress={() => {
            var teamFirstYellow = db.ref('teams/yellow/ifButtonPressed');
            teamFirstYellow.on('value', (data) => {
              var teamSecondYellow = data.val();
              if (teamSecondYellow == false){
                var teamThirdYellow = db.ref('teams/yellow/')
                teamThirdYellow.update({
                  "ifButtonPressed": true
                })
                this.goToBuzzerScreen('yellow');
              } else if (teamSecondYellow == true){
                
              }
            })
          }}>
          <Text style={styles.buttonText}>Team 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignSelf: 'center',
    borderWidth: 2,
    borderRadius: 15,
    marginTop: 50,
    width: 200,
    height: 50,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
  },
});
