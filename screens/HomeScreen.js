import React, { Component } from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  AppRegistry,
  Button,
  Slider,
  Dimensions,
  Navigator,
} from 'react-native';
import { WebBrowser } from 'expo';

import { navigation } from '../navigation/MainTabNavigator';

import { MonoText } from '../components/StyledText';

const height = Dimensions.get('window').height;

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null,
    title: 'HomeScreen',
  };


  render() {

    const { navigate } = this.props.navigation;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

<SearchTab></SearchTab>
  <Button
            title="Press me"
            onPress={() =>
              navigate('LinksScreen')}
          />
        </ScrollView>
      </View>
    );
  }
}

  class SearchTab extends Component {
  constructor(props) {
    super(props);
    this.state = {text: ''};
    this.state = {question: '2'};
  }



  onValueChange(value) {
    this.setState({ question: value });
  }



  render() {

const { value } = this.state;
const { question } = this.state;




     return (
       <View style={{padding: 10}}>
         <View style={{backgroundColor: '#9370DB'}}>
         <TextInput
           style={{height: 40}}
           placeholder="Search Image"
           onChangeText={(text) => this.setState({text})}
         />
</View>
       <View style={{backgroundColor: '#F0E68C'}}>
<Text style={{alignContent: 'center', fontSize: 20,padding: 25,backgroundColor: '#808080'}}>

  { question } row

</Text>
</View>
<View>
        <Slider
          minimumValue={1}
          maximumValue={5}
          minimumTrackTintColor="#1EB1FC"
          maximumTractTintColor="#1EB1FC"
          step={1}
          value={2}
          onValueChange={value => this.onValueChange(value)}
          style={styles.slider}
          thumbTintColor="#1EB1FC"
        />
      </View>

<View>


</View>

</View>
     );
   }
 }


 AppRegistry.registerComponent('SearchTab', () => SearchTab);




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  slider: {
    backgroundColor: '#ADFF2F',
},
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#98FB98',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  searchInput: {
    width: 200,
    alignItems: 'center',
    backgroundColor: '#ADFF2F',
  },
});
