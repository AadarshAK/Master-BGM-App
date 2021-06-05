import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity, ImageBackground} from 'react-native';
import { Audio } from 'expo-av';

class SoundButton extends Component {
  MasterTheBlaster = async () => {
    await Audio.Sound.createAsync(
      {
        uri: require('./assets/mtb.mp3'),
      },

      { shouldPlay: true }
    );
  };

  JdTheAlcoholic = async () => {
    await Audio.Sound.createAsync(
      {
        uri: require('./assets/JDtheAlcoholic.mp3'),
      },

      { shouldPlay: true }
    );
  };

  JdBadass = async () => {
    await Audio.Sound.createAsync(
      {
        uri: require('./assets/jdb.mp3'),
      },

      { shouldPlay: true }
    );
  };

  JdxB = async () => {
    await Audio.Sound.createAsync(
      {
        uri: require('./assets/jdvsb.mp3'),
      },

      { shouldPlay: true }
    );
  };

  render() {
    return (
      <View>

      <ImageBackground source={require('./assets/masterBg.jpg')}

      > 


              <Text style={{
              marginTop:0,
              fontSize: 25,
              textAlign:"center",
              backgroundColor:'yellowgreen',
              height:"100%",
              color: 'black',
        }}>Master BGM App</Text>

       
        <TouchableOpacity
          onPress={this.MasterTheBlaster}
          style={{
            marginTop: 400,
            marginLeft: 65,
            width: 200,
            backgroundColor: 'red',
            borderRadius: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
            }}>
            Master The Blaster
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.JdTheAlcoholic}
          style={{
            marginTop: 20,
            marginLeft: 65,
            width: 200,
            backgroundColor: 'green',
            borderRadius: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
            }}>
            JD Theme 1
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.JdBadass}
          style={{
            marginTop: 20,
            marginLeft: 65,
            width: 200,
            backgroundColor: 'yellow',
            borderRadius: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
            }}>
            JD Juveinile Entry
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={this.JdxB}
          style={{
            marginTop: 20,
            marginLeft: 65,
            width: 200,
            backgroundColor: 'blue',
            borderRadius: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
            }}>
            JD vs Bhavani
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            Audio.setIsEnabledAsync(false);
          }}
          style={{
            backgroundColor: 'black',
            marginTop: 50,
            marginLeft: 65,
            width: 200,
            borderRadius: 100,
          }}>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 25,
              color: 'white',
            }}>
            Stop Music
          </Text>
        </TouchableOpacity>

      </ImageBackground>
      </View>
    );
  }
}
//https://mobilebgmringtones.com/master-bgm-ringtones-ost-download/07-jd-badass-theme-bgm/
export default class App extends Component {
  render() {
    return <SoundButton />;
  }
}
