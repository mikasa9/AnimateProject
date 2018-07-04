import React from 'react';
import {
  Animated,
 
  Text,
  TouchableOpacity
} from 'react-native';


export default class App extends React.Component {
  constructor() {
    super()
    this.animateValue = new Animated.Value(1);
  }
 
  press=()=>{
    this.animate()
  }

  animate = () => {
    this.animateValue.setValue(1)
    Animated.timing(this.animateValue, {
      toValue: 0,
      duration: 4000
    }).start()
  }
  render() {
    return (
      <Animated.View style={{ opacity: this.animateValue }}>
        <TouchableOpacity
         onPress={this.press}>
          <Animated.Image
            style={{ height: 220, width: 220 }}      
           source={{ uri:'https://images.pexels.com/photos/531880/pexels-photo-531880.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' }} />
        </TouchableOpacity>
        <Text style={{fontSize:24}}>Hello</Text>
      </Animated.View>
    )
  }
}