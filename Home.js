import React from 'react';
import {
    Animated,
    TouchableOpacity
} from 'react-native';


export default class Home extends React.Component {
    constructor() {
        super()
        this.springValue = new Animated.Value(1);
    }

    componentDidMount() {
        this.spring()
    }

    spring = () => {
        this.springValue.setValue(1);

        Animated.timing(this.springValue, {
            toValue: 0,

        }).start()
    }

    render() {
        const opacity = this.springValue.interpolate({
            inputRange: [0, 1],
            outputRange: [1, 0]
        })
        return (
            <TouchableOpacity
                style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}
                onPress={() => this.props.navigation.navigate('Details')}
            >   <Animated.Image
                    style={{ width: 200, height: 200, opacity }}
                    source={{ uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png' }}
                />
            </TouchableOpacity>
        )
    }
}