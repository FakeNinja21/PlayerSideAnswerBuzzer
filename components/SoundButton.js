import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import db from "../config"

class SoundButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3',
      },
      { shouldPlay: true }
    );
  };
isButtonPressed(buttoncolor){
  var time = new Date().getTime()
  var team = db.ref("teams/"+ buttoncolor +"/")
  team.update({
    "isButtonPressed": true,
    "timestamp": time
  })
}

enteringAnswer = (buttoncolor) => {
  var answer = window.prompt("What is your name?")
  var teamSecond = db.ref("teams/" + buttoncolor + "/")
  teamSecond.update({
    "answer": answer
  })
}

  render() {
    return (
      <TouchableOpacity
        style={[styles.button, { backgroundColor: this.props.color }]}
        onPress={() => {
          var buttoncolor = this.props.color
          this.isButtonPressed(buttoncolor)
          this.playSound()
          this.enteringAnswer(buttoncolor)
        }}>
        <Text style={styles.buttonText}>Press Me</Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    marginLeft: 80,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 200,
    backgroundColor: 'red',
    borderRadius: 100,
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default SoundButton;
